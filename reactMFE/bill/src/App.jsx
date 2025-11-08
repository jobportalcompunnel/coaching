import React from "react";
import ReactDOM from "react-dom";

import { Link, Routes, Route, BrowserRouter, Router } from "react-router-dom";
import "./index.scss";
import Counter from "./counter";
import InnerShip from "./tenant-mfe/Inner";
import OuterShip from "./tenant-mfe/outer";
import Home from "./tenant-mfe/Home";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>
      <div> Billing MFE2</div>

      <Counter></Counter>
      {location.host !== "localhost:3201" && <BrowserRouter>
        <header className="App-header">
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="bg-green-300">
                    <Link to="/billmfe"> Home </Link>
                  </li>
                  <li className="bg-green-300">
                    <Link to="/billmfe/inner-ship"> Inbound Billing </Link>
                  </li>
                  <li className="bg-green-300">
                    <Link to="/billmfe/outer-ship"> Outer Billing </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route exact path="/billmfe/inner-ship" element={<InnerShip />} />
          <Route exact path="/billmfe/outer-ship" element={<OuterShip />} />
          <Route exact path="/billmfe" element={<Home />} />
        </Routes>
      </BrowserRouter>}
      {location.host === "localhost:3201" && <>
        <header className="App-header">
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="bg-green-300">
                    <Link to="/billmfe"> Home </Link>
                  </li>
                  <li className="bg-green-300">
                    <Link to="/billmfe/inner-ship"> Inbound Billing </Link>
                  </li>
                  <li className="bg-green-300">
                    <Link to="/billmfe/outer-ship"> Outer Billing </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route exact path="/inner-ship" element={<InnerShip />} />
          <Route exact path="/outer-ship" element={<OuterShip />} />
          <Route exact path="/" element={<Home />} />
        </Routes></>}
    </div>
  </div>
);

export default App;
