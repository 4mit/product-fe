import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: '#052b52' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'green' }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const MultiItemCarousel = () => {
  const sliderRef = useRef();
  const previousFn = () => {
    sliderRef?.current?.slickPrev();
  }
  const nextFn = () => {
    sliderRef?.current?.slickNext();
  };
  return (
    <div className="pt-5 pb-5 pl-7 pr-7 relative">
      <button
        className='z-20'
        onClick={previousFn}
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translate(0%, -50%)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </button>
      <Slider {...settings} ref={sliderRef}>
        {new Array(50).fill(0).map((img, i) => {
          return (
            <div className="p-2 shadow" key={i}>
              <Image
                src={`https://picsum.photos/id/${i}/1000/1200`}
                alt="Picture of the author"
                width={600}
                height={700}
              />
            </div>
          );
        })}
      </Slider>
      <button
        className="z-20 p-2"
        onClick={nextFn}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translate(0%, -50%)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    </div>
  );
};

export default MultiItemCarousel;
