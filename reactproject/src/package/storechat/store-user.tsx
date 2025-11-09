import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userAction } from './appSlice';

const StoreUser = () => {
  const dispatch = useDispatch();

  const handleUpdateValue = () => {
    dispatch(userAction('4444'));
  };
  // Use exampleData from the Redux state and dispatch actions
  const userdata = useSelector((state: any) => state.app.userstate);
  return (
    <div>
     Welcome: {userdata}
     <button onClick={handleUpdateValue}>Update Value</button>
    </div>
  );
};

export default StoreUser;


