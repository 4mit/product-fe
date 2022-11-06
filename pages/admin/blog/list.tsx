import { useRouter } from 'next/router';
import AdminLayout from '../../../Layout/AdminLayout';
import { Button as PrimeButton } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Breadcrumb from '../../../components/Bredcrumb/Breadcrumb';

import { Tag } from 'primereact/tag';
import { Badge } from 'primereact/badge';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

const BlogList = ({ articles = [] }) => {

  return (
    <div>
      <div className="w-full bg-slate-100 p-3 flex items-center justify-between">
        <div>
          <Breadcrumb />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
        <div className=" shadow rounded-lg p-2 2xl:col-span-2">
          <h3 className="font-extrabold font-sans  text-violet-900 antialiased">
            List All Articles
          </h3>
          <div className="w-full">
            <DataTable
              value={articles}
              scrollable
              stripedRows
              scrollHeight="80vh"
              loading={false}
              scrollDirection="both"
              className="mt-3"
            >
              <Column
                field="title"
                header="Title"
                style={{ width: '16%' }}
                body={(data) => (
                  <a href={`/blog/article/${data._id}`} target="_blank">
                    {data.title}
                  </a>
                )}
              />
              <Column field="author" header="Author" style={{ width: '16%' }} />
              <Column
                field="article_category"
                header="Category"
                style={{ width: '16%' }}
                body={(data) => (
                  <Tag
                    className="mr-2"
                    value={data.article_category}
                    rounded
                  ></Tag>
                )}
              />
              <Column
                field="views"
                header="Views"
                style={{ width: '16%' }}
                body={(data) => <Badge value={data.views} severity="success" />}
              />
              <Column
                field="tags"
                header="Tags"
                style={{ width: '16%' }}
              ></Column>
              <Column
                field="isHelpful"
                header="Is Helpful"
                style={{ width: '16%' }}
              ></Column>
              <Column
                field="Action"
                header="Modify"
                style={{ width: '200px' }}
                alignFrozen="right"
                frozen={true}
                body={(data) => (
                  <div className="flex justify-between">
                    <PrimeButton
                      className="p-button-sm p-button-outlined"
                      style={{ margin: 4 }}
                    >
                      <a href={`/blog/article/${data._id}`} target="_blank">
                        <i className="pi pi-arrow-up-right"></i>
                      </a>
                    </PrimeButton>
                    <PrimeButton
                      icon="pi pi-pencil"
                      className="p-button-sm p-button-outlined p-button-warning"
                      style={{ margin: 4 }}
                    />
                    <PrimeButton
                      icon="pi pi-trash"
                      className="p-button-sm p-button-outlined p-button-danger"
                      style={{ margin: 4 }}
                    />
                  </div>
                )}
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  let res1 = await fetch(`https://product-be.herokuapp.com/articles`);
  let articles = await res1.json();

  return {
    props: {
      articles,
    },
  };
}

BlogList.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
export default BlogList;
