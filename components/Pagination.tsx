const Pagination = () => {
  return (
    <div className="mt-5 mb-5">
      <nav aria-label="Page navigation example">
        <ul className="flex justify-end -space-x-px">
          <li>
            <a
              href="#"
              className="py-2 px-3 ml-0  text-gray-500 bg-white  border "
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 ml-0  text-gray-500 bg-white  border"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 ml-0  text-gray-500 bg-white  border"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="py-2 px-3 ml-0  text-gray-500 bg-white  border"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 ml-0  text-gray-500 bg-white  border"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 ml-0  text-gray-500 bg-white  border"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 ml-0  text-gray-500 bg-white  border"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
