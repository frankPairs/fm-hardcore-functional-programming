const { startApp } = require("../../src/monads/ex3");

QUnit.test("Ex3: startApp", (assert) => {
  const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}';
  assert.equal(String(startApp(config)), "starting mydb, sally, muppets");
  assert.equal(String(startApp()), "can't get config");
});
