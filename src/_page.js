import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {

    router.push('/server');
  }, []); 

  return <Component {...pageProps} />;
}

export default MyApp;
