var repeat = require('repeat-element');

const globalValueRegex = /^\s*(auto|initial|none|inherit|revert|revert-layer|unset)\s*$/g;
const growShrinkRegex = /^\s*\d+\s*$/g;

module.exports = function (value) {
  if (globalValueRegex.test(value)) {
    return { flex: value };
  }
  var values = value.split(/\s+/);

  var flexBasis = false;

  return ['top', 'right', 'bottom', 'left'].reduce(function (acc, direction, i) {
    acc[direction] = values[i];
    return acc;
  }, {});
};
