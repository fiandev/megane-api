import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../organisms/Navigation";
import Footer from "../organisms/Footer";

export default function LandingTemplate({ children }) {
  return (
    <div className="container relative bg-light dark:bg-dark w-screen h-fit">
      <Navigation />
      <div className="relative w-full h-screen bg-slate-200 z-10 backdrop-blur backdrop-blur-lg opacity-80">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
