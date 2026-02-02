import { Link } from "react-router-dom";

export default function CreatorCard({ creator }) {
  return (
    <article className="creator-details-card">
      <h3 style={{ marginBottom: "1rem" }}>{creator.name}</h3>
      <p style={{ marginBottom: "1rem" }}>{creator.description}</p>

      <a
        href={creator.url}
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: "auto" }}
      >
        Visit Channel
      </a>

      <Link to={`/creator/${creator.id}`}>Details</Link>
    </article>
  );
}
