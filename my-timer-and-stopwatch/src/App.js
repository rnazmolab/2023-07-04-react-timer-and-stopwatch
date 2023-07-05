import { Route, Routes, Outlet, NavLink } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";
import { Timer } from "./pages/Timer";
import { Stopwatch } from "./pages/Stopwatch";
import { NotFound } from "./pages/NotFound";

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
      {/* <Header/> */}
      <SideNavMenu />
      {/* <Footer/> */}

      <Outlet />
    </>
  );
}

function SideNavMenu() {
  return (
    <>
      <nav className="navigation-menu">
        <ul className="menu-items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/timer">Timer</NavLink>
          </li>
          <li>
            <NavLink to="/stopwatch">Stopwatch</NavLink>
          </li>
          <li>
            <NavLink to="/not-found">Not Found</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

// function Header() {}

// function Footer() {}
