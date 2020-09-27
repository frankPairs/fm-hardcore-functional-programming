const { curry, map } = require("ramda");

// Setup
//==============
const split = curry((delimiter, string) => string.split(delimiter));

// Exercise 1
//==============
const words = split(" ");

// Exercise 1a
//==============
//use map to make a new words fn that not only works on 1 string, but on an array of strings.
const sentences = map(words);

exports.words = words;
exports.sentences = sentences;
