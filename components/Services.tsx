import { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/courses')
      .then((data) => data.json())
      .then((data) => {
        console.log('data>>>', data);
      })
      .catch((e) => {
        console.log('errr', e);
      });
  }, []);
  return (
    <div className=" border-2 bg-slate-100">
      <div className="p-5">
        <h1 className="text-center text-6xl font-extrabold font-sans  text-violet-900 antialiased	">
          Our Services
        </h1>
        <div className="flex flex-row flex-wrap p-5 ">
          {new Array(5).fill(0).map((b) => {
            return (
              <div
                className=" h-80  shadow-md  border-2 rounded-md bg-emerald-900"
                style={{ width: '33%' }}
              >
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                  src="https://picsum.photos/id/0/1000/1200"
                  alt="Squirrel zombie"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
