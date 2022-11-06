// entry point for the next app
import React from 'react';
import { useRouter } from 'next/router';
import { ProgressSpinner } from 'primereact/progressspinner';
import initAuth from '../utils/initAuth';
import { NextUIProvider } from '@nextui-org/react';

import '../styles/globals.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';

initAuth();

function MyApp({ Component, pageProps }) {  
  console.log('home loaded ');
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState(false);
  
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  const getLayout = Component.getLayout || ((page) => page);

  if (pageLoading) {
    // return <ProgressSpinner strokeWidth={3} className="fixed-center" />;
    return <ProgressSpinner 
      className="fixed-center"
      style={{width: '50px', height: '50px'}} 
      strokeWidth="8" 
      fill="var(--surface-ground)" 
      animationDuration=".5s"/>
    // return <h1>Loading Please wait ...</h1>;
  }
  return getLayout(
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
