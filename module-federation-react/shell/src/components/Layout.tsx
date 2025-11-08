import React from "react";
import { Link, Outlet } from "react-router-dom";
import { app1RoutingPrefix, app2RoutingPrefix } from "../routing/constants";

export function Layout() {
  return (
    <>
      <div className="floatleft" style={{ width: "100%", height: "100%" }}>
        <div
          className="floatleft horizontalli"
          style={{ width: "100%", height: "20%", backgroundColor: "red" }}
        >
          <header>
            <nav style={{ marginBottom: "3rem" }}>
              <Link
                to={`/${app1RoutingPrefix}/page-1`}
                style={{ marginRight: "1rem" }}
              >
                App1 Page1
              </Link>
              <Link
                to={`/${app1RoutingPrefix}/page-2`}
                style={{ marginRight: "1rem" }}
              >
                App1 Page2
              </Link>
              <Link
                to={`/${app2RoutingPrefix}/page-a`}
                style={{ marginRight: "1rem" }}
              >
                App2 PageA
              </Link>
              <Link to={`/${app2RoutingPrefix}/page-b`}>App2 PageB</Link>
            </nav>
          </header>
        </div>
        <div className="floatleft" style={{ width: "100%", height: "80%" }}>
          <div
            className="floatleft"
            style={{ width: "20%", height: "100%", backgroundColor: "green" }}
          >
            <ul>
              <li>sidebar1</li>
              <li>sidebar2</li>
              <li>sidebar3</li>
            </ul>
          </div>
          <div
            className="floatleft"
            style={{ width: "80%", height: "100%", backgroundColor: "yellow" }}
          >
            <Outlet />
          </div>
        </div>
        <div
          className="floatleft horizontalli"
          style={{ width: "100%", height: "20%", backgroundColor: "blue" }}
        >
          <footer>
            <ul>
              <li>About</li>
              <li>career</li>
              <li>punch</li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}
