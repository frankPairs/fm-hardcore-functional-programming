const { applyDiscount } = require("../../src/functors/ex3");

QUnit.test("Ex3: Apply discount", (assert) => {
  assert.equal(String(applyDiscount("$5.00", "20%")), 4);
});
