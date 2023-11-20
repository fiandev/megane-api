import { FaArrowRight } from "react-icons/fa";

export default function BrowseMorrButton({ text }) {
  return (
    <button className="text-sublight dark:subdark capitalize flex gap-2 font-bold items-center">
      {text}
      <FaArrowRight />
    </button>
  );
}
