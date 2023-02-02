/**
 * @jest-environment jsdom
 */

import { IMovie } from "../models/Movie";
import * as movieApp from "../movieApp";
import { getData } from "../services/movieservice";

beforeEach(() => {
  document.body.innerHTML = "";
  jest.resetAllMocks();
});

jest.mock("../services/movieservice.ts");

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

describe("tests for handleSubmit function", () => {
  test("should fetch data and call createHtml function", async () => {
    // arrange
    document.body.innerHTML =
      `<input type="text" id="searchText" placeholder="Skriv titel här" />` +
      `<div id="movie-container"></div>`;

    (document.querySelector("#searchText") as HTMLInputElement).value = "Lord";

    let spyOnCreateHtml = jest.spyOn(movieApp, "createHtml").mockReturnValue();

    // act
    await movieApp.handleSubmit();

    // assert
    expect(spyOnCreateHtml).toHaveBeenCalled();
  });

  test("should not create html, and instead call displayNoResult inside else-block", async () => {
    // arrange
    document.body.innerHTML =
      `<input type="text" id="searchText" placeholder="Skriv titel här" />` +
      `<div id="movie-container"></div>`;

    (document.querySelector("#searchText") as HTMLInputElement).value = "Bamse";

    let spyOnCreateHtml = jest.spyOn(movieApp, "createHtml").mockReturnValue();
    let spyOnDisplayNoResult = jest
      .spyOn(movieApp, "displayNoResult")
      .mockReturnValue();

    // act
    await movieApp.handleSubmit();

    // assert
    expect(spyOnCreateHtml).toBeCalledTimes(0);
    expect(spyOnDisplayNoResult).toBeCalledTimes(1);
  });

  // test("should call the displayNoResult function inside catch-block", async () => {
  //   // arrange
  //   // act
  //   await movieApp.handleSubmit();
  //   // assert
  // });
});

describe("tests for init-function", () => {
  test("should add eventlistener to form", () => {
    // arrange
    document.body.innerHTML =
      `<form id="searchForm">` +
      `<input type="text" id="searchText" placeholder="Skriv titel här" />` +
      `<button type="submit" id="search">Sök</button>` +
      `</form>` +
      `<div id="movie-container"></div>`;

    let spyOnHandleSubmit = jest
      .spyOn(movieApp, "handleSubmit")
      .mockReturnValue(
        new Promise<void>((resolve) => {
          resolve();
        })
      );

    movieApp.init();

    // act
    (document.querySelector("#searchForm") as HTMLFormElement).submit();

    // assert
    expect(spyOnHandleSubmit).toHaveBeenCalled();

    spyOnHandleSubmit.mockReset();
  });
});
