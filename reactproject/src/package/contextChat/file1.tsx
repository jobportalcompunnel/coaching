import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext<any | null>(null);

const AppProvider = ({ children }: any) => {
  const [fieldValue, setFieldValue] = useState('');

  return (
    <AppContext.Provider value={{ fieldValue, setFieldValue }}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => useContext(AppContext);

export default AppProvider;