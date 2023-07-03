import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Timer } from "./pages/Timer";
import { Stopwatch } from "./pages/Stopwatch";

function App() {
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
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </>
  );
}

export default App;
