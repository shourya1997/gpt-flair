import Head from 'next/head';
import './styles.css';
import { Auth0Provider } from '@auth0/auth0-react';


const App = ({ Component, pageProps }) => {
  return (
    <>
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}
    >
    <Head>
      <title>ToneGenie</title>
      <meta property="og:title" content="GPT-3 Writer" />
      <meta property="og:description" content="build with buildspace" />
      <meta
        property="og:image"
        content="https://cdn.buildspace.so/courses/gpt3-writer/project-og.jpg"
      />
    </Head>
      <Component {...pageProps} />
      </Auth0Provider>
    </>
  );
};

export default App;
