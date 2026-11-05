import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="card">
      <h2>404</h2>
      <p>No page here.</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
}
