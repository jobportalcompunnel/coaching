import React, { Suspense, lazy, useContext, useRef, useState } from "react";
import "../App.css";
import MyInput from "../package/matinput";

const delayForDemo = (promise: any) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
};
const InnerComponent2 = lazy(() => import("./Inner"));
const InnerComponent = lazy(() => delayForDemo(import("./Inner")));

function ProductLazy() {
  const ref: any = useRef(null);
  const [mylabel, setMylabel] = useState();
  const [myPass, setMyPass] = useState();

  const passingMyName = (value: any) => {
    setMyPass(value.target.value);
    alert(7777)
  };

  function handleClick() {
    ref.current.focus();
    setMylabel(ref.current.value);
  }

  function handleClick2(e: any) {
    // console.log(e.target.value)
    setMylabel(e.target.value);
  }

  return (
    <div>
      <p>Lazy example {mylabel}</p>
      <form>
        <MyInput
          label="Enter your name22"
          width="40px"
          ref={ref}
          onChange={handleClick2}
          customFunction={passingMyName}
        />

        <button type="button" onClick={handleClick}>
          Edit
        </button>
        <MyInput label="Enter your password" style={{color: "white", backgroundColor:"blue"}} width="40px" value={myPass} />
      </form>
      <Suspense fallback={<div>Loading.....</div>}>
        <h2>Preview</h2>
        <InnerComponent />
      </Suspense>
    </div>
  );
}

export default ProductLazy;
