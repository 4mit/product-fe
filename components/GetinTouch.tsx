const GetIntouch = () => {
  return (
    <div className="theme-gredient p-5">
      <div className="grid grid-cols-6 gap-4 ">
        <div className="col-start-2 col-span-4">
          <h3 className="text-lg font-medium leading-6  text-center text-white">
            Contact us
          </h3>
          <p className="mt-1 text-sm text-white text-center">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div>
      <div className="mt-12 sm:mt-0 ">
        <div className="mt-5 ">
          <form action="#" method="POST">
            <div className=" overflow-hidden sm:rounded-md ">
              <div className="px-4 py-5  sm:p-6">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-6 ">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="px-2 py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-white"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="px-2 py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-white"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="px-2 py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-white"
                    >
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="px-2 py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              {/* cta */}
              <div className="px-4 py-3  text-left sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm  rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default GetIntouch;
