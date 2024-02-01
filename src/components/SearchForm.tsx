//import libraries

//main component
export default function SearchForm() {
  return (
    <div className="bg-color-gray text-xl">
      <div className=" flex flex-col margin-regulation gap-6 py-[4rem] ">
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-col w-[50%] gap-4 justify-center  ">
            <div className="flex flex-col gap-2">
              <label htmlFor="movieSearch">
                Name of movie/series/episode
                <span className=" text-red-600 font-bold ml-2">*</span>
              </label>
              <input
                className="rounded-md py-3 text-xl px-4"
                type="text"
                placeholder="type here .."
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center ">
            <fieldset className="flex flex-col gap-3">
              <legend className="sr-only">Search Type</legend>
              <label htmlFor="SearchType">
                Select type <span className=" text-red-600 font-bold">*</span>
              </label>
              <div className=" flex flex-row items-center gap-6">
                <div className="flex items-center ">
                  <input
                    id="country-option-1"
                    type="radio"
                    name="countries"
                    value="USA"
                    className="w-6 h-6 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked
                  />
                  <label
                    htmlFor="country-option-1"
                    className="block ms-2  font-medium text-gray-900 dark:text-gray-300"
                  >
                    movie
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="country-option-2"
                    type="radio"
                    name="countries"
                    value="Germany"
                    className="w-6 h-6 border-gray-300  focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="country-option-2"
                    className="block ms-2  font-medium text-gray-900 dark:text-gray-300"
                  >
                    series
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div>
          <button className="bg-[#318de4] px-8 py-3 rounded-md text-white font-semibold text-xl flex flex-row items-center text-center content-center">
            search
          </button>
        </div>
      </div>
    </div>
  );
}
