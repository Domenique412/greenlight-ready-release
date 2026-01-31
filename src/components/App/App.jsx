import { Routes, Route } from "react-router-dom";
import { useState } from "react";
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

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  function handleSearchQueryChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();

    const trimmedQuery = searchQuery.trim();

    setErrorMessage("");
    setRepos([]);

    if (!trimmedQuery) {
      setErrorMessage("Please enter a GitHub username or organization.");
      return;
    }
    setHasSearched(true);
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
              // If workflows are disabled or inaccessible, keep it unknown
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
      <Header />

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
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
