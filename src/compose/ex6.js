// Bonus 2:
// ============
// Refactor to pointfree.
const { sortBy, last, prop, compose } = require("ramda");

const fastestCar = compose(
  (fastest) => fastest.name + " is the fastest",
  last,
  sortBy(prop("horsepower"))
);

exports.fastestCar = fastestCar;
