import React, { useContext, useRef, useState } from "react";
import "../App.css";
import ThemeContext from "../ThemeContext";
import { useParams } from "react-router-dom";
import MyInput from "../package/matinput";

const UserLogin = () => {
  const theme: any = useContext(ThemeContext);
  const { id } = useParams();
  const ref: any = useRef(null);
  const ref2: any = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  const handleSubmit = (formData: any) => {
    formData.preventDefault();
    const formData3 = new FormData(formData.target);
    console.log(formData3.get("username"))
    return true;
  };
  const handleSubmit2 = (formData: any) => {
    formData.preventDefault();
    console.log(ref.current.value)
    console.log(ref2.current.value)
    formData.target.reset();
    return true;
  };
  return (
    <div>
      <p>This is Login Page {id}</p>
      <form  onSubmit={handleSubmit2}>
        <MyInput
          id="username"
          name="username"
          label="Username"
          width="40px"
          ref={ref}
        />
        <br />
        <MyInput
          id="password"
          name="password"
          label="Password"
          width="40px"
          ref={ref2}
        />
        <br />
        <button
          style={{
            background: theme?.light?.background,
            color: theme.light.foreground,
          }}
          onClick={handleClick}
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
