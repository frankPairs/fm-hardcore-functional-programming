// Bonus 1:
// ============
// Refactor availablePrices with compose.
const { formatMoney } = require("accounting");
const { filter, prop, compose, map, join } = require("ramda");

const formatDollarValues = compose(formatMoney, prop("dollar_value"));
const availablePrices = compose(
  join(", "),
  map(formatDollarValues),
  filter(prop("in_stock"))
);

exports.availablePrices = availablePrices;
