import React, {
  useContext,
  // useDeferredValue,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import "../App.css";
import useTitleCount from "./useTitleCount";
import ThemeContext from "../ThemeContext";

const ProductReducer = () => {
  const initialState = { count: 0 };
  const [query, setQuery] = useState("ww");
  
  const theme: any = useContext(ThemeContext);
  const [inputtheme, setInputtheme] = useState(theme.themecolor);
  
  
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  useTitleCount(state.count);

  
  const SearchPage = () => {
    setQuery("pp");
    // alert(inputRef?.current?.value)
  };
  // const deferredQuery = useDeferredValue(query);
  // useEffect(() => {
  //   // Perform additional actions based on the deferred query value, if needed
  //   console.log(deferredQuery);
  // }, [deferredQuery]);

  const inputRef: any = useRef(null);

  const handleClick = () => {
    // setQuery("tt")
    inputRef?.current?.focus();
    setInputtheme('red')
  };

  const handleChange = (event: any) => {
    // alert(event)
  };

  return (
    <>
      <>

        <input ref={inputRef}
        style={{
          background:inputtheme
        }} />
        <button onClick={()=> handleClick()}>Focus the input </button>
      </>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={SearchPage}> console</button>
    </>
  );
};

export default ProductReducer;
