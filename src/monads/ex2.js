// Ex2: Refactor parseDbUrl to return an Either instead of try/catch
// =========================
const { tryCatch, DB_REGEX } = require("./monads");

const parseDbUrl = (cfg) =>
  tryCatch(() => JSON.parse(cfg))
    .map((c) => c.url.match(DB_REGEX))
    .fold(
      () => null,
      (matcher) => matcher
    );

exports.parseDbUrl = parseDbUrl;
