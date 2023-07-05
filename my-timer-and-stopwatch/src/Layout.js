import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/stopwatch">Stopwatch</Link>
          </li>
          <li>
            <Link to="/not-found">Not Found</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
