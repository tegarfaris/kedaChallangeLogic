const sumEvenNumbers = require("../sumEvenNumbers");

test("sumEvenNumbers sums all even numbers in nested object", () => {
  const input1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };

  const input2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  };

  expect(sumEvenNumbers(input1)).toBe(6);
  expect(sumEvenNumbers(input2)).toBe(12);
  expect(sumEvenNumbers({})).toBe(0);
  expect(sumEvenNumbers({ a: 1, b: { c: 3 } })).toBe(0);
});
