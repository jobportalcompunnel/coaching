import React, { useContext, useRef, useState } from "react";
import { CompContext } from "./defnition";

type Rolename = string;
const CompA = () => {
  const { UserName, updateUserName }: any = useContext(CompContext);
  const fire: any = (v: any) => {
    updateUserName(v.target.value);
  };

  return (
    <div>
      Fname A{UserName}
      <input
        key="faltoo"
        name="FnameA"
        type="text"
        value={UserName} onChange={fire}
      />
    </div>
  );
};

export default CompA;
