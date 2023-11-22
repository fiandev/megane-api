import { Link } from "react-router-dom";

export default function GetStartedButton({ href, children, className }) {
  const EXTERNAL_URL_EXP = /^(http(s)?)?\:?\/\//;
  return (
    <button
      className={`capitalize text-light p-2 flex items-center justify-center rounded-md ${className}`}
    >
      {EXTERNAL_URL_EXP.test(href) ? (
        <a href={href}>{children}</a>
      ) : (
        <Link to={href}>{children}</Link>
      )}
    </button>
  );
}
