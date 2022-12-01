var repeat = require('repeat-element');

const globalValueRegex = /^\s*(auto|initial|none|inherit|revert|revert-layer|unset)\s*$/g

module.exports = function(value) {

	if(globalValueRegex.test(value)){
		return value;
	}
    
	var values = value.split(/\s+/);
	if(values.length === 1) values = repeat(values[0], 4);
	else if(values.length === 2) values = values.concat(values);
	else if(values.length === 3) values.push(values[1]);
	else if(values.length > 4) return;

	return [
		'top',
		'right',
		'bottom',
		'left'
	].reduce(function(acc, direction, i) {
		acc[direction] = values[i];
		return acc;
	}, {});
};
