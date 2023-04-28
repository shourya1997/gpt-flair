import { Auth0Provider } from '@auth0/auth0-react';

export const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
  const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;
  
  const onRedirectCallback = (appState) => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={typeof window !== 'undefined' && window.location.origin}
      audience={audience}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
