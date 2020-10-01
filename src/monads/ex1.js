// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
const { prop, identity } = require("ramda");

const { fromNullable } = require("./monads");

const street = (user) =>
  fromNullable(user.address)
    .map(prop("street"))
    .fold(() => "no street", identity);

const streetName = (user) =>
  fromNullable(user.address)
    .chain((address) => fromNullable(address.street))
    .map(prop("name"))
    .fold(() => "no street", identity);

exports.street = street;
exports.streetName = streetName;
