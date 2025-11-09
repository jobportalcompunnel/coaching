import React from 'react';
import { connect } from 'react-redux';
import FirstComponent from "./component1";
import SecondComponent from './component2';

const ExampleComponent = ({ exampleData, dispatch }: any) => {
  // Use exampleData from the Redux state and dispatch actions
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
    </div>
  );
};

export default ExampleComponent;


