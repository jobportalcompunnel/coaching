import React from 'react';
import { useAppContext } from './file1';

const Field2 = () => {
  const { fieldValue } = useAppContext();

  return <input type="text" value={fieldValue} readOnly />;
};

export default Field2;