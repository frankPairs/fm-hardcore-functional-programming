// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].
const { replace, compose, toLower, map, prop } = require("ramda");

const _underscore = replace(/\W+/g, "_"); //<-- leave this alone and use to sanitize

const sanitizeNames = map(compose(_underscore, toLower, prop("name")));

exports.sanitizeNames = sanitizeNames;
