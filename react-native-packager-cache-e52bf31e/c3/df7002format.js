'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FIRST_GROUP_PATTERN = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = format;
exports.format_national_number_using_format = format_national_number_using_format;
exports.format_national_number = format_national_number;
exports.choose_format_for_number = choose_format_for_number;
exports.local_to_international_style = local_to_international_style;

var _common = require('./common');

var _parse = require('./parse');

var _metadata = require('./metadata');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function format() {
	var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var format = arguments[1];
	var third_argument = arguments[2];

	if (typeof input === 'string') {
		if (typeof third_argument === 'string') {
			input = { phone: input, country: format };
			format = third_argument;
		} else {
			input = { phone: input };
		}
	}

	var country_metadata = void 0;

	if (input.country) {
		country_metadata = this.metadata.countries[input.country];
	}

	var _parse_phone_number_a = (0, _parse.parse_phone_number_and_country_phone_code)(input.phone, this.metadata),
	    country_phone_code = _parse_phone_number_a.country_phone_code,
	    number = _parse_phone_number_a.number;

	if (country_phone_code) {
		if (input.country && country_phone_code !== (0, _metadata.get_phone_code)(country_metadata)) {
			return input.phone;
		}

		country_metadata = (0, _metadata.get_metadata_by_country_phone_code)(country_phone_code, this.metadata);
	}

	if (!country_metadata) {
		return input.phone;
	}

	switch (format) {
		case 'International':
			if (!number) {
				return '+' + (0, _metadata.get_phone_code)(country_metadata);
			}
			var national_number = format_national_number(number, 'International', false, country_metadata);
			return '+' + (0, _metadata.get_phone_code)(country_metadata) + ' ' + national_number;

		case 'International_plaintext':
			return '+' + (0, _metadata.get_phone_code)(country_metadata) + input.phone;

		case 'National':
			if (!number) {
				return '';
			}
			return format_national_number(number, 'National', false, country_metadata);
	}
}

var FIRST_GROUP_PATTERN = exports.FIRST_GROUP_PATTERN = /(\$\d)/;

function format_national_number_using_format(number, format, international, enforce_national_prefix, country_metadata) {
	var format_pattern_matcher = new RegExp((0, _metadata.get_format_pattern)(format));

	var national_prefix_formatting_rule = (0, _metadata.get_format_national_prefix_formatting_rule)(format, country_metadata);

	var national_prefix_may_be_omitted = !national_prefix_formatting_rule || national_prefix_formatting_rule && (0, _metadata.get_format_national_prefix_is_optional_when_formatting)(format, country_metadata) && !enforce_national_prefix;

	if (!international && !national_prefix_may_be_omitted) {
		return number.replace(format_pattern_matcher, (0, _metadata.get_format_format)(format).replace(FIRST_GROUP_PATTERN, national_prefix_formatting_rule));
	}

	var formatted_number = number.replace(format_pattern_matcher, international ? (0, _metadata.get_format_international_format)(format) : (0, _metadata.get_format_format)(format));

	if (international) {
		return local_to_international_style(formatted_number);
	}

	return formatted_number;
}

function format_national_number(number, format_as, enforce_national_prefix, country_metadata) {
	var format = choose_format_for_number((0, _metadata.get_formats)(country_metadata), number);

	if (!format) {
		return number;
	}

	return format_national_number_using_format(number, format, format_as === 'International', enforce_national_prefix, country_metadata);
}

function choose_format_for_number(available_formats, national_number) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _getIterator3.default)(available_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _format = _step.value;

			if ((0, _metadata.get_format_leading_digits_patterns)(_format).length > 0) {
				var last_leading_digits_pattern = (0, _metadata.get_format_leading_digits_patterns)(_format)[(0, _metadata.get_format_leading_digits_patterns)(_format).length - 1];

				if (national_number.search(last_leading_digits_pattern) !== 0) {
					continue;
				}
			}

			if ((0, _common.matches_entirely)(national_number, new RegExp((0, _metadata.get_format_pattern)(_format)))) {
				return _format;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

function local_to_international_style(local) {
	return local.replace(/[\(\)]/g, '').replace(/\-/g, ' ').trim();
}