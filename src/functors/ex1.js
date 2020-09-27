// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const { Box } = require("./box");

const moneyToFloat = (str) => {
  return Box(str).fold((x) => parseFloat(x.replace(/\$/, "")));
};

exports.moneyToFloat = moneyToFloat;
