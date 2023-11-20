import { Link } from "react-router-dom";

export default function LinkItem({ className, href, children }) {
  return (
    <Link to={href} className={`hover:underline ${className}`}>
      {children}
    </Link>
  );
}
