import React from "react";
import ReactDOM from "react-dom";
import { Link, Routes, Route, BrowserRouter, Router } from "react-router-dom";
import "./index.scss";
import Counter from "billhost/counter";
import InnerShip from "./order-mfe/Inner";
import OuterShip from "./order-mfe/outer";
import Home from "./order-mfe/Home";
import { useSharedStore } from "sharedStoreApp/store";

const App = (props) => 
{


const commonValue = useSharedStore((state) => state.commonValue);
 // const setCommonValue = useSharedStore((state) => state.setCommonValue);

  return (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>
      <div> Shipping MFE{props?.user}{commonValue}</div>
      <Counter></Counter>
      {location.host !== "localhost:3201" && <BrowserRouter>
        <header className="App-header">
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="bg-red-300">
                    <Link to="/shipmfe"> Home </Link>
                  </li>
                  <li className="bg-red-300">
                    <Link to="/shipmfe/inner-ship"> Inbound Shipping </Link>
                  </li>
                  <li className="bg-red-300">
                    <Link to="/shipmfe/outer-ship"> Outer Shipping </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route exact path="/shipmfe/inner-ship" element={<InnerShip />} />
          <Route exact path="/shipmfe/outer-ship" element={<OuterShip />} />
          <Route exact path="/shipmfe" element={<Home />} />
        </Routes>
      </BrowserRouter>}
       {location.host === "localhost:3201" && <>
        <header className="App-header">
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="bg-red-300">
                    <Link to="/shipmfe"> Home </Link>
                  </li>
                  <li className="bg-red-300">
                    <Link to="/shipmfe/inner-ship"> Inbound Shipping </Link>
                  </li>
                  <li className="bg-red-300">
                    <Link to="/shipmfe/outer-ship"> Outer Shipping </Link>
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
        </Routes>
      </>}
    </div>
  </div>)
};
export default App;
