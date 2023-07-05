import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
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
