const { take } = require("../../src/curry/ex5");

QUnit.test("Bonus 2", (assert) => {
  assert.deepEqual(take(2)(["a", "b", "c"]), ["a", "b"]);
});
