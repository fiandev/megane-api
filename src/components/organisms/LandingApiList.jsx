import { FaStar } from "react-icons/fa";
import BrowseMoreButton from "../molecules/BrowseMoreButton";
import ApiList from "../molecules/ApiList";
import { lists } from "../../constants/APIs";

export default function LandingApiList() {
  return (
    <div className="flex flex-col gap-2 items-start justify-start text-start">
      <div>
        <h1 className="text-2xl text-dark dark:text-light font-extrabold uppercase">
          APIs List
        </h1>
        <h2 className="text-lg text-subdark dark:text-sublight font-semibold capitalize">
          there it's list of our APIs
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 place-content-center">
        {lists
          ? lists.map((api) => {
              return <ApiList item={api} />;
            })
          : null}
      </div>
      <BrowseMoreButton />
    </div>
  );
}
