import { useState } from "react";
import ApiList from "../molecules/ApiList";
export default function Docs() {
  const [tab, setTab] = useState(0);

  return (
    <div className="container bg-light dark:bg-dark p-4 flex flex-col gap-2">
      <div className="h-24">
        <h1 className="text-center text-3xl font-inter text-dark dark:text-light font-extrabold uppercase">
          Get Started
        </h1>
        <h2 className="text-center text-sm mb-4 font-poppins text-subdark dark:text-sublight font-light capitalize">
          Make sure to read the documentation completely so you don't get
          confused when using it
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {Array(10)
          .fill(1)
          .map((v) => (
            <ApiList />
          ))}
      </div>
    </div>
  );
}
