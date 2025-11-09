import React, { useContext, useRef, useState } from "react";
import "../App.css";
import MyInput from "../package/matinput";
import { filterTodos, createTodos } from "./utils";
import ToDoList from "./ToDoList"
const todos = createTodos();
const ProductUseMemo = () => {
  const ref: any = useRef(null);

  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(true);
  function handleClick() {
    ref.current.focus();
  }
  return (
    <div>
      <p>Forword ref example</p>
      <>
        <button onClick={() => setTab("all")}>All</button>
        <button onClick={() => setTab("active")}>Active</button>
        <button onClick={() => setTab("completed")}>Completed</button>
        <br />
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
          Dark mode
        </label>
        <hr />
        <ToDoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
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

export default ProductUseMemo;
