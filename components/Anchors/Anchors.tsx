import Link from 'next/dist/client/link';
import styles from './Anchors.module.css';

const Anchors = ({ type, text, href }: any) => {  
  return (
    <Link href={href || '/'}>
      <div
        data-replace={text}
        className={`${
          styles[type + '-anchor']
        } cursor-pointer font-bold m-2`}
      >
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default Anchors;
