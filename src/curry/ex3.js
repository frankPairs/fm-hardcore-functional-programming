const { reduce } = require("ramda");

const _keepHighest = (x, y) => (x >= y ? x : y);
const max = reduce(_keepHighest, 0);

exports.max = max;
