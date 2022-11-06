import TopNavAdmin from '../components/Header/TopNavAdmin';
import Sidenav from '../components/Sidenav/Sidenav';

const AdminLayout = ({ children }) => {
return (
  <main className="flex flex-col w-screen h-screen overflow-hidden">
    <div className="bg-white border-b border-gray-200 w-full z-50">
      <TopNavAdmin />
    </div>
    <div className="flex w-screen">
      <div className=" bg-white h-screen" style={{ width: '20%' }}>
        <Sidenav />
      </div>
      <div style={{ width: '80%' }}>{children}</div>
    </div>
  </main>
);
}


export default AdminLayout;
