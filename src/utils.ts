export const getProp = (object, keys, defaultVal = undefined) => {
  keys = Array.isArray(keys) ? keys : keys.split('.');
  object = object[keys[0]];
  if (object && keys.length > 1) {
    return getProp(object, keys.slice(1));
  }
  return object === undefined ? defaultVal : object;
};

export const round = (val: number, precision = 1) => {
  return Math.round(val * precision) / precision;
};

export const neighborOffsets = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

export const contour = [
  [
    [0, 0],
    [0, 1],
  ],
  [
    [0, 0],
    [1, 0],
  ],
  [
    [1, 0],
    [1, 1],
  ],
  [
    [0, 1],
    [1, 1],
  ],
];
