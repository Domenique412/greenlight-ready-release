// src/components/App/App.jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
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

  function handleSearchQueryChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    setErrorMessage("");
    // Next step: call GitHub API here
    // For now, just keep the UI wired up
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
