// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const { Box } = require("./box");
const { moneyToFloat } = require("./ex1");
const { percentToFloat } = require("./ex2");

const applyDiscount = (price, discount) => {
  return Box(price)
    .map(moneyToFloat)
    .chain((cents) =>
      Box(discount)
        .map(percentToFloat)
        .map((savings) => cents - cents * savings)
    )
    .fold((x) => x);
};

exports.applyDiscount = applyDiscount;
