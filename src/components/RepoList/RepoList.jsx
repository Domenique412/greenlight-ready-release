// src/components/RepoList/RepoList.jsx
import "./RepoList.css";
import RepoCard from "../RepoCard/RepoCard.jsx";

function RepoList({ repos }) {
  return (
    <section className="repos" aria-label="Repositories">
      <ul className="repos__list">
        {repos.map((repo) => (
          <li className="repos__item" key={repo.id}>
            <RepoCard repo={repo} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RepoList;
