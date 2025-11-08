// // ProtectedRoute.js
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react'; // Or use your central state management

// function ProtectedRoute({ children, ...rest }) {
//   const { isAuthenticated } = useAuth0(); // Or access logout status from your state management

//   return (
//     <Route {...rest}>
//       {isAuthenticated ? children : <Redirect to="/login" />}
//     </Route>
//   );
// }