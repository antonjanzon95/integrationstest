/**
 * @jest-environment jsdom
 */

import { getData } from "../services/movieservice";
import { IMovie } from "./../models/Movie";

beforeEach(() => {
  document.body.innerHTML = "";
  jest.clearAllMocks();
});

jest.mock("../movieservice.ts");

describe("tests for data fetch", () => {
  test("should fetch mock data", async () => {
    // arrange
    document.body.innerHTML = `
      <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
      </form>
      <div id="movie-container"></div>`;

    // act
    let result = await getData();

    // assert
    expect(result.length).toBe(3);
  });
});
