// import FeatureList from "../molecules/FeatureList";
import { MdMoneyOff } from "react-icons/md";
import { FaShield, FaRobot } from "react-icons/fa6";
import { FaBook, FaRocket } from "react-icons/fa";

export default function LandingFeature() {
  return (
    <div className="flex flex-col gap-2 lg:h-[60vh] items-start justify-center text-start">
      <div>
        <h1 className="text-2xl text-dark dark:text-light font-extrabold uppercase">
          features
        </h1>
        <h2 className="text-lg text-subdark dark:text-sublight font-semibold capitalize">
          The following features are available in our service
        </h2>
      </div>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4">
        <div className="flex items-center justify-center gap-2 h-40 p-2 overflow-auto bg-secondary rounded-md shadow-md">
          <div className="flex items-center justify-center w-1/4 h-full">
            <div className="flex items-center justify-center w-full h-full text-xl rounded-lg text-light">
              <FaRocket />
            </div>
          </div>
          <div className="w-3/4 flex flex-col items-start justify-end text-start">
            <h1 className="text-light text-lg capitalize font-semibold">
              fast and efficient performance
            </h1>
            <p className="text-light text-sm">
              The available API is built using the Python programming language
              so there is no need to doubt its speed and efficiency.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 h-40 p-2 overflow-auto bg-secondary rounded-md shadow-md">
          <div className="flex items-center justify-center w-1/4 h-full">
            <div className="flex items-center justify-center w-full h-full text-xl rounded-lg text-light">
              <MdMoneyOff />
            </div>
          </div>
          <div className="w-3/4 flex flex-col items-start justify-end text-start">
            <h1 className="text-light text-lg capitalize font-semibold">
              free
            </h1>
            <p className="text-light text-sm">
              you don't need to spend money to use the available APIs
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 h-40 p-2 overflow-auto bg-secondary rounded-md shadow-md">
          <div className="flex items-center justify-center w-1/4 h-full">
            <div className="flex items-center justify-center w-full h-full text-xl rounded-lg text-light">
              <FaBook />
            </div>
          </div>
          <div className="w-3/4 flex flex-col items-start justify-end text-start">
            <h1 className="text-light text-lg capitalize font-semibold">
              complete documentation
            </h1>
            <p className="text-light text-sm">
              We try to make API documentation easy to read and understand
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 h-40 p-2 overflow-auto bg-secondary rounded-md shadow-md">
          <div className="flex items-center justify-center w-1/4 h-full">
            <div className="flex items-center justify-center w-full h-full text-xl rounded-lg text-light">
              <FaRobot />
            </div>
          </div>
          <div className="w-3/4 flex flex-col items-start justify-end text-start">
            <h1 className="text-light text-lg capitalize font-semibold">
              documentation supports integration with bots
            </h1>
            <p className="text-light text-sm">
              Our API really supports integration with bots because it uses the
              Json file format
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
