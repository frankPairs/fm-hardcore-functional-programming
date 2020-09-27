// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const { Box } = require("./box");

const moneyToFloat = (str) => {
  return Box(str)
    .map((s) => s.replace(/\$/, ""))
    .fold(parseFloat);
};

exports.moneyToFloat = moneyToFloat;
