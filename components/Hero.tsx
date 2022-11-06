import Button from '@mui/material/Button';
import style from './Hero.module.css';

import HeaderTransparent from './Header/HeaderTransparent';

export const Hero = () => {
  return (
    <>
      {/* <HeaderTransparent /> */}
      {/* <img src="/hero.jpg" width={'100%'} /> */}

      {/* <div
        style={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(360deg, #ffffff, #ffefefc4)',
          position: 'absolute',
          top: 0,
        }}
      >
        <Button
          variant="contained"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Get started with US
        </Button>
      </div> */}
      {/* <Button
        variant="contained"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Get started with US
      </Button> */}
      <div className={style.hero_image}>
        <div className={style.hero_text}>
          <h1>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>
    </>
  );
};
