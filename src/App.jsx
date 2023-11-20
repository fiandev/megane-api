import Router from "./Router";
import { GlobalThemeProvider } from "./hooks/useTheme";
import "./assets/css/base.css";

export default function App() {
  return (
    <GlobalThemeProvider>
      <Router />
    </GlobalThemeProvider>
  );
}
