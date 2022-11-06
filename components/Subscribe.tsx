const Subscribe = () => {
    return (
      <div className="h-48 bg-slate-300 rounded flex flex-col p-5 justify-between shadow">
        <label
          htmlFor="subscribe"
          className="text-xl font-bold font-sans  text-violet-900 antialiase"
        >
          Subscribe
        </label>
        <input
          type="text"
          id="subscribe"
          placeholder="Enter your email"
          className="p-3 rounded"
        />
        <button className="border-2 rounded-md bg-emerald-900 text-white p-2">
          Subscribe newsletter
        </button>
      </div>
    );
}
export default Subscribe;