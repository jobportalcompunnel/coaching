import React from 'react';
import { Link } from 'react-router-dom';

export function Ship() {
  return (
    <React.Fragment>
      <div>Ship</div>
      <Link to="/page-1">Go to Page 1</Link>
    </React.Fragment>
  );
}