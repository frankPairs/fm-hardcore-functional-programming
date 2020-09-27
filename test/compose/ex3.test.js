const { CARS } = require("../../src/compose/data");
const { averageDollarValue } = require("../../src/compose/ex3");

QUnit.test("Ex3: averageDollarValue", (assert) => {
  assert.equal(averageDollarValue(CARS), 790700);
});
