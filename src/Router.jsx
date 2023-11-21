import { Suspense, lazy } from "react";
import {
  BrowserRouter as ReactRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import LandingTemplate from "./components/templates/LandingTemplate";
import DocsTemplate from "./components/templates/DocsTemplate";
import Home from "./components/pages/Home";
import Docs from "./components/pages/Docs";
import APIDOCS from "./components/pages/APIDOCS";
import { lists } from "./constants/APIs";

// const Home = lazy(() => import("./components/pages/Home"));
// const Docs = lazy(() => import("./components/pages/Docs"));
// const APIDOCS = lazy(() => import("./components/pages/APIDOCS"));
// const DocsLahelu = lazy(() => import("./components/pages/docs/DocsLahelu"));

const SuspenseLayout = () => (
  <Suspense>
    <Outlet />
  </Suspense>
);

export default function Router() {
  return (
    <ReactRouter>
      <Routes>
        <Route element={<SuspenseLayout />}>
          <Route element={<LandingTemplate />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
          </Route>
          <Route element={<DocsTemplate />}>
            {lists.map((api) => (
              <Route path={api.path} element={<APIDOCS path={api.path} />} />
            ))}
          </Route>
        </Route>
      </Routes>
    </ReactRouter>
  );
}
