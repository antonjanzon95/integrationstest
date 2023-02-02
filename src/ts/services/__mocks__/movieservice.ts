import { IMovie } from "../../models/Movie";

export let movies: IMovie[] = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    imdbID: "0120737",
    Type: "Action, Adventure, Drama, Fantasy",
    Poster: "___",
    Year: "2001",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    imdbID: "0167261",
    Type: "Action, Adventure, Drama, Fantasy",
    Poster: "___",
    Year: "2002",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    imdbID: "0167260",
    Type: "Action, Adventure, Drama, Fantasy",
    Poster: "___",
    Year: "2003",
  },
];

export async function getData(SearchText: string): Promise<IMovie[]> {
  return new Promise((resolve) => {
    resolve(movies.filter((movie) => movie.Title.includes(SearchText)));
  });
}
