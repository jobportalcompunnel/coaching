import React from 'react';
import { useSelector } from 'react-redux';

const SecondComponent = () => {
  const value = useSelector((state: any) => state.app.value);
  const fundaVal = useSelector((state: any) => state.app.funda);
  return (
    <div>
      <p>Value from Redux store: {value}</p>
      <p>Value from Morgan: {fundaVal}</p>
    </div>
  );
};

export default SecondComponent;
