import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../organisms/Navigation";
import Footer from "../organisms/Footer";

export default function DocsTemplate({ children }) {
  return (
    <div className="container relative bg-light dark:bg-dark w-screen h-fit">
      <Navigation />
      <div className="relative h-fit bg-sublight z-0 backdrop-blur backdrop-blur-lg opacity-80">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
