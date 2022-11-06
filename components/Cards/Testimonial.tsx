import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar, Card, Grid, Row, Text } from '@nextui-org/react';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function Testimonial({ article }) {
  const sliderRef = useRef(null);

  const previousFn = () => {
    sliderRef?.current?.slickPrev();
  };
  const nextFn = () => {
    sliderRef?.current?.slickNext();
  };

  return (
    <div className="bg-slate-100 p-5 mt-3">
      <h3>Our Testimonial</h3>
      <div className="pl-5 pr-5 ">
        <div className="pt-5 pb-5 pl-7 pr-7 relative">
          <button
            className="z-20"
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
            {new Array(10).fill(0).map((img, i) => {
              return (
                <div className="p-3">
                  <Card isPressable variant="flat">
                    <Card.Body
                      css={{
                        p: 15,
                        backgroundImage:
                          "url('https://nextui.org/images/fruit-1.jpeg')",
                        height: 160,
                      }}
                    >
                      <Text>
                        " Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Ab delectus voluptas incidunt ullam saepe.
                        Quibusdam consequuntur mollitia libero! Deleniti,
                        tempore aspernatur ullam consequuntur reiciendis
                        possimus dolorem delectus nisi numquam rem expedita
                        alias quidem vero omnis, natus nam perspiciatis quas
                        labore culpa ea! Voluptas iste, natus harum rerum
                        explicabo numquam repudiandae? "
                      </Text>
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: 'flex-start' }}>
                      <Row wrap="wrap" align="center">
                        <Avatar
                          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                          size="md"
                        />
                        <Text
                          css={{
                            color: '$accents7',
                            fontWeight: '$bold',
                            fontSize: '$sm',
                            marginLeft: 5,
                          }}
                        >
                          Amit Kumar Soni ( SDE-2 Fox )
                        </Text>
                      </Row>
                    </Card.Footer>
                  </Card>
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
      </div>
    </div>
  );
}
