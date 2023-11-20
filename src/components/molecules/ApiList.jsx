import Statistic from "../atoms/Statistic";
import { Link } from "react-router-dom";

export default function ApiList({ name, path, icon }) {
  return (
    <Link
      to={path}
      className="group/list flex flex-col items-start justify-center gap-2 p-2 bg-light dark:bg-dark border border-secondary rounded-md shadow-md border-2 shadow-secondary text-dark dark:text-light"
    >
      <div className="flex gap-3 items-end justify-center">
        <img
          className="flex w-12 h-12 items-center justify-center text-lg rounded-lg bg-secondary border border-light border-2 text-light"
          src={icon}
        />
        <div className="flex flex-col">
          <h1 className="group-hover/list:text-primary text-lg capitalize font-bold">
            {name}
          </h1>
          <div className="flex items-center gap-2">
            {Array(3)
              .fill(2)
              .map((v) => {
                return <Statistic icon="FaStar" value="10" />;
              })}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-end text-start">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          excepturi placeat id veniam magni, autem illum tenetur dolorem! Esse
          eum magnam, neque officia deserunt ea amet inventore sequi
          reprehenderit dignissimos!
        </p>
      </div>
    </Link>
  );
}
