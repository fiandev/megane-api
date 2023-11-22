import { useState, useEffect, useRef } from "react";
import NavLink from "../molecules/NavLink";
import ButtonMenu from "../molecules/ButtonMenu";
import Logo from "../atoms/Logo";
import LandingNavigator from "../../navigators/LandingNavigator";

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [isWindowScrolled, setWindowScrolled] = useState(false);
  const NavRef = useRef();
  const navHandler = () => {
    setNavOpen(!navOpen);
  };

  const scrollHandler = () => {
    let offset = NavRef.current.clientHeight + 5;

    console.log(offset, window.scrollY);
    if (window.scrollY > offset) setWindowScrolled(true);
    else setWindowScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isWindowScrolled]);
  return (
    <nav
      ref={NavRef}
      className={`${
        isWindowScrolled
          ? "shadow-md fixed top-0 inset-x-0 z-[9999]"
          : "relative"
      } bg-light dark:bg-dark border-gray-200 dark:bg-gray-900 `}
    >
      <div
        className={`relative flex flex-col ${
          isWindowScrolled ? "lg:flex-row" : "lg:flex-col"
        } items-center p-2`}
      >
        <div
          className={`w-full flex items-center justify-between ${
            navOpen ? "border-b border-primary" : ""
          } `}
        >
          <Logo href="/" name="megane API" src="/megane.png" />
          <ButtonMenu navOpen={navOpen} handler={navHandler} />
        </div>
        <div
          className={`${
            !navOpen ? "hidden lg:block" : "max-h-fit block"
          } transition w-full delay-500 uppercase lg:w-fit lg:relative bg-slight dark:bg-dark lg:bg-transparent font-bold text-light`}
        >
          <ul className="flex flex-col items-center lg:flex-row gap-2">
            {LandingNavigator.routes.map((navigator) => {
              return <NavLink href={navigator.path} name={navigator.name} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
