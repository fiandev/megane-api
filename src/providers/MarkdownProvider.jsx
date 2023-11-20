import Markdown, { compiler } from "markdown-to-jsx";
import MarkdownCode from "../components/molecules/MarkdownCode";

export default function MarkdownProvider({ children }) {
  return (
    <div className="p-2 relative flex flex-col gap-2 font-inter text-dark dark:text-light bg-light dark:bg-dark h-screen overflow-scroll">
      <Markdown
        className="static"
        options={{
          overrides: {
            h1: {
              props: {
                className: "text-3xl font-bold capitalize mb-2",
              },
            },
            h2: {
              props: {
                className: "text-2xl font-semibold capitalize",
              },
            },
            h3: {
              props: {
                className: "text-xl capitalize font-semibold",
              },
            },
            h4: {
              props: {
                className: "text-lg capitalize font-semibold",
              },
            },
            h5: {
              props: {
                className: "text-base capitalize font-semibold",
              },
            },
            p: {
              props: {
                className: "text-sm capitalize font-light mb-2",
              },
            },
            code: {
              component: MarkdownCode,
            },
          },
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
