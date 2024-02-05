//
export type SearchInputType = {
  title: string;
  type: string; // Specify the possible values for the 'type' field
};
//
export interface MovieResponseType {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
//
export interface MovieData {
  Title: string;
  Year: string;
  Poster: string;
  Genre: string;
  Plot: string;
  Released: string;
  Type: string;
}
