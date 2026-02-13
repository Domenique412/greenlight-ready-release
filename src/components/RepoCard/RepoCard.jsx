import "./RepoCard.css";
import StatusBadge from "../StatusBadge/StatusBadge.jsx";

function RepoCard({ repo }) {
  const updatedDate = new Date(repo.updated_at).toLocaleString();

  return (
    <article className="repo-card">
      <div className="repo-card__header">
        <h2 className="repo-card__title">{repo.name}</h2>
        <StatusBadge status={repo.readinessStatus || "unknown"} />
      </div>

      <p className="repo-card__meta">Last updated: {updatedDate}</p>

      <div className="repo-card__links">
        <a
          className="repo-card__link"
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >
          Open repo
        </a>
        {repo.latestRunUrl ? (
          <a
            className="repo-card__link"
            href={repo.latestRunUrl}
            target="_blank"
            rel="noreferrer"
          >
            View latest run
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default RepoCard;
