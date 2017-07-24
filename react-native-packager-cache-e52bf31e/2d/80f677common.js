'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.matches_entirely = matches_entirely;

function matches_entirely() {
	var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var regular_expression = arguments[1];

	if (typeof regular_expression === 'string') {
		regular_expression = '^(?:' + regular_expression + ')$';
	}

	var matched_groups = text.match(regular_expression);
	return matched_groups && matched_groups[0].length === text.length;
}