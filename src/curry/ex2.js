const { filter, test } = require("ramda");

const filterQs = filter(test(/q/gi));

exports.filterQs = filterQs;
