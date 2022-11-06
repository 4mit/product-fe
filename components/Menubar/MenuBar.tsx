import Link from 'next/link';
import styles from '../common-style.module.css';
import ScrollIndicator from '../ScrollIndicator';

const MenuBar = () => {
  return (
    <>
      <div className="shadow-md p-2 bg-white sticky top-0 z-10">
        <nav className="grow flex items-center justify-between list-none   font-mono">
          <div>HELLO</div>
          <li className="cool-link cursor-pointer">Home</li>
          <li className="cool-link cursor-pointer ml-5">Articles</li>
          <li className="cool-link cursor-pointer">Videos</li>
          <li className="cool-link cursor-pointer">Article</li>
          <li className="cool-link cursor-pointer">Study material</li>
          <li className="cool-link cursor-pointer">About</li>
          <li className="cool-link cursor-pointer">Locate us</li>
          <Link href="/blog">
            <span className="border-2 rounded-md bg-emerald-900 text-white p-2">
              Contact
            </span>
          </Link>
        </nav>
        <ScrollIndicator />
      </div>
    </>
  );
};

export default MenuBar;
