import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import Header from '../components/Header/Header';
import Banner from '../components/banner/Banner';
import ContentScroller from '../components/ContentScroller/ContentScroller';
import SectionBlock from '../components/SectionBlock';
import RecentArticle from '../components/RecentArticle/RecentArticle';
import Footer from '../components/Footer';
import LearningCard from '../components/cards/LearningCard';
import TestSeries from '../components/cards/TestSeries';
import OnlineApps from '../components/cards/OnlineApps';
import Testimonial from '../components/cards/Testimonial'
import Quizz from '../components/cards/Quizz'
import Faq from '../components/Faq/Faq';

function Home() {
  console.log('home loaded ')
  return (
    <div className={styles.container}>
      <Head>
        <title>Amit Kumar</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta
          name="description"
          content="Amit kumar portfolio 2022, technical blog, "
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto+Mono&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="main2">
        <Header />
        <Banner />
        <ContentScroller items={[{ title: 'hello' }]} />
        <SectionBlock>
          <RecentArticle />
        </SectionBlock>
        <SectionBlock>
          <LearningCard />
        </SectionBlock>
        <SectionBlock>
          <TestSeries />
        </SectionBlock>
        <SectionBlock>
          <OnlineApps />
        </SectionBlock>
        <SectionBlock>
          <Quizz />
        </SectionBlock>
        <SectionBlock>
          <Testimonial />
        </SectionBlock>
        <SectionBlock>
          <Faq />
        </SectionBlock>
        <Footer />
      </div>
    </div>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()();
export default withAuthUser()(Home);
