import { SiFastapi } from "react-icons/si";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import LandingProfile from "../organisms/LandingProfile";
import LandingFeature from "../organisms/LandingFeature";
import LandingApiList from "../organisms/LandingApiList";

export default function Home() {
  return (
    <div className="p-2 lg:p-8 flex flex-col gap-4 bg-light dark:bg-dark">
      <LandingProfile />
      <LandingFeature />
      <LandingApiList />
    </div>
  );
}
