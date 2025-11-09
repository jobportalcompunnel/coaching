import React from 'react';
import { useDispatch } from 'react-redux';
import { updateValue , morganValue} from './appSlice';

const FirstComponent = () => {
  const dispatch = useDispatch();

  const handleUpdateValue = () => {
    dispatch(updateValue('kk value'));
  };

  const handleMorgan = () => {
    dispatch(morganValue(Math.random()));
  };

  return (
    <div>
      <button onClick={handleUpdateValue}>Update Value</button>
      <button onClick={handleMorgan}>Update Morgan</button>
    </div>
  );
};

export default FirstComponent;
