// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

const { last, prop, compose } = require("ramda");

const isLastInStock = compose(prop("in_stock"), last);

exports.isLastInStock = isLastInStock;
