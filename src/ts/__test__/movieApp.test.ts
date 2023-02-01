/**
 * @jest-environment jsdom
 */

import { IMovie } from "../models/Movie";
import * as movieservice from "../services/movieservice";
import * as movieApp from "../movieApp";

beforeEach(() => {
  document.body.innerHTML = "";
  jest.clearAllMocks();
});

describe("tests for createHtml function", () => {
  test("should create html", () => {
    // arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;

    let container = document.querySelector(
      "#movie-container"
    ) as HTMLDivElement;

    let movies: IMovie[] = [
      {
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        imdbID: "0120737",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        Year: "2001",
      },
    ];

    // act
    movieApp.createHtml(movies, container);

    // assert
    let movieContainer: HTMLDivElement = document.querySelector(
      "#movie-container > div"
    ) as HTMLDivElement;
    let amountMovies = document.querySelectorAll("h3");
    let movieTitle = document.querySelector(
      "#movie-container > .movie > h3"
    )?.innerHTML;
    let moviePoster: HTMLImageElement = document.querySelector(
      ".movie > img"
    ) as HTMLImageElement;

    expect(movieContainer?.classList[0]).toBe("movie");
    expect(amountMovies.length).toBe(1);
    expect(movieTitle).toBe(movies[0].Title);
    expect(moviePoster.src).toBe(movies[0].Poster);
  });
});

describe("tests for displayNoResult function", () => {
  test('should create paragraph with "no results" message', () => {
    // arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;

    let container = document.querySelector(
      "#movie-container"
    ) as HTMLDivElement;

    // act
    movieApp.displayNoResult(container);

    // assert
    let message = document.querySelector("#movie-container > p")?.innerHTML;

    expect(message).toBe("Inga sökresultat att visa");
  });
});
