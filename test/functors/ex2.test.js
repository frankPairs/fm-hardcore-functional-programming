const { percentToFloat } = require("../../src/functors/ex2");

QUnit.test("Ex2: percentToFloat", (assert) => {
  assert.equal(String(percentToFloat("20%")), 0.2);
});
