const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  toString: () => `Box(${x})`,
  chain: (f) => f(x),
});

exports.Box = Box;
