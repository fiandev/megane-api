export default function CodeSnippet({ language, children }) {
  return (
    <pre className="font-inter max-w-full w-full overflow-x-scroll p-2">
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
