import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface GridFields {
    field: string , 
    header: string
}

export const GridComponent = ({data = []}) => {

    // const colums :GridFields[] = Object.keys(data[0]).reduce((acc,cv) => {
    //     return [...acc, {field: cv.toLowerCase(), header: cv}]
    // },[] as GridFields[]);

    const colums: GridFields[] = [
      {
        field: 'title',
        header: 'title',
      },
      {
        field: 'views',
        header: 'views',
      },
      {
        field: 'dop',
        header: 'Published on',
      },
      {
        field: 'tags',
        header: 'Tags',
      }
    ];

    const dynamicColumns = colums.map((col, i) => {
      return (
        <Column
          key={col.field}
          field={col.field}
          header={col.header}
          style={{ width: '25%' }}
        />
      );
    });

    return (
      <div className="w-full">
        <DataTable
          value={data}
          scrollable
          stripedRows
          scrollHeight="80vh"
          loading={false}
          scrollDirection="both"
          className="mt-3"
        >
          { dynamicColumns }          
          {/* <Column
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
              <Tag className="mr-2" value={data.article_category} rounded></Tag>
            )}
          />
          <Column
            field="views"
            header="Views"
            style={{ width: '16%' }}
            body={(data) => <Badge value={data.views} severity="success" />}
          />
          <Column field="tags" header="Tags" style={{ width: '16%' }}></Column>
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
          ></Column> */}
        </DataTable>
      </div>
    );
};
