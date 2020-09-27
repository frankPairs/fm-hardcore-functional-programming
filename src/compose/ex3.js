// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition
const { reduce, map, prop, add } = require("ramda");
const compose = require("ramda/src/compose");

const _average = function (xs) {
  return reduce(add, 0, xs) / xs.length;
};

const averageDollarValue = compose(_average, map(prop("dollar_value")));

exports.averageDollarValue = averageDollarValue;
