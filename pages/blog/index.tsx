import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
import BlogCategories from '../../components/BlogCategories';
import MultiItemCarousel from '../../components/Carousel/MultiItemCarousel';
import HoverCard from '../../components/Cards/HoverCard';

import styles from './Blog.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blog = ({ articles }) => {
  console.log('blog loaded ');
  return (
    <div className=" border-2 bg-slate-100">
      <div className="blog-container">
        <div className={styles['blog-header']}>
          <section className={`pl-5 pr-5 pt-3 h-60}`}>
            <h1 className=" text-2xl font-extrabold font-sans  text-violet-900 antialiased">
              Hi there Welcome !
            </h1>
            <ul className="pt-3 mt-5 text-xl">
              <li>
                Learning Hub tries to provide features Free Tutorials ,tips and
                tricks and daily hacks and news{' '}
              </li>
              <li>bussiness , finance , lifestyle </li>
              <li>
                Complete guide on web-application interview preparation ,
                placements , career guidance
              </li>
              <li>Latest tech knowledge and lot more ...</li>
            </ul>

            <button className=" bg-green-600 text-white p-3 mt-5">
              Read more ...
            </button>
          </section>
          <div className="pl-5 pr-5 pb-7 shadow">
            <MultiItemCarousel />
          </div>
        </div>

        <main className="flex flex-row">
          <div className="basis-1/4 p-2 ">
            <BlogCategories />
          </div>

          {/* middle section posts */}
          <div className="flex flex-col  p-2 basis-1/2 mt-4">
            <h1 className=" text-xl font-extrabold font-sans  text-violet-900 antialiased">
              Latest post's
            </h1>

            {articles.map((article) => {
              return <HoverCard article={article} />;
            })}
            <Pagination />
          </div>

          <div className="basis-1/4 p-2 ">
            <div>
              <input
                type="text"
                placeholder="Search post here"
                className="p-1 border-2 w-full"
              />
              <h1 className="text-center text-xl font-extrabold font-sans  text-violet-900 antialiased">
                Trending topics
              </h1>
              <div className="flex flex-wrap">
                {new Array(15).fill(0).map((img, i) => {
                  return (
                    <div className="pl-2 pr-2 p-1 bg-slate-200 m-1 h-10">
                      Hello {i}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h1 className="text-center text-xl font-extrabold font-sans  text-violet-900 antialiased">
                Recommended topics
              </h1>
              <ul>
                {new Array(15).fill(0).map((img, i) => {
                  return <li className="pl-2 pr-2 p-1 m-1 h-10">Hello {i}</li>;
                })}
              </ul>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:4000/articles`);
  const articles = await res.json();
  // Pass data to the page via props
  return { props: { articles } };
}
export default Blog;
