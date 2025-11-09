import React, { useContext } from "react";
import "../App.css";
import ThemeContext from "../ThemeContext";
import { useParams } from "react-router-dom";
import {Button} from "storybook236/dist/index";

function Product() {
  const theme: any = useContext(ThemeContext);
  const { id } = useParams();
  return (
    <div>
      <Button label="raghav"></Button>
      <p>New File w{id}</p>
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

export default Product;
