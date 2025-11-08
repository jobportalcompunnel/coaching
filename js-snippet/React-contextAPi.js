// ********step1**********
// *******define context*********
// import React, { createContext } from "react";
// export const CompContext = createContext<any | null>(null);
// ********step2**********
// *******provide context*********
// import React, { createContext, useState } from "react";
// import CompA from "./compA";
// import CompB from "./compB";
// import {CompContext} from "./defnition";
// const MainContext = () => {
//   const [loggedinusername, setLoggedinusername] = useState<string>("rahnedo");
//   const updateUserName = (value: string = "") =>{
//     setLoggedinusername(value);
//   }
//   return (
//     <CompContext.Provider value={{ UserName: loggedinusername, updateUserName }}>
//       <CompA />
//       <CompB />
//     </CompContext.Provider>
//   );
// };
// export default MainContext;
// ********step3**********
//*******use context*********
// import React, { useContext, useRef, useState } from "react";
// import { CompContext } from "./defnition";
// type Rolename = string;
// const CompA = () => {
//   const { UserName, updateUserName }: any = useContext(CompContext);
//   const fire: any = (v: any) => {
//     updateUserName(v.target.value);
//   };
