import { useUser } from '@auth0/nextjs-auth0/client';

const AuthComponent = () => {
  const { user, error, isLoading } = useUser();

  // Render different content based on user authentication status
  if (user) {
    return (
      <div>
        <p>Welcome, {user.name}!</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  } else {
    return (
      <div>
        <p>You need to log in to use this app.</p>
        <a href="/api/auth/login">Login</a>
      </div>
    );
  }
};

export default AuthComponent;



