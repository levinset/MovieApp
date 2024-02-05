import axios from "axios";
import { SearchInputType } from "../types/types";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (searchData: SearchInputType) => {
  const apiKey = "c7a02409";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchData.title}&type=${searchData.type}`;

  try {
    const response = await axios.get(url);
    const searchResults = response.data.Search;

    if (searchResults !== undefined) {
      //console.log(searchResults);
      return searchResults;
    } else {
      //console.error("No search results found.");
      throw new Error("No search results found");
    }
  } catch (error) {
    //console.error("Error fetching movies:", error);
    throw new Error("Error fetching movies");
  }
};

export function useSearchMovie(data: SearchInputType) {
  return useQuery({
    queryKey: ["movies", data.title, data.type],
    queryFn: () => fetchData(data),
  });
}
