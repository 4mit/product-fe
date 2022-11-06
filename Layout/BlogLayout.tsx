import Footer from '../components/Footer';
import Head from 'next/head';
import MultiItemCarousel from '../components/Carousel/MultiItemCarousel';
import Header from '../components/Header/Header';
import styles from './Layout.module.css';

import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import { ComponentType } from 'react';

const BlogLayout: ComponentType<any> = ({ children }) => {
  
  // const AuthUser = useAuthUser();
  // console.info('>>>>', AuthUser);

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
      </Head>
      <main className="blog-container">
        <Header />
        <div className="bg-zinc-500 border-2 banner-article-standalone"></div>
        <div className="flex">
          <div className={styles['article-container']}>
            <div className="p-5">
              <section>{children}</section>
              <br />
              <h3 className="font-extrabold font-sans  text-violet-900 antialiased">
                Read Related Topics
              </h3>
              <MultiItemCarousel />
            </div>
          </div>

          <div className={styles['category-tag']}>
            <div className="sticky top-20 pt-5">
              <h3>Choose tags vv</h3>
              <div className="flex flex-wrap ">
                {new Array(15).fill(0).map((img, i) => {
                  return (
                    <div
                      className="pl-2 pr-2 m-1 bg-red-300 text-white rounded-full"
                      key={i}
                    >
                      # Hello
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default withAuthUser()(BlogLayout);
