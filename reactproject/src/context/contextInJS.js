//import "./styles.css";
import { createContext, useContext, useState } from "react";
export const Context = createContext();
export const ContextComponent = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const value = { count, increment };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const CabCount = () => {
  const { count, increment } = useContext(Context);
  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  );
};
export default function App() {
  return (
    <ContextComponent>
      <CabCount />
    </ContextComponent>
  );
}
