const { CARS } = require("../../src/compose/data");
const { availablePrices } = require("../../src/compose/ex5");

QUnit.test("Bonus 1: availablePrices", (assert) => {
  assert.deepEqual(availablePrices(CARS), "$700,000.00, $1,850,000.00");
});
