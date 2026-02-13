import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ENDPOINTS } from "../../utils/config.js";
import {
  fetchUserRepos,
  getUserFacingError,
  fetchLatestWorkflowRun,
  mapRunToStatus,
} from "../../utils/githubApi.js";
import "./App.css";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import About from "../About/About.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!isLoginOpen && !isRegisterOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isLoginOpen, isRegisterOpen]);

  function openLogin() {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  }

  function openRegister() {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  }

  function closeModal() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  }

  function handleSearchQueryChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();

    const trimmedQuery = searchQuery.trim();

    setHasSearched(true);
    setErrorMessage("");
    setRepos([]);

    if (!trimmedQuery) {
      setErrorMessage("Please enter a GitHub username or organization.");
      return;
    }

    setIsLoading(true);

    fetchUserRepos(ENDPOINTS.userRepos(trimmedQuery))
      .then((data) => {
        const limitedRepos = data.slice(0, 10);

        const statusPromises = limitedRepos.map((repo) =>
          fetchLatestWorkflowRun(
            ENDPOINTS.latestWorkflowRun(repo.owner.login, repo.name),
          )
            .then((runsData) => {
              const latestRun =
                runsData.workflow_runs && runsData.workflow_runs[0];
              return {
                id: repo.id,
                status: mapRunToStatus(latestRun),
                runUrl: latestRun ? latestRun.html_url : "",
              };
            })
            .catch(() => {
              return { id: repo.id, status: "unknown", runUrl: "" };
            }),
        );

        return Promise.all(statusPromises).then((statuses) => {
          const statusMap = new Map(statuses.map((s) => [s.id, s]));
          const enriched = limitedRepos.map((repo) => {
            const s = statusMap.get(repo.id);
            return {
              ...repo,
              readinessStatus: s ? s.status : "unknown",
              latestRunUrl: s ? s.runUrl : "",
            };
          });

          setRepos(enriched);
        });
      })
      .catch((err) => {
        setErrorMessage(getUserFacingError(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className="app">
      <Header onLogInClick={openLogin} onSignUpClick={openRegister} />

      <main className="app__content">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                searchQuery={searchQuery}
                onSearchQueryChange={handleSearchQueryChange}
                onSearchSubmit={handleSearchSubmit}
                repos={repos}
                isLoading={isLoading}
                errorMessage={errorMessage}
                hasSearched={hasSearched}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeModal}
        onSwitch={openRegister}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeModal}
        onSwitch={openLogin}
      />
      <Footer />
    </div>
  );
}

export default App;
