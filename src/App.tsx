import { Page } from "./components/Page";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Page />;
    </ErrorBoundary>
  );
}

export default App;
