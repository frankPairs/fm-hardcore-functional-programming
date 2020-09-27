// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const { Box } = require("./box");

const percentToFloat = (str) => {
  return Box(str)
    .map((x) => parseFloat(x.replace(/\%/, "")))
    .fold((float) => float * 0.01);
};

exports.percentToFloat = percentToFloat;
