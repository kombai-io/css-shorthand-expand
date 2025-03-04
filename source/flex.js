var repeat = require('repeat-element');

const globalValueRegex = /^\s*(auto|initial|none|inherit|revert|revert-layer|unset)\s*$/g;
const growShrinkRegex = /^\s*\d+\s*$/g;

module.exports = function (value) {
  if (globalValueRegex.test(value)) {
    return { flex: value };
  }
  var values = value.split(/\s+/);

  var flexGrowFlag = false;

  var result = {};

  values.forEach((value) => {
    growShrinkRegex.lastIndex = 0;
    if (growShrinkRegex.test(value)) {
      if (flexGrowFlag) {
        result['flex-shrink'] = value;
      } else {
        result['flex-grow'] = value;
        flexGrowFlag = true;
      }
    } else {
      result['flex-basis'] = value;
    }
  });

  return result;
};
