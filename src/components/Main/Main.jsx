// src/components/Main/Main.jsx
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm.jsx";
import RepoList from "../RepoList/RepoList.jsx";

function Main({
  searchQuery,
  onSearchQueryChange,
  onSearchSubmit,
  repos,
  isLoading,
  errorMessage,
}) {
  return (
    <section className="main">
      <div className="main__container">
        <h1 className="main__title">Welcome to GRR</h1>
        <p className="main__subtitle">
          Search a GitHub username or organization to view repository readiness.
        </p>

        <SearchForm
          value={searchQuery}
          onChange={onSearchQueryChange}
          onSubmit={onSearchSubmit}
          isLoading={isLoading}
        />

        {errorMessage ? (
          <p className="main__message" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <RepoList repos={repos} />
      </div>
    </section>
  );
}

export default Main;
