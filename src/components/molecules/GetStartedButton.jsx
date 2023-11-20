import { Link } from "react-router-dom";

export default function GetStartedButton({ href, children, className }) {
  return (
    <button
      className={`capitalize text-light p-2 flex items-center justify-center rounded-md ${className}`}
    >
      <Link href={href}>{children}</Link>
    </button>
  );
}
