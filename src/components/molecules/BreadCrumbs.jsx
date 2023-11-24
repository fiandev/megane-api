import { Link } from "react-router-dom";

export default function BreadCrumbs() {
  let { pathname } = window.location;
  let pathnames = pathname.split("/").filter((v) => !!v);

  return (
    <nav className="flex p-2 bg-light dark:bg-dark" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-subdark dark:text-sublight hover:text-subprimary"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            home
          </Link>
        </li>
        {pathnames.map((path) => {
          return (
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-subdark dark:text-sublight mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  to={`/${path}`}
                  className={`text-sm font-medium text-subdark dark:text-sublight ${
                    path == pathnames[pathnames.length - 1]
                      ? "text-subprimary font-bold"
                      : ""
                  } hover:text-subprimary md:ms-2`}
                >
                  {path}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
