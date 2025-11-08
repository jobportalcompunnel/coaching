import React, { lazy, Suspense } from "react";

import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { Button , EnhancedTable} from  "storybook3" ; // "@pradeep786npm/storybook3";;

const BillhostApp = lazy(() => import("billhost/App"));
const ShiphostApp = lazy(() => import("shiphost/App"));
import Home from "./home";
import "./index.scss";
import { useSharedStore } from "sharedStoreApp/store";
import { useEffect } from "react";

const btnclas =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2";
const sampleRows = [
  { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, history: [{ date: '2023-01-01', customerId: '11091700', amount: 3 }] },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, history: [{ date: '2023-01-02', customerId: '78777', amount: 1 }] },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, history: [{ date: '2023-01-03', customerId: '12345', amount: 5 }] },
];

const args= {
    rows: sampleRows,
  };
const App = () => {
  const commonValue = useSharedStore((state) => state.commonValue);
  const setCommonValue = useSharedStore((state) => state.setCommonValue);

  useEffect(()=>{
    setCommonValue("myload")
  },[])

  return (
  
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Main Flipkart MFE</div>
    <BrowserRouter>
      <header className="App-header">
        <div>
          <div>
          </div>
          <div>header..........</div>
          <span className={btnclas}>
            <Link to="/billmfe"> Bill </Link>
          </span>
          <span className={btnclas}>
            <Link to="/shipmfe"> Ship </Link>
          </span>
          <span className={btnclas}>
            <Link to="/"> Home </Link>
          </span>
        </div>
      </header>
      <div>
        <div>Main..........</div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/shipmfe/*"
            element={
              <Suspense fallback={"Loading"}>                
                <ShiphostApp user={"rahul"}/> 
              </Suspense>
            }
          />
          <Route
            path="/billmfe/*"
            element={
              <Suspense fallback={"Loading"}>
                <BillhostApp />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <div>Footer..........</div>
      <div> 
        <p>storybook</p>
        <Suspense fallback={<div>Loading...</div>}>
        <>
        
      --{commonValue}<Button primary="true" label={"radhe55"} size={"small"} type="primary" />
          --
          <EnhancedTable {...args}/>
        </>
      </Suspense>
      </div>
    </BrowserRouter>
  </div>
)};

//ReactDOM.render(<App />, document.getElementById("app"));


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);