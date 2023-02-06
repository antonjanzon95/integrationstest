import { getData } from "../services/movieservice";
import { movies } from "../services/__mocks__/movieservice";

jest.mock("axios", () => ({
  get: async (url: string) => {
    return new Promise((resolve, reject) => {
      if (!url.endsWith("error")) {
        resolve({ data: { Search: movies } });
      } else {
        reject({ data: [] });
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
