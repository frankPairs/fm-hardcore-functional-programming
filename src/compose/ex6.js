// Bonus 2:
// ============
// Refactor to pointfree.
const { sortBy, last, prop, compose, curry } = require("ramda");

const appendStr = curry((newStr, str) => `${str}${newStr}`);
const fastestCar = compose(
  appendStr(" is the fastest"),
  prop("name"),
  last,
  sortBy(prop("horsepower"))
);

exports.fastestCar = fastestCar;
