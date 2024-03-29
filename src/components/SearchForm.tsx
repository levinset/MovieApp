//import libraries & components
import { useForm, SubmitHandler } from "react-hook-form";
import { SearchInputType } from "../types/types";
import { useSearchMovie } from "../hooks/useSearchMovie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//main component
const SearchForm: React.FC = () => {
  // navigate results
  const navigate = useNavigate();
  //
  const [searchData, setSearchData] = useState<SearchInputType>({
    title: "",
    type: "",
  });
  // useSearchMovie hook with search data
  const { data, isError, isLoading } = useSearchMovie(searchData);
  //
  //console.log(data);
  // Form handling
  const { register, handleSubmit } = useForm<SearchInputType>();
  // useEffect to navigate when data changes
  useEffect(() => {
    if (data) {
      navigate("/results", { state: { data } });
    }
  }, [data, navigate]);

  //onSubmit
  const onSubmit: SubmitHandler<SearchInputType> = async (formData) => {
    setSearchData(formData);
  };
  //
  return (
    <div className="text-xl bg-color-gray">
      <form
        className=" flex flex-col margin-regulation gap-6 py-[4rem] "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row items-center gap-6 max-sm:flex-col ">
          <div className="flex flex-col w-[50%] gap-4 justify-center max-sm:w-full  ">
            <div className="flex flex-col gap-2">
              <label htmlFor="movieSearch">
                Name of movie/series/episode
                <span className="ml-2 font-bold text-red-600 ">*</span>
              </label>
              <input
                {...register("title")}
                className="px-4 py-3 text-xl rounded-md"
                type="text"
                placeholder="type here .."
              />
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <fieldset className="flex flex-col gap-3">
              <legend className="sr-only">Search Type</legend>
              <label htmlFor="SearchType">
                Select type <span className="font-bold text-red-600 ">*</span>
              </label>
              <div className="flex flex-row items-center gap-6 ">
                <div className="flex items-center ">
                  <input
                    {...register("type")}
                    id="movie-option-1"
                    type="radio"
                    name="type"
                    value="movie"
                    className="w-6 h-6 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked
                  />
                  <label
                    htmlFor="country-option-1"
                    className="block font-medium text-gray-900 ms-2 dark:text-gray-300"
                  >
                    movie
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    {...register("type")}
                    id="movie-option-2"
                    type="radio"
                    name="type"
                    value="series"
                    className="w-6 h-6 border-gray-300 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="country-option-2"
                    className="block font-medium text-gray-900 ms-2 dark:text-gray-300"
                  >
                    series
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className=" max-sm:flex max-sm:flex-row max-sm:justify-center">
          <button
            type="submit"
            className="bg-[#318de4] px-8 py-3 rounded-md text-white font-semibold text-xl flex flex-row items-center text-center content-center max-sm:px-[5rem] "
          >
            search
          </button>
        </div>
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching movies</p>}
    </div>
  );
};
export default SearchForm;
