
import AdminLayout from '../../Layout/AdminLayout';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';
import { useState } from 'react';

const Dashboard = ({ categories, tags }) => {

  const [basicData] = useState({
    labels: [
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
    ],
    datasets: [
      {
        label: 'New member joined',
        backgroundColor: '#42A5F5',
        data: [1, 4, 9, 10, 12, 10, 20, 1, 4, 9, 10,1],
      },
    ],
  });
  
  let basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
      y: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
    },
  };


  return (
    <div>
      <div className="pt-6 px-4">
        <div className="w-full grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <h3 className="font-extrabold font-sans  text-violet-900 antialiased">
              Dashboard
            </h3>
            <Card>
              <Chart type="bar" data={basicData} options={basicOptions} />
            </Card>
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

Dashboard.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Dashboard;
