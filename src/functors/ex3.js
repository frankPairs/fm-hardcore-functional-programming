// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const { Box } = require("./box");
const { moneyToFloat } = require("./ex1");
const { percentToFloat } = require("./ex2");

const applyDiscount = (price, discount) => {
  return Box(price)
    .map(moneyToFloat)
    .fold((cents) => cents - cents * Box(discount).fold(percentToFloat));
};

exports.applyDiscount = applyDiscount;
