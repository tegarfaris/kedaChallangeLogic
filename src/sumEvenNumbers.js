function sumEvenNumbers(obj) {
  let sum = 0;

  function recurse(current) {
    for (let key in current) {
      if (typeof current[key] === "object") {
        recurse(current[key]);
      } else if (typeof current[key] === "number" && current[key] % 2 === 0) {
        sum += current[key];
      }
    }
  }

  recurse(obj);
  return sum;
}

module.exports = sumEvenNumbers;
