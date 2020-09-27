const { curry } = require("ramda");

// Bonus 1:
// ============
// wrap array's built in slice to be functional and curried like ramda fn's.
// //[1,2,3].slice(0, 2)
const slice = curry((x, y, arr) => arr.slice(x, y));

exports.slice = slice;
