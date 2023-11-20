import { useState, useEffect } from "react";
import MarkdownProvider from "../../../providers/MarkdownProvider";

export default function DocsLahelu() {
  const [MarkdownContent, SetMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/markdowns/lahelu.md")
      .then((res) => res.text())
      .then((content) => SetMarkdownContent(content))
      .catch((err) => console.log);
  }, []);

  return (
    <section className="w-full h-fit bg-sublight dark:bg-subdark flex flex-col gap-2">
      {MarkdownContent ? (
        <MarkdownProvider>{MarkdownContent}</MarkdownProvider>
      ) : (
        "loading ..."
      )}
    </section>
  );
}
