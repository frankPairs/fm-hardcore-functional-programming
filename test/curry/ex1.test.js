const { words, sentences } = require("../../src/curry/ex1");

QUnit.test("Ex1: split", (assert) => {
  assert.deepEqual(words("Jingle bells Batman smells"), [
    "Jingle",
    "bells",
    "Batman",
    "smells",
  ]);
});

QUnit.test("Ex1a: map/split", (assert) => {
  assert.deepEqual(
    sentences(["Jingle bells Batman smells", "Robin laid an egg"]),
    [
      ["Jingle", "bells", "Batman", "smells"],
      ["Robin", "laid", "an", "egg"],
    ]
  );
});
