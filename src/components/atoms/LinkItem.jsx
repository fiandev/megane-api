import { Link } from "react-router-dom";

export default function LinkItem({ className, href, children }) {
  const EXTERNAL_URL_EXP = /^(http(s)?)?\:?\/\//;

  return EXTERNAL_URL_EXP.test(href) ? (
    <a href={href} className={`hover:underline ${className}`}>
      {children}
    </a>
  ) : (
    <Link to={href} className={`hover:underline ${className}`}>
      {children}
    </Link>
  );
}
