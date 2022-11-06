import HoverCard from '../../components/Cards/HoverCard';
import AppsLayout from '../../Layout/AppsLayout';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Link from 'next/link';

const apps = [
  {
    title: 'Image gallary',
    link: '/image-gallary',
  },
  {
    title: 'Color Picker',
    link: '/color-picker',
  },
  {
    title: 'Stock Average Calculator',
    link: '/stock-average-calculator',
  },
  {
    title: 'Time zoner',
    link: '/time-zoner',
  },
];

const Apps = ({ articles = [] }) => {
    const header = (
      <></>
    );
    
  return (
    <main className=" border-2 bg-slate-100">
      <div className="blog-container">
        <div className="flex flex-row">
          <div className="flex flex-col  p-2 mt-4">
            <h1 className=" text-xl font-extrabold font-sans  text-violet-900 antialiased">
              Top Applications
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2">
              {apps.map((app: any) => {
                return (
                  <Card
                    title={app.title}
                    footer={
                      <div className="flex justify-between">
                        <Link href={'/apps' + app.link}>
                          <a>Open - {app.title}</a>
                        </Link>
                      </div>
                    }
                    header={header}
                  >
                    <p className="m-0" style={{ lineHeight: '1.5' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </Card>
                );
              })}
            </div>

            <div className='mt-2'>
              <Button>Request for an App</Button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://product-be.herokuapp.com/articles`);
  const articles = await res.json();
  // Pass data to the page via props
  return { props: { articles } };
}

Apps.getLayout = (page) => <AppsLayout>{page}</AppsLayout>;
export default Apps;
