const { moneyToFloat } = require("../../src/functors/ex1");

QUnit.test("Ex1: moneyToFloat", (assert) => {
  assert.equal(String(moneyToFloat("$5.00")), 5);
});
