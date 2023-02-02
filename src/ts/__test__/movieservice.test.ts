import { getData } from "../services/movieservice";
import { movies } from "../services/__mocks__/movieservice";
import { IOmdbResponse } from "./../models/IOmdbResponse";

jest.mock("axios", () => ({
  get: async (searchText: string) => {
    return new Promise((resolve, reject) => {
      // lägg till .filter för att bara skicka ut de filmer som söks på
      if (!searchText.endsWith("error")) {
        resolve({ data: { Search: movies }, status: 200 });
      } else {
        reject({ data: [], status: 500 });
      }
    });
  },
}));

describe("tests for data fetch", () => {
  test("should fetch data from mock array", async () => {
    // act
    let result = await getData("Lord");

    // assert
    expect(result.length).toBe(3);
  });

  test("should not fetch any of the movies in the mock array", async () => {
    // act
    let result = await getData("error");

    // assert
    expect(result.length).toBe(0);
  });
});
