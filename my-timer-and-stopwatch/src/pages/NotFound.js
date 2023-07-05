import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <h2>404 Not Found</h2>
      <p>Nothing to see here!</p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}
