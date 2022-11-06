import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { useState, useEffect, useRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Breadcrumb from '../../components/Bredcrumb/Breadcrumb';
import GeneralLayout from '../../Layout/GeneralLayout';
import { Slider } from 'primereact/slider';
import { Toast } from 'primereact/toast';

const copyColor = (e) => {
  // if user clicks on the parent itself
  // instead of boxes
  // e.target cant contains itself
  if (e.currentTarget != e.target) {
    console.log(e, e.target.closest(".clr-box"));
    let parent = e.target.closest(".clr-box");
    let color = parent.getAttribute("data-color");

    if (navigator.clipboard) {
      navigator.clipboard.writeText(color);
    }
    if (parent.classList.contains("flash")) {
      parent.classList.remove("flash");
    } else {
      parent.classList.add("flash");
    }
  }
}

const generateRandomColors = (r: number, g: number, b: number, n: number) => {
  let color = [];
  for (let i = 0; i < n; i++) {
    color.push(
      `rgb(${r + 20}, ${g + Math.floor(Math.random() * 100)}, ${
        b + Math.floor(Math.random() * 100)
      })`
    );
  }
  return color;
};

const ColorPicker = ({ images = [] }) => {
  const toast = useRef(null);  
  const [r,setR] = useState(10);
  const [g,setG] = useState(20);
  const [b,setB] = useState(30);
  const [colors, setColors] = useState<string[]>([]);

  const copy = (e) => {
    copyColor(e);
    let parent = e.target.closest(".clr-box");
    let color = parent.getAttribute("data-color");
    toast?.current?.show({
      severity: 'success',
      summary: 'Copied ',
      detail: color,
      life: 3000,
    });
  }

  useEffect(()=>{
        setColors(generateRandomColors(r,g,b, 56));
  },[r,g,b])
  
  return (
    <main className=" border-2 bg-slate-100">
      <Toast ref={toast} />
      <div className="blog-container">
        <div>
          <div className="p-2 mt-4">
            <div className="shadow p-2 bg-white">
              <Breadcrumb />
              <br />
              <h1 className=" text-xl font-extrabold font-sans  text-violet-900 antialiased">
                Color Picker
              </h1>
              <p>
                RGB (red, green, and blue) refers to a system for representing
                the colors to be used on a computer display. Red, green, and
                blue can be combined in various proportions to obtain any color
                in the visible spectrum. Levels of R, G, and B can each range
                from 0 to 100 percent of full intensity.
              </p>
            </div>
            <div className="shadow grid grid-cols-3 p-2 bg-white">
              <div className="m-5">
                <p className="text-red-500 font-bold">Change R factor</p>
                <Slider value={r} onChange={(e) => setR(Number(e.value))} />
              </div>
              <div className="m-5">
                <p className="text-green-500 font-bold">Change G factor</p>
                <Slider value={g} onChange={(e) => setG(Number(e.value))} />
              </div>
              <div className="m-5">
                <p className="text-blue-500 font-bold">Change B factor</p>
                <Slider value={b} onChange={(e) => setB(Number(e.value))} />
              </div>
            </div>

            <div
              className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-7 gap-2"
              onClick={copy}
            >
              {colors.map((color: any) => {
                return (
                  <Card
                    data-color={color}
                    className="m-3 shadow p-2 clr-box"
                    style={{ backgroundColor: color, height: 170 }}
                  >
                    <p className="m-0 text-white font-bold" style={{ lineHeight: '1.5' }}>
                      {color}
                    </p>
                    <p className="mt-5 text-white">Click & Copy</p>
                  </Card>
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
ColorPicker.getLayout = (page) => <GeneralLayout>{page}</GeneralLayout>;
export default ColorPicker;
