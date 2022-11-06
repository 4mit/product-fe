import { url } from 'inspector';
import styles from '../common-style.module.css';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div
      className={`shadow-inner ${styles.banner}`}
      style={{
        minHeight: '45vh',
        position: 'relative',
      }}
    >
      <div className="text-white px-24 py-24">
        <h1 className="text-7xl font-extrabold p-2">
          {/* <Typewriter
            options={{
              strings: ['Explore'],
              autoStart: true,
              loop: false,
              delay:50
            }}
          /> */}Explore
        </h1>
        <h1 className="text-7xl font-extrabold p-2">
          {/* <Typewriter
            options={{
              strings: ['Read'],
              autoStart: true,
              loop: false,
              delay:50
            }}
          /> */}
          Read
        </h1>
        <h1 className="text-7xl font-extrabold p-2">
          <Typewriter
            options={{
              strings: ['Learn and Enjoy'],
              autoStart: true,
              loop: true,
              delay:80
            }}
          />
        </h1>
      </div>
      <img
        className={`${styles['hero-leaner-img']} z-0`}
        src="/assets/imgs/hero-img1.svg"
      />
    </div>
  );
};

export default Banner;
