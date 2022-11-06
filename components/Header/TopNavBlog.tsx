import Switch from "../switch";

const TopNavBlog = () => {
    return (
      <section className="bg-white p-5 h-15 sticky top-0 shadow flex justify-between z-10">
        <h1 className="text-3xl font-extrabold font-sans  text-violet-900 antialiased">
          Learning Hub Blog
        </h1>

        <div className="flex align-center flex-end">
          <Switch />
        </div>
      </section>
    );
}

export default TopNavBlog