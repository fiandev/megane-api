export default function ButtonMenu({ handler, className, navOpen }) {
  return (
    <button
      onClick={handler}
      class={`flex flex-col justify-around w-12 h-12 p-2 lg:hidden group/button bg-transparent `}
      type="button"
    >
      <span
        class={`block w-full h-0.5 bg-dark dark:bg-light transition origin-top-left ease-in ${
          navOpen ? "rotate-45" : ""
        }`}
      ></span>
      <span
        class={`block w-full h-0.5 bg-dark dark:bg-light transition delay-100 ease-in-out origin-center duration-800 ${
          navOpen ? "scale-0" : ""
        }`}
      ></span>
      <span
        class={`block w-full h-0.5 bg-dark dark:bg-light transition origin-bottom-left ease-in ${
          navOpen ? "-rotate-45" : ""
        }`}
      ></span>
    </button>
  );
}
