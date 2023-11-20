import { Link } from "react-router-dom";

export default function NavLink({ href, name }) {
  return (
    <li
      key={`${name}_${href}`}
      className="w-full text-dark dark:text-subdark p-2 hover:text-primary hover:bg-light"
    >
      <Link to={href} aria-current={name}>
        {name}
      </Link>
    </li>
  );
}
