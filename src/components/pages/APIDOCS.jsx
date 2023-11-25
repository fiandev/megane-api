import { useState, useEffect } from "react";
import MarkdownProvider from "../../providers/MarkdownProvider";
import BreadCrumbs from "../molecules/BreadCrumbs";

export default function APIDOCS({ path }) {
  const [MarkdownContent, SetMarkdownContent] = useState("");
  const ENV = "prod";

  useEffect(() => {
    fetch(
      `${
        ENV !== "dev"
          ? "https://raw.githubusercontent.com/fiandev/megane-api/master/static/"
          : "/"
      }${path[0] === "/" ? path.slice(1) : path}.md`,
    )
      .then((res) => res.text())
      .then((content) => SetMarkdownContent(content))
      .catch((err) => console.log);
  }, []);

  return (
    <section className="w-full h-fit bg-sublight dark:bg-subdark flex flex-col gap-2">
      <BreadCrumbs />
      {MarkdownContent ? (
        <MarkdownProvider>{MarkdownContent}</MarkdownProvider>
      ) : (
        "loading ..."
      )}
    </section>
  );
}
