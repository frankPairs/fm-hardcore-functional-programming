const { parseDbUrl } = require("../../src/either-monad/ex2");

QUnit.test("Ex1: parseDbUrl", (assert) => {
  const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}';

  assert.equal(parseDbUrl(config)[1], "sally");
  assert.equal(parseDbUrl(), null);
});
