import Footer from '../components/Footer';
import Head from 'next/head';
import Header from '../components/Header/Header';
import { useRouter } from 'next/router';
import { Grid, Card, Text } from '@nextui-org/react';
import { Collapse} from '@nextui-org/react';
import BlogCategories from '../components/BlogCategories';

const list = [
  {
    title: 'Array',
    img: '/images/fruit-1.jpeg',
    price: 'Free',
  },
  {
    title: 'Stack',
    img: '/images/fruit-1.jpeg',
    price: '$5.50',
  },
  {
    title: 'Queue',
    img: '/images/fruit-2.jpeg',
    price: '$3.00',
  },
  {
    title: 'Tree',
    img: '/images/fruit-3.jpeg',
    price: '$10.00',
  },
  {
    title: 'Recursion',
    img: '/images/fruit-4.jpeg',
    price: '$5.30',
  },
  {
    title: 'Dynamic Programming',
    img: '/images/fruit-5.jpeg',
    price: '$15.70',
  },
  {
    title: 'Hash Map',
    img: '/images/fruit-6.jpeg',
    price: '$8.00',
  },
  {
    title: '2 Pointer',
    img: '/images/fruit-7.jpeg',
    price: '$7.50',
  },
  {
    title: 'Graph',
    img: '/images/fruit-8.jpeg',
    price: '$12.20',
  },
];

const CourseLayout = ({ children }) => {
  const router = useRouter();
  const { course } = router.query;

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
        <Grid.Container>
          <Grid xs={12}>
            <div className="bg-zinc-500 border-2 banner-article-standalone-course w-full">
              <h1>{course}</h1>
            </div>
          </Grid>

          <Grid xs={12} direction="column">
            <Card variant="bordered" css={{ borderRadius: 0 }}>
              <Card.Body>
                <Text
                  h3
                  css={{
                    textGradient: '45deg, $blue600 -20%, $pink600 50%',
                  }}
                >
                  About this course
                </Text>
                <Text>
                  Course Outcomes are the statements that help the learners to
                  understand the reason for pursuing the course and helps him to
                  identify what he will be able to do at the end of the course
                </Text>
              </Card.Body>
            </Card>
            <div>
              <Grid.Container gap={1}>
                <Grid xs={3} direction="column">
                  <Card css={{ padding: 15 }}>
                    <h4>Course Content</h4>
                    <Collapse.Group>
                      {list.map((item, i) => {
                        return (
                          <Collapse
                            title={item.title}
                            subtitle="More description about Option"
                          >
                            <BlogCategories />
                          </Collapse>
                        );
                      })}
                    </Collapse.Group>
                  </Card>
                </Grid>
                <Grid xs={9}>
                  <Card css={{ padding: 15 }}>{children}</Card>
                </Grid>
              </Grid.Container>
            </div>
          </Grid>
        </Grid.Container>
      </main>
      <Footer />
    </>
  );
};

export default CourseLayout;
