import React, { memo, useContext, useRef, useState } from "react";
import "../App.css";
import MyInput from "../package/matinput";
import { useTheme } from "../context/theme";

const ProductMemo = () => {
  const ref: any = useRef(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  function handleClick() {
    ref.current.focus();
  }
console.log(666)
  const Greeting = memo(({ name }: any) => {
    const {theme,onChangeTheme}=useTheme();
    console.log("Greeting 1");
    return (
      <h3>
      {theme}
        Hello{name && ", "}
        {name}!
      </h3>
    );
  });
  const Greeting2 = memo(() => {
    console.log("Greeting 1");
    return (
      <h3>
        Hello2
      </h3>
    );
  });

  return (
    <div>
      <p>Forword ref example</p>
      <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
      <Greeting2 />
    </>
      <form>
        <MyInput label="Enter your name" width="40px" ref={ref} />
        <button type="button" onClick={handleClick}>
          Edit
        </button>
      </form>
    </div>
  );
};

export default ProductMemo;
