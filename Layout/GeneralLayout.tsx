import Footer from '../components/Footer';
import Head from 'next/head';
import Header from '../components/Header/Header';
import { Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';

const GeneralLayout = ({ children }) => {  
  return (
    <>
      <Head>
        <title>Article - Learninghub.com</title>
        <meta name="description" content="Learninghub.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <main className="blog-container">
        <Header />
        <Grid.Container>
          <Grid xs={12} direction="column">
            <div>{children}</div>
          </Grid>
        </Grid.Container>
      </main>
      <Footer />
    </>
  );
};

export default GeneralLayout;
