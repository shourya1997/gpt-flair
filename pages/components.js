import { useAuth0 } from '@auth0/auth0-react';

const AuthComponent = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  // Render different content based on user authentication status
  if (isAuthenticated) {
    return (
      <div>
        <p>Welcome, {user.name}!</p>
        <button onClick={() => logout()}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You need to log in to use this app.</p>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    );
  }
};

export default AuthComponent;
