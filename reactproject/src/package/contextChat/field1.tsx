import React from 'react';
import { useAppContext } from './file1';

const Field1 = () => {
  const { fieldValue, setFieldValue } = useAppContext();

  const handleInputChange = (e: any) => {
    setFieldValue(e.target.value);
  };

  return <input type="text" value={fieldValue} onChange={handleInputChange} />;
};

export default Field1;