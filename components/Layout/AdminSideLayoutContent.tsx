const AdminSideLayoutContent = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Latest Transactions
          </h3>
          <span className="text-base font-normal text-gray-500">
            This is a list of latest transactions
          </span>
        </div>
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
          >
            View all
          </a>
        </div>
      </div>
    </div>
  );
};
export default AdminSideLayoutContent;
