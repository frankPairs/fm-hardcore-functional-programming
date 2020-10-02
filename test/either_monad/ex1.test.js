const { street, streetName } = require("../../src/either-monad/ex1");

QUnit.test("Ex1: street", (assert) => {
  const user = { address: { street: { name: "Willow" } } };
  assert.deepEqual(street(user), { name: "Willow" });
  assert.equal(street({}), "no street");
});

QUnit.test("Ex1: streetName", (assert) => {
  const user = { address: { street: { name: "Willow" } } };
  assert.equal(streetName(user), "Willow");
  assert.equal(streetName({}), "no street");
  assert.equal(streetName({ address: { street: null } }), "no street");
});
