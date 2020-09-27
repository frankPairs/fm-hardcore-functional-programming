const { max } = require("../../src/curry/ex3");

QUnit.test("Ex3: max", (assert) => {
  assert.equal(max([323, 523, 554, 123, 5234]), 5234);
});
