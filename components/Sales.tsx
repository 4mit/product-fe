const Sales = ({ data }) => {
  return (
    <div className="h-1/4 border-2 bg-slate-100">
      <div className="p-5">
        <h1 className="text-center text-6xl font-extrabold font-sans  text-violet-900 antialiased	">
          Sales
        </h1>
        <div className="flex flex-row flex-wrap p-5 ">
          <pre>{data}</pre>
        </div>
      </div>
    </div>
  );
};

export default Sales;
