import { useAuth0 } from '@auth0/auth0-react';

function MyComponent() {
  const { isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const unsubscribeFromIsAuthenticated = auth0.on('auth0.isAuthenticated', (isAuthenticated) => {
      // Update central state or global flag here
    });

    const unsubscribeFromLogout = auth0.on('auth0.logout', () => {
      // Perform actions upon logout here
    });

    return () => {
      unsubscribeFromIsAuthenticated();
      unsubscribeFromLogout();
    };
  }, []);

  // ... rest of your component logic

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isAuthenticated && <p>User is logged in</p>}
      {!isAuthenticated && <p>User is logged out</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
}