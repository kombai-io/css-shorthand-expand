var repeat = require('repeat-element');

const globalValueRegex = /^\s*(auto|initial|none|inherit|revert|revert-layer|unset)\s*$/g;
const growShrinkRegex = /^\s*\d+\s*$/g;

module.exports = function (value) {
  if (globalValueRegex.test(value)) {
    return { flex: value };
  }
  var values = value.split(/\s+/);

  var flexBasisFlag = false;

  var result = {};

  values.forEach((value) => {
    console.log(growShrinkRegex.test(value), value);
    if (growShrinkRegex.test(value)) {
      if (flexBasisFlag) {
        result['flex-shrink'] = value;
      } else {
        result['flex-grow'] = value;
        flexBasisFlag = true;
      }
    } else {
      result['flex-basis'] = value;
    }
  });

  return result;
};
