// src/components/Main/Main.jsx
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm.jsx";
import RepoList from "../RepoList/RepoList.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import { UI_MESSAGES } from "../../utils/config.js";

function Main({
  searchQuery,
  onSearchQueryChange,
  onSearchSubmit,
  repos,
  isLoading,
  errorMessage,
  hasSearched,
}) {
  return (
    <section className="main">
      <div className="main__container">
        <h1 className="main__title">
          Welcome to <span className="main__title-logo">GRR</span>
        </h1>
        <p className="main__subtitle">
          Search a GitHub username or organization to view repository readiness.
        </p>

        <SearchForm
          value={searchQuery}
          onChange={onSearchQueryChange}
          onSubmit={onSearchSubmit}
          isLoading={isLoading}
        />

        {isLoading ? (
          <Preloader />
        ) : errorMessage ? (
          <p className="main__message" role="alert">
            {errorMessage}
          </p>
        ) : hasSearched && repos.length === 0 ? (
          <p className="main__message" role="status">
            {UI_MESSAGES.noRepos}
          </p>
        ) : (
          <RepoList repos={repos} />
        )}
      </div>
    </section>
  );
}

export default Main;
