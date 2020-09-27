// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const { Box } = require("./box");

const percentToFloat = (str) => {
  return Box(str)
    .map((s) => s.replace(/\%/, ""))
    .map(parseFloat)
    .fold((float) => float * 0.01);
};

exports.percentToFloat = percentToFloat;
