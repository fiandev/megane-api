import { Link } from "react-router-dom";

export default function Logo({ href, src, name }) {
  return (
    <Link to={href} class="flex items-center">
      <img
        src={`/static/${src[0] === "/" ? src.slice(1) : src} `}
        class="h-8 mr-3"
        alt={name}
      />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        {name}
      </span>
    </Link>
  );
}
