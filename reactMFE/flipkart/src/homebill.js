import React, { lazy, Suspense, useState, Fragment } from "react";
const BillhostApp = lazy(() => import("billhost/App"));
import ErrorBoundary from "./ErrorBoundary";

function ErrorFallback() {
  return <div>Something went wrong2</div>;
}

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary fallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  </div>
);

const Homebill = ({page}) => {

  alert(page)
  return (
    <div>
      <div>BILL-MODULE</div>
      {page === "bill" && <Suspense fallback={"Loading"}>
                <BillhostApp />
              </Suspense>}
    </div>
  );
};

export default Homebill;
