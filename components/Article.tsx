
const Article = ({ article }) => {
  return (
    <div className="flex border-2 rounded-md mb-4">
      <div className="basis-1/3 bg-emerald-900">
        <img
          style={{
            height: 'auto',
            width: '300px',
          }}
          loading="lazy"
          src="https://picsum.photos/id/0/1000/1200"
          alt="Squirrel zombie"
        />
         
      </div>
      <div className="basis-3/4 p-2">
        <h1 className="text-xl text-violet-900 text-bold">{article.title}</h1>
        <div className="mt-2">
          <span className="pr-2 p-1 rounded bg-sky-600 text-white mr-2 ">
            {article.article_category}
          </span>
          <span className="mr-2">
            {new Date(article.dop).toDateString()} , By :{' '}
            <b>{article.author}</b>
          </span>
        </div>

        <div className="mt-2">
          <p className="text-ellipsis text-slate-500 overflow-hidden">
            {article.description.slice(0, 170) + '...'}
          </p>
        </div>

        <div className="flex flex-wrap mt-2">
          {article.tags.map((a, i) => {
            return (
              <span className="pl-2 pr-2 p-1 rounded bg-slate-200 mr-1">
                {a}
              </span>
            );
          })}
        </div>

        <div className="flex mt-2">
          <a className="border-2 rounded-md bg-green-600 text-white p-2" href={`/blog/article/${article._id}`}>
            Read more ...
          </a>
        </div>
      </div>
    </div>
  );
};
export default Article;
