const { CARS } = require("../../src/compose/data");
const { isLastInStock } = require("../../src/compose/ex1");

QUnit.test("Ex1: isLastInStock", (assert) => {
  assert.deepEqual(isLastInStock(CARS), false);
});
