
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { stopReportingRuntimeErrors } from "react-error-overlay";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/theme";
import { ErrorBoundary } from "react-error-boundary";
import("react-error-overlay").then((m) => {
  m.stopReportingRuntimeErrors();
});


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <ErrorBoundary fallback={<div>Going wrongggggggggggggggggg</div>}>
      <App />
      </ErrorBoundary>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
if (process.env.NODE_ENV === "development" || false) {
  stopReportingRuntimeErrors(); // disables error overlays
}
