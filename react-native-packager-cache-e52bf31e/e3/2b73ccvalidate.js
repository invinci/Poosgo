'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = is_valid;

var _parse = require('./parse');

var _parse2 = _interopRequireDefault(_parse);

var _metadata = require('./metadata');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function is_valid(parsed, country_code) {
	if (!parsed) {
		return false;
	}

	if (typeof parsed === 'string') {
		parsed = _parse2.default.call(this, parsed, country_code);
	}

	if (!parsed.country) {
		return false;
	}

	var country_metadata = this.metadata.countries[parsed.country];

	if ((0, _metadata.get_types)(country_metadata)) {
		if (!(0, _parse.get_number_type)(parsed.phone, country_metadata)) {
			return false;
		}
	}

	return true;
}