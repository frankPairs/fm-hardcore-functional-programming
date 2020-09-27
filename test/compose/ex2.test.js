const { CARS } = require("../../src/compose/data");
const { nameOfFirstCar } = require("../../src/compose/ex2");

QUnit.test("Ex2: nameOfFirstCar", (assert) => {
  assert.equal(nameOfFirstCar(CARS), "Ferrari FF");
});
