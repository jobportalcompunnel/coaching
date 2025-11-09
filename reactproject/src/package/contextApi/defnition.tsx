import React, { createContext } from "react";
export type Rolename = string;
export const CompContext = createContext<{
  UserName: Rolename;
  updateUserName?: () => void;
} | null>(null);

