const sortDescending = require("../sortDescending");

test("sortDescending sorts the array in descending order", () => {
  expect(sortDescending([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([
    5, 4, 3, 3, 2, 2, 1, 1,
  ]);
  expect(sortDescending([5, 3, 8, 7])).toEqual([8, 7, 5, 3]);
  expect(sortDescending([1])).toEqual([1]);
  expect(sortDescending([])).toEqual([]);
});
