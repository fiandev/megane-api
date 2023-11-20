import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "markdown-to-jsx";
import { useTheme } from "../../hooks/useTheme";

export default function MarkdownCode({ className = "", children }) {
  // const [theme, setTheme] = useTheme();
  const language = className.replace("lang-", "");

  return (
    <div className="codeBlock h-fit relative overflow-scroll">
      <SyntaxHighlighter
        language={language.toLowerCase()}
        style={materialDark}
        customStyle={{
          position: "static",
          height: "fit-content",
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

/*
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "markdown-to-jsx";

function Code({ className, children }) {
  const language = className.replace("lang-", "");
  return (
    <div className="codeBlock">
      <SyntaxHighlighter language={language.toLowerCase()} style={materialDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
*/
