import { useRouter } from 'next/router';
import 'highlight.js/styles/github.css';
import 'quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import { Rating } from 'primereact/rating';
import Link from 'next/link';
import { Avatar } from '@nextui-org/react';
import CourseLayout from '../../../Layout/CourseLayout';
import { Table, Row, Col, Tooltip, User, Text } from '@nextui-org/react';

const columns = [
  { name: 'TITLE', uid: 'title' },
  { name: 'LINK', uid: 'actions' },
];

const users = [
  {
    id: 1,
    name: 'Tony Reichert  Tony Reichert Tony Reichert',
  },
  {
    id: 1,
    name: 'Tony Reichert  Tony Reichert Tony Reichert',
  },
  {
    id: 1,
    name: 'Tony Reichert  Tony Reichert Tony Reichert',
  },
  {
    id: 1,
    name: 'Tony Reichert  Tony Reichert Tony Reichert',
  },
  {
    id: 1,
    name: 'Tony Reichert  Tony Reichert Tony Reichert',
  },
  {
    id: 1,
    name: 'Tony Reichert  Tony Reichert Tony Reichert',
  },
  {
    id: 1,
    name: 'Tony Reichert  Tony Reichert Tony Reichert',
  },
  {
    id: 1,
    name: 'Tony Reichert  Tony Reichert Tony Reichert',
  },
];

const ArticleView = ({ articles }) => {
  const [val1, setVal1] = useState(null);

  const router = useRouter();
  const { course } = router.query;
  console.log(articles, router.query);

  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.initHighlighting();
  }, []);

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case 'title':
        return (
          <div>{user.name}</div>
        );
      case 'actions':
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: 'capitalize' }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: 'capitalize', color: '$accents7' }}>
                {user.team}
              </Text>
            </Row>
          </Col>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div className='w-full'>
      <div className="pt-5">
        <Table
          aria-label="Example table with custom cells"
          css={{
            height: 'auto',
            minWidth: '100%',
          }}
          selectionMode="none"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.uid}                
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={users}>
            {(item) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
      <hr className="mt-2 mb-2" />
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

ArticleView.getLayout = (page) => <CourseLayout>{page}</CourseLayout>;
export default ArticleView;
