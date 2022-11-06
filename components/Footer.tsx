import Subscribe from './Subscribe';
import Image from 'next/image';

const footerLinks = [
  {
    title: 'About',
    link: '',
  },
  {
    title: 'Applications',
    link: '',
  },
  {
    title: 'Tips and Tricks',
    link: '',
  },
  {
    title: 'News',
    link: '',
  },
  {
    title: 'Articles',
    link: '',
  },
];
const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 bg-sky-900">
      <div className="md:flex md:justify-between">
        <div className="flex flex-col items-center justify-center">
          <img src="/assets/imgs/hero-img1.svg" height={300} width={300} />
          <h5 className="text-center text-white">Website Image and Name</h5>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="m-0">
              {footerLinks.map((link, ind) => {
                return (
                  <li className="mb-2" key={ind}>
                    <a
                      href="#"
                      className="text-gray-200 dark:text-gray-400 hover:underline"
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 m-0">
              <li className="mb-4">
                <a
                  href="#"
                  className="text-gray-200 dark:text-gray-400 hover:underline "
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 dark:text-gray-400 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 dark:text-gray-400 hover:underline"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 dark:text-gray-400 hover:underline"
                >
                  WatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 dark:text-gray-400 hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 m-0">
              <li className="mb-4">
                <a
                  href="#"
                  className="text-gray-200 dark:text-gray-400 hover:underline"
                >
                  Sab Kuch free hai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <Subscribe />
        </div>
      </div>

      <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-100 lg:my-8" />
      <div className="flex items-center justify-center">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          <span>© 2022</span>
          <a href="#" className="hover:underline">
             Learning hub blog
          </a>
          <span>. All Rights Reserved.</span>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
