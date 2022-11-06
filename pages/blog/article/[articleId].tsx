import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { Rating } from 'primereact/rating';
import { Avatar } from '@nextui-org/react';

// import Prism from 'prismjs';
import Highlight from 'react-highlight';
import { Button} from '@nextui-org/react';

import ShareArticle from '../../../components/ShareArticle';
import BlogLayout from '../../../Layout/BlogLayout';

import 'highlight.js/styles/github.css';
import 'quill/dist/quill.snow.css';
import 'prismjs/themes/prism-tomorrow.css';

const ArticleView = ({ articles = []}) => {
  const [val1, setVal1] = useState(null);
  const router = useRouter();
  const { articleId } = router.query;  
  const article = articles[0] as any;

  useEffect(() => {
    // hljs.registerLanguage('javascript', javascript);
    // hljs.initHighlighting();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-extrabold font-sans  text-violet-900 antialiased">
        {article?.title}
      </h1>

      <div>
        <div className="flex justify-between">
          <div className="flex">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              size="sm"
            />
            <div className="ml-2 opacity-70">
              <span>{article.author}</span>
              <span>( {new Date(article.dop).toLocaleString()} )</span>
            </div>
          </div>
          <ShareArticle />
        </div>
      </div>

      <hr className="mt-2 mb-2" />
      <div className="flex flex-wrap items-center mt-3 mb-3">
        {article.tags.map((tag, i) => {
          return (
            <div
              className="pl-2 pr-2 m-1 bg-red-300 text-white rounded-full"
              key={i}
            >
              # {tag}
            </div>
          );
        })}
      </div>
      <p className="p-3 border-l-8">
        <blockquote className="m-0">
          <p className="p-2">{article.description}</p>
        </blockquote>
      </p>
      <div className="line-numbers shadow p-3" style={{ minHeight: '30vh' }}>
        <Highlight language="html">
          <div dangerouslySetInnerHTML={{ __html: articles[0].cntent }} />
        </Highlight>
      </div>

      <div className="p-3 border">
        <h4 className="text-red-500">Did you liked this Article ? </h4>
        <Rating value={val1} onChange={(e) => setVal1(e.value)} />
      </div>

      <div className="p-3 border">
        <h4 className="text-red-500">Add to List </h4>
        <div className="flex justify-start">
          <Button auto color="primary" rounded>
            Add to Read list
          </Button>

          <Button auto color="primary" rounded className="ml-2">
            Add to Done List
          </Button>
        </div>
      </div>

      <div className="p-3 border">
        <h4 className="text-green-800">Share it with your friends </h4>
        <ShareArticle />
      </div>

      {/* <div>
        <h4>Comments goes here</h4>
      </div> */}
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps(data) {
  let res = [];
  try {
    let article = await fetch(
      `https://product-be.herokuapp.com/articles/getArticleById/${data.params.articleId}`
    );
    res = await article.json();
    return { props: { articles: res } };
  } catch (e) {}
  return { props: { articles: res } };
}

ArticleView.getLayout = (page) => <BlogLayout>{page}</BlogLayout>;
export default ArticleView;
