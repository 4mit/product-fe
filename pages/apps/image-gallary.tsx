import { Image } from 'primereact/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Breadcrumb from '../../components/Bredcrumb/Breadcrumb';
import GeneralLayout from '../../Layout/GeneralLayout';

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridTemplateRows: 'masonry',
  columnCount: 5,
  columnFil: 'balance',
  gridGap: '10px',
  margin: '20px auto 0',
  padding: '2rem',
};

const ImageGallary = ({ images = [] }) => {
  return (
    <main className=" border-2 bg-slate-100">
      <div className="blog-container">
        <div className="flex flex-row">
          <div className="flex flex-col  p-2 mt-4">
            <div className="shadow p-2 bg-white">
              <Breadcrumb />
              <br/>
              <h1 className=" text-xl font-extrabold font-sans  text-violet-900 antialiased">
                Image Gallary
              </h1>
            </div>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {images.map((image: any) => {
                  return (
                    <div key={image.id} className="m-3 shadow p-3 bg-white rounded">
                      <p className="m-0" style={{ lineHeight: '1.5' }}>
                        {image.author}
                      </p>
                      <Image
                        src={image.download_url}
                        alt="Image"
                        preview
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>

            <div style={gridStyle}>
              {images.map((image: any) => {
                return (
                  <Image
                    src={image.download_url}
                    alt="Image"
                    preview
                    width="100%"
                    height="auto"
                    style={{}}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  let res = await fetch(`https://picsum.photos/v2/list?page=1&limit=200`);
  let images = await res.json();

  return {
    props: {
      images,
    },
  };
}
ImageGallary.getLayout = (page : ChildNode) => <GeneralLayout>{page}</GeneralLayout>;
export default ImageGallary;
