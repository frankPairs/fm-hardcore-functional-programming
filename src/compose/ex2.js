// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car
const { compose, prop, head } = require("ramda");

const nameOfFirstCar = compose(prop("name"), head);

exports.nameOfFirstCar = nameOfFirstCar;
