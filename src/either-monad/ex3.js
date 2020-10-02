// Ex3: Using Either and the functions above, refactor startApp
// =========================
const { parseDbUrl } = require("./ex2");
const { fromNullable } = require("./monads");

const startApp = (cfg) =>
  fromNullable(parseDbUrl(cfg))
    .map(([_, user, password, db]) => `starting ${db}, ${user}, ${password}`)
    .fold(
      () => "can't get config",
      (str) => str
    );

exports.startApp = startApp;
