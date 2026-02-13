import "./StatusBadge.css";

function StatusBadge({ status }) {
  const label =
    status === "green"
      ? "Green"
      : status === "red"
        ? "Red"
        : status === "yellow"
          ? "Running"
          : "Unknown";

  return (
    <span className={`status__badge status__badge_${status}`}>{label}</span>
  );
}

export default StatusBadge;
