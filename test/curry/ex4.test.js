const { slice } = require("../../src/curry/ex4");

QUnit.test("Bonus 1", (assert) => {
  assert.deepEqual(slice(1)(3)(["a", "b", "c"]), ["b", "c"]);
});
