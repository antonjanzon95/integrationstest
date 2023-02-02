/**
 * @jest-environment jsdom
 */

import { IMovie } from "../models/Movie";
import * as functions from "../functions";

beforeEach(() => {
  document.body.innerHTML = "";
  jest.resetAllMocks();
});

describe("tests for movieSort function", () => {
  test("should sort movies in descending order", () => {
    // arrange
    let movies: IMovie[] = [
      {
        Title: "Bcd",
        imdbID: "0120737",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2001",
      },
      {
        Title: "Abc",
        imdbID: "0167261",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2002",
      },
      {
        Title: "Cde",
        imdbID: "0167260",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2003",
      },
    ];

    // act
    functions.movieSort(movies, true);

    // assert
    expect(movies[0].Title).toBe("Abc");
    expect(movies[1].Title).toBe("Bcd");
    expect(movies[2].Title).toBe("Cde");
  });

  test("should not sort movies", () => {
    // arrange
    let movies: IMovie[] = [
      {
        Title: "Abc",
        imdbID: "0120737",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2001",
      },
      {
        Title: "Abc",
        imdbID: "0167261",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2002",
      },
      {
        Title: "Abc",
        imdbID: "0167260",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2003",
      },
    ];

    let unchangedMovies: IMovie[] = [
      {
        Title: "Abc",
        imdbID: "0120737",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2001",
      },
      {
        Title: "Abc",
        imdbID: "0167261",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2002",
      },
      {
        Title: "Abc",
        imdbID: "0167260",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2003",
      },
    ];

    // act
    functions.movieSort(movies, true);

    // assert
    expect(movies).toEqual(unchangedMovies);
  });

  test("should sort movies in ascending order", () => {
    // arrange
    let movies: IMovie[] = [
      {
        Title: "Bcd",
        imdbID: "0120737",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2001",
      },
      {
        Title: "Abc",
        imdbID: "0167261",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2002",
      },
      {
        Title: "Cde",
        imdbID: "0167260",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2003",
      },
    ];

    // act
    functions.movieSort(movies, false);

    // assert
    expect(movies[0].Title).toBe("Cde");
    expect(movies[1].Title).toBe("Bcd");
    expect(movies[2].Title).toBe("Abc");
  });

  test("should not sort movies (ascending order path)", () => {
    // arrange
    let movies: IMovie[] = [
      {
        Title: "Abc",
        imdbID: "0120737",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2001",
      },
      {
        Title: "Abc",
        imdbID: "0167261",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2002",
      },
      {
        Title: "Abc",
        imdbID: "0167260",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2003",
      },
    ];

    let unchangedMovies: IMovie[] = [
      {
        Title: "Abc",
        imdbID: "0120737",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2001",
      },
      {
        Title: "Abc",
        imdbID: "0167261",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2002",
      },
      {
        Title: "Abc",
        imdbID: "0167260",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2003",
      },
    ];

    // act
    functions.movieSort(movies, false);

    // assert
    expect(movies).toEqual(unchangedMovies);
  });

  test("should sort movies in descending order without boolean parameter given to function (placeholder parameter used)", () => {
    // arrange
    let movies: IMovie[] = [
      {
        Title: "Bcd",
        imdbID: "0120737",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2001",
      },
      {
        Title: "Abc",
        imdbID: "0167261",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2002",
      },
      {
        Title: "Cde",
        imdbID: "0167260",
        Type: "Action, Adventure, Drama, Fantasy",
        Poster: "___",
        Year: "2003",
      },
    ];

    // act
    functions.movieSort(movies);

    // assert
    expect(movies[0].Title).toBe("Abc");
    expect(movies[1].Title).toBe("Bcd");
    expect(movies[2].Title).toBe("Cde");
  });
});
