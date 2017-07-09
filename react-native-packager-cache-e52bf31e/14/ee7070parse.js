'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VALID_PUNCTUATION = exports.VALID_DIGITS = exports.PLUS_CHARS = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = parse;
exports.normalize = normalize;
exports.replace_characters = replace_characters;
exports.is_viable_phone_number = is_viable_phone_number;
exports.extract_formatted_phone_number = extract_formatted_phone_number;
exports.parse_phone_number = parse_phone_number;
exports.parse_phone_number_and_country_phone_code = parse_phone_number_and_country_phone_code;
exports.strip_national_prefix = strip_national_prefix;
exports.find_country_code = find_country_code;
exports.get_number_type = get_number_type;
exports.is_of_type = is_of_type;
exports.is_national_prefix_required = is_national_prefix_required;

var _common = require('./common');

var _metadata = require('./metadata');

var _format = require('./format');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var PLUS_CHARS = exports.PLUS_CHARS = '+\uFF0B';

var VALID_DIGITS = exports.VALID_DIGITS = '0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9';

var VALID_PUNCTUATION = exports.VALID_PUNCTUATION = '-x\u2010-\u2015\u2212\u30FC\uFF0D-\uFF0F \xA0\xAD\u200B\u2060\u3000' + '()\uFF08\uFF09\uFF3B\uFF3D.\\[\\]/~\u2053\u223C\uFF5E';

var MIN_LENGTH_PHONE_NUMBER_PATTERN = '[' + VALID_DIGITS + ']{' + MIN_LENGTH_FOR_NSN + '}';

var VALID_PHONE_NUMBER = '[' + PLUS_CHARS + ']{0,1}' + '(?:' + '[' + VALID_PUNCTUATION + ']*' + '[' + VALID_DIGITS + ']' + '){3,}' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']*';

var VALID_PHONE_NUMBER_PATTERN = new RegExp('^' + MIN_LENGTH_PHONE_NUMBER_PATTERN + '$' + '|' + '^' + VALID_PHONE_NUMBER + '$', 'i');

var PHONE_NUMBER_START_PATTERN = new RegExp('[' + PLUS_CHARS + VALID_DIGITS + ']');

var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp('[^' + VALID_DIGITS + ']+$');

var LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+');

var DIGIT_MAPPINGS = {
	'0': '0',
	'1': '1',
	'2': '2',
	'3': '3',
	'4': '4',
	'5': '5',
	'6': '6',
	'7': '7',
	'8': '8',
	'9': '9',
	'\uFF10': '0',
	'\uFF11': '1',
	'\uFF12': '2',
	'\uFF13': '3',
	'\uFF14': '4',
	'\uFF15': '5',
	'\uFF16': '6',
	'\uFF17': '7',
	'\uFF18': '8',
	'\uFF19': '9',
	'\u0660': '0',
	'\u0661': '1',
	'\u0662': '2',
	'\u0663': '3',
	'\u0664': '4',
	'\u0665': '5',
	'\u0666': '6',
	'\u0667': '7',
	'\u0668': '8',
	'\u0669': '9',
	'\u06F0': '0',
	'\u06F1': '1',
	'\u06F2': '2',
	'\u06F3': '3',
	'\u06F4': '4',
	'\u06F5': '5',
	'\u06F6': '6',
	'\u06F7': '7',
	'\u06F8': '8',
	'\u06F9': '9' };

var MAX_LENGTH_COUNTRY_CODE = 3;

var MIN_LENGTH_FOR_NSN = 2;

var MAX_LENGTH_FOR_NSN = 17;

var MAX_INPUT_STRING_LENGTH = 250;

var default_options = {
	country: {}
};

function parse(text, options) {
	if (typeof options === 'string') {
		var restrict_to_country = options;

		options = (0, _extends3.default)({}, default_options, {

			country: {
				restrict: restrict_to_country
			}
		});
	}

	if (!options) {
		options = (0, _extends3.default)({}, default_options);
	}

	if (!this.metadata.countries[options.country.default]) {
		options = (0, _extends3.default)({}, options);
		delete options.country.default;
	}

	if (!this.metadata.countries[options.country.restrict]) {
		options = (0, _extends3.default)({}, options);
		delete options.country.restrict;
	}

	var formatted_phone_number = extract_formatted_phone_number(text);

	if (!is_viable_phone_number(formatted_phone_number)) {
		return {};
	}

	var _parse_phone_number_a = parse_phone_number_and_country_phone_code(formatted_phone_number, this.metadata),
	    country_phone_code = _parse_phone_number_a.country_phone_code,
	    number = _parse_phone_number_a.number;

	if (!country_phone_code && !number) {
		return {};
	}

	var country = void 0;
	var country_metadata = void 0;

	var is_international = false;

	if (country_phone_code) {
		is_international = true;

		if (options.country.restrict && country_phone_code !== (0, _metadata.get_phone_code)(this.metadata.countries[options.country.restrict])) {
			return {};
		}

		country_metadata = (0, _metadata.get_metadata_by_country_phone_code)(country_phone_code, this.metadata);
	} else if (options.country.default || options.country.restrict) {
		country = options.country.default || options.country.restrict;
		country_metadata = this.metadata.countries[country];

		number = normalize(text);
	}

	if (!country_metadata) {
		return {};
	}

	var national_number = strip_national_prefix(number, country_metadata);

	var did_have_national_prefix = national_number !== number;

	if (!is_international && !did_have_national_prefix && is_national_prefix_required(national_number, country_metadata)) {
		return {};
	}

	if (!country) {
		country = find_country_code(country_phone_code, national_number, this.metadata);

		if (!country) {
			return {};
		}
	}

	if (national_number.length > MAX_LENGTH_FOR_NSN) {
		return {};
	}

	var national_number_rule = new RegExp((0, _metadata.get_national_number_pattern)(country_metadata));

	if (!(0, _common.matches_entirely)(national_number, national_number_rule)) {
		return {};
	}

	return { country: country, phone: national_number };
}

function normalize(number) {
	return replace_characters(number, DIGIT_MAPPINGS);
}

function replace_characters(text, replacements) {
	var replaced = '';

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _getIterator3.default)(text), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var character = _step.value;

			var replacement = replacements[character.toUpperCase()];

			if (replacement !== undefined) {
				replaced += replacement;
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

	return replaced;
}

function is_viable_phone_number(number) {
	return number.length >= MIN_LENGTH_FOR_NSN && (0, _common.matches_entirely)(number, VALID_PHONE_NUMBER_PATTERN);
}

function extract_formatted_phone_number(text) {
	if (!text || text.length > MAX_INPUT_STRING_LENGTH) {
		return '';
	}

	var starts_at = text.search(PHONE_NUMBER_START_PATTERN);

	if (starts_at < 0) {
		return '';
	}

	return text.slice(starts_at).replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
}

function parse_phone_number(number) {
	if (!number) {
		return '';
	}

	var is_international = LEADING_PLUS_CHARS_PATTERN.test(number);

	number = normalize(number);

	if (is_international) {
		return '+' + number;
	}

	return number;
}

function parse_phone_number_and_country_phone_code(number, metadata) {
	number = parse_phone_number(number);

	if (!number) {
		return {};
	}

	if (number[0] !== '+') {
		return { number: number };
	}

	number = number.slice(1);

	if (number[0] === '0') {
		return {};
	}

	var i = 1;
	while (i <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
		var country_phone_code = number.slice(0, i);

		if (metadata.country_phone_code_to_countries[country_phone_code]) {
			return { country_phone_code: country_phone_code, number: number.slice(i) };
		}

		i++;
	}

	return {};
}

function strip_national_prefix(number, country_metadata) {
	var national_prefix_for_parsing = (0, _metadata.get_national_prefix_for_parsing)(country_metadata);

	if (!number || !national_prefix_for_parsing) {
		return number;
	}

	var national_prefix_pattern = new RegExp('^(?:' + national_prefix_for_parsing + ')');
	var national_prefix_matcher = national_prefix_pattern.exec(number);

	if (!national_prefix_matcher) {
		return number;
	}

	var national_prefix_transform_rule = (0, _metadata.get_national_prefix_transform_rule)(country_metadata);

	var national_significant_number = void 0;

	var any_groups_were_captured = national_prefix_matcher[national_prefix_matcher.length - 1];

	if (national_prefix_transform_rule && any_groups_were_captured) {
		national_significant_number = number.replace(national_prefix_pattern, national_prefix_transform_rule);
	} else {
			national_significant_number = number.slice(national_prefix_matcher[0].length);
		}

	var national_number_rule = new RegExp((0, _metadata.get_national_number_pattern)(country_metadata));

	if ((0, _common.matches_entirely)(number, national_number_rule) && !(0, _common.matches_entirely)(national_significant_number, national_number_rule)) {
		return number;
	}

	return national_significant_number;
}

function find_country_code(country_phone_code, national_phone_number, metadata) {
	var possible_countries = metadata.country_phone_code_to_countries[country_phone_code];

	if (possible_countries.length === 1) {
		return possible_countries[0];
	}

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = (0, _getIterator3.default)(possible_countries), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var country_code = _step2.value;

			var country = metadata.countries[country_code];

			if ((0, _metadata.get_leading_digits)(country)) {
				if (national_phone_number && national_phone_number.search((0, _metadata.get_leading_digits)(country)) === 0) {
					return country_code;
				}
			} else if (get_number_type(national_phone_number, country)) {
					return country_code;
				}
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
}

function get_number_type(national_number, country_metadata) {
	if (!is_of_type(national_number, (0, _metadata.get_national_number_pattern)(country_metadata))) {
		return;
	}

	if (is_of_type(national_number, (0, _metadata.get_type_mobile)(country_metadata))) {
		if (!(0, _metadata.get_type_fixed_line)(country_metadata)) {
			return 'FIXED_LINE_OR_MOBILE';
		}

		return 'MOBILE';
	}

	if (is_of_type(national_number, (0, _metadata.get_type_fixed_line)(country_metadata))) {
		if (!(0, _metadata.get_type_mobile)(country_metadata)) {
			return 'FIXED_LINE_OR_MOBILE';
		}

		return 'FIXED_LINE';
	}

	if (is_of_type(national_number, (0, _metadata.get_type_toll_free)(country_metadata))) {
		return 'TOLL_FREE';
	}

	if (is_of_type(national_number, (0, _metadata.get_type_premium_rate)(country_metadata))) {
		return 'PREMIUM_RATE';
	}

	if (is_of_type(national_number, (0, _metadata.get_type_personal_number)(country_metadata))) {
		return 'PERSONAL_NUMBER';
	}

	if (is_of_type(national_number, (0, _metadata.get_type_voice_mail)(country_metadata))) {
		return 'VOICEMAIL';
	}

	if (is_of_type(national_number, (0, _metadata.get_type_uan)(country_metadata))) {
		return 'UAN';
	}

	if (is_of_type(national_number, (0, _metadata.get_type_pager)(country_metadata))) {
		return 'PAGER';
	}

	if (is_of_type(national_number, (0, _metadata.get_type_voip)(country_metadata))) {
		return 'VOIP';
	}

	if (is_of_type(national_number, (0, _metadata.get_type_shared_cost)(country_metadata))) {
		return 'SHARED_COST';
	}
}

function is_of_type(national_number, type) {
	return (0, _common.matches_entirely)(national_number, type);
}

function is_national_prefix_required(national_number, country_metadata) {
	var format = (0, _format.choose_format_for_number)((0, _metadata.get_formats)(country_metadata), national_number);

	if (format) {
		return (0, _metadata.get_format_national_prefix_is_mandatory_when_formatting)(format, country_metadata);
	}
}