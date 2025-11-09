import React from 'react';
import AppProvider from './file1';
import Field1 from './field1';
import Field2 from './field2';

const MainChat = () => {
  return (
    <AppProvider>
      <Field1 />
      <Field2 />
    </AppProvider>
  );
};

export default MainChat;