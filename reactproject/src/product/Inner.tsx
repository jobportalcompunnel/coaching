import React, { useContext } from "react";
import "../App.css";
import ThemeContext from "../ThemeContext";
import { useParams } from "react-router-dom";
//import *  as PradeepUI from "storybook236/dist/index";

function Inner() {
  //console.log(PradeepUI)
  const theme: any = useContext(ThemeContext);
  const { id } = useParams();
  return (
    <div>
      <p>This is inner pages {id}</p>
      <button
        style={{
          background: theme?.light?.background,
          color: theme.light.foreground,
        }}
      >
        I am styled by theme context!
      </button>
    </div>
  );
}

export default Inner;
