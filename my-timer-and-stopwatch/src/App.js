import { Route, Routes, Outlet, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { Timer } from "./pages/Timer";
import { Stopwatch } from "./pages/Stopwatch";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
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

function NotFound() {
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
