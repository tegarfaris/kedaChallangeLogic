const maxSubarraySum = require("../maxSubarraySumm");

test("maxSubarraySum returns the maximum sum of subarray with given length", () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  expect(maxSubarraySum([1, 2, 3], 4)).toBeNull();
  expect(maxSubarraySum([], 1)).toBeNull();
});
