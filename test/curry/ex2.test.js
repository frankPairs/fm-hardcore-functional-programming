const { filterQs } = require("../../src/curry/ex2");

QUnit.test("Ex2: filter", (assert) => {
  assert.deepEqual(filterQs(["quick", "camels", "quarry", "over", "quails"]), [
    "quick",
    "quarry",
    "quails",
  ]);
});
