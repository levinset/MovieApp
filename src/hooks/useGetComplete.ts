//
import axios from "axios";
import { useQuery } from "react-query";

//
const fetchData = async (imdbID: string) => {
  const apiKey = "c7a02409";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;

  try {
    const response = await axios.get(url);
    const searchResults = response.data;

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

export function useGetComplete(data: string) {
  return useQuery({
    queryKey: ["movies", data],
    queryFn: () => fetchData(data),
  });
}
