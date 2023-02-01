/**
 * @jest-environment jsdom
 */

import { IMovie } from "../models/Movie";
import * as functions from "../functions";

beforeEach(() => {
  document.body.innerHTML = "";
  jest.clearAllMocks();
});
