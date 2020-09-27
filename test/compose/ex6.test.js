const { CARS } = require("../../src/compose/data");
const { fastestCar } = require("../../src/compose/ex6");

QUnit.test("Bonus 2: fastestCar", (assert) => {
  assert.equal(fastestCar(CARS), "Aston Martin One-77 is the fastest");
});
