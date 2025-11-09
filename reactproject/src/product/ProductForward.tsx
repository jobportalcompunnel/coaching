import React, { useContext, useRef, useState } from "react";
import "../App.css";
import MyInput from '../package/matinput';

function ProductForward() {
  const ref: any = useRef(null);
  const [mylabel, setMylabel] = useState();
  const [myPass, setMyPass] = useState();

  const passingMyName = (value: any)=> {
    setMyPass(value)
  }

  function handleClick() {
    // alert(88)
    ref.current.focus();
    console.log(ref.current)
    setMylabel(ref.current.value)
  }

  return (
    <div>
      <p>Forword ref example</p>
      <form>
        {mylabel}
        <MyInput label="Enter your name3" width="40px" ref={ref} />
        <button type="button" onClick={handleClick}>
          Edit
        </button>
        <MyInput label="Enter your password" width="40px" value={myPass} />
      </form>
    </div>
  );
}

export default ProductForward;
