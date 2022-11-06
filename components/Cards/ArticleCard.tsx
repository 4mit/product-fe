import Anchors from '../Anchors/Anchors';
import styles from './ArticleCard.module.css';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function ArticleCard({ article }) {
  return (
    <div className="min-h-3 min-w-3">
      <div
        className={`p-5 shadow-md group container bg-white  max-w-sm flex justify-center items-center`}
      >
        <div className="rounded-sm">
          <div className="w-full image-cover rounded-t-md">
            <div className="p-2 m-2 w-16 h-16 text-center bg-blue-400 rounded-full text-white float-right fd-cl">
              <span className="font-bold border-b border-white font-sans">
                {new Date(article.dop).getDate()}
              </span>
              <span className="text-xs tracking-wide font-bold uppercase block font-sans">
                {months[new Date(article.dop).getMonth()]}
              </span>
            </div>
          </div>
          <div className=" bg-white  rounded-b-md fd-cl">
            <span className="text-base block text-lg text-gray-800 font-bold">
              {article.title.slice(0, 40) + '...'}
            </span>
            <span className="block text-gray-500 text-sm">
              {article.description.slice(0, 109) + '...'}
            </span>
          </div>

          <button>
            <Anchors
              type="text-swapping"
              text="Read more ..."
              href={`/blog/article/${article._id}`}
            />

            {/* <a className="p-1 underline" href={`/blog/article/${article._id}`}>
              Read more ...
            </a> */}
          </button>
        </div>
      </div>
    </div>
  );
}
