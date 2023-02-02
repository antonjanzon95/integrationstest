/**
 * @jest-environment jsdom
 */

import { getData } from "../services/movieservice";

beforeEach(() => {
  document.body.innerHTML = "";
  jest.clearAllMocks();
});

jest.mock("../services/movieservice.ts");

describe("tests for data fetch", () => {
  test("should fetch all 3 movies in mock array", async () => {
    // arrange

    // act
    let result = await getData("Lord");

    // assert
    expect(result.length).toBe(3);
  });

  test("should only fetch first movie in mock array", async () => {
    // arrange

    // act
    let result = await getData("Fellowship");

    // assert
    expect(result.length).toBe(1);
  });

  test("should not fetch any of the movies in the mock array", async () => {
    // arrange

    // act
    let result = await getData("Bamse");

    // assert
    expect(result.length).toBe(0);
  });
});
