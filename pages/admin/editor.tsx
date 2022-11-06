import {FunctionComponent} from 'react';
import AdminLayout from '../../Layout/AdminLayout';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import FileUploader from '../../components/FileUpload';
import QuillEditor from '../../components/QillEditor/Qill';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

type Categories = {
  _id: string,
  title: string
}

type Tags = {
  _id: string;
  title: string;
};

interface EditorProp {
  categories: Categories[];
  tags: Tags[];
  getLayout: (arg0: string) => JSX.Element;
}

async function postData(
  url = 'https://product-be.herokuapp.com/articles/add',
  data = {}
) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

const Editor: FunctionComponent<EditorProp> = ({ categories = [], tags = [] }) => {
  const router = useRouter();
  const [editorData, setEditorData] = useState('');
  const [tag, setTag] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [waiting, setWaiting] = useState(false);

  const handleEditorChange = (data: string) => {
    setEditorData(data);
  };

  const dropCategoryChange = (value: string) => {
    console.log('hhhh');
    setCategory(value);
  };

  const dropTagChange = (value: string) => {
    setTag(value);
  };

  console.log(editorData, tag, category);

  const handleSubmit = () => {
    setWaiting(true);
    postData('https://product-be.herokuapp.com/articles/add', {
      title,
      description: desc,
      cntent: editorData,
      dop: new Date(),
      author: 'amit',
      views: '0',
      isHelpful: '',
      user_response: '',
      tags: [tag],
      img_url: [file],
      comments: true,
      article_category: category,
    })
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .finally(() => {
        setWaiting(false);
      });
  };

  let options = categories.map((item) => {
    item['label'] = item.title;
    item['value'] = item.title;
    return item;
  });

  let tagsOptions = tags.map((item) => {
    item['label'] = item.title;
    item['value'] = item.title;
    return item;
  });

  function generateBreadcrumbs() {
    const asPathWithoutQuery = router.asPath.split('?')[0];
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0);
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
      const title = subpath;
      return { href, text: title };
    });
    return [{ href: '/', text: 'Home' }, ...crumblist];
  }

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div>
      <div className="w-full  bg-slate-100 h-16 p-3 flex justify-between">
        <div>
          <section className="flex">
            {breadcrumbs.map((_crumb, _idx) => {
              return (
                <div>
                  <a href={_crumb.href} className="underline">
                    {_crumb.text}
                  </a>
                  <span>&nbsp;{'/'}&nbsp;</span>
                </div>
              );
            })}
          </section>
          <section>
            <b>Admin Dashboard</b>
          </section>
        </div>

        <div>hello</div>
      </div>

      <div className="w-full grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
        <div className=" shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
          <h3 className="font-extrabold font-sans  text-violet-900 antialiased">
            Create new post
          </h3>
          <div className="flex flex-row">
            <div className=" m-2 grow flex flex-col">
              <label>Select Category</label>
              <Dropdown
                value={category}
                options={options}
                onChange={(e) => dropCategoryChange(e.value)}
                placeholder="Select Category"
              />
            </div>
            <div className="m-2 grow flex flex-col">
              <label>Select tag</label>
              <Dropdown
                value={tag}
                options={tagsOptions}
                onChange={(e) => dropTagChange(e.value)}
                placeholder="Select a tag"
              />
            </div>
          </div>
          <div className=" m-2  grow flex flex-col">
            <label>Question title</label>
            <InputTextarea
              rows={1}
              cols={30}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title for the question"
              className="border w-full"
            />
          </div>
          <div className=" m-2  grow flex flex-col">
            <label>Question description</label>
            <InputTextarea
              rows={3}
              cols={30}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter setDesc for the question"
              className="border w-full"
            />
          </div>
          <div className=" m-2  grow flex flex-col">
            <label>Choose Question thumbnail</label>
            <FileUploader onChange={setFile} />
          </div>
          <div className=" m-2">
            <label>Write description here</label>
            <QuillEditor onChange={handleEditorChange} />
          </div>

          <div className="mt-4 mb-4 w-full">
            <Button
              onClick={handleSubmit}
              disabled={waiting}
              className="p-button-sm"
            >
              Save
            </Button>
            <Button className="ml-2 pl-5 p-button-sm" style={{ marginLeft: 5 }}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  let res1 = await fetch(
    `https://product-be.herokuapp.com/articles/getCategoryList`
  );
  let categories = await res1.json();

  let res2 = await fetch(
    `https://product-be.herokuapp.com/articles/getTagList`
  );
  let tags = await res2.json();

  return {
    props: {
      categories: categories,
      tags: tags,
    },
  };
}

Editor.getLayout = (page: any) => <AdminLayout>{page}</AdminLayout>;
export default Editor;
