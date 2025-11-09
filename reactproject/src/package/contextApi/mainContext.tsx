import React, { createContext, useState } from "react";
import CompA from "./compA";
import CompB from "./compB";
import {CompContext} from "./defnition";

const MainContext = () => {
  const [loggedinusername, setLoggedinusername] = useState<string>("rahnedo");

  const updateUserName = (value: string = "") =>{
    setLoggedinusername(value);
  }

  return (
    <CompContext.Provider value={{ UserName: loggedinusername, updateUserName }}>
      <CompA />
      <CompB />
    </CompContext.Provider>
  );
};

export default MainContext;
