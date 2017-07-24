'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = function (metadata) {
	var as_you_type = function () {
		function as_you_type(country_code) {
			(0, _classCallCheck3.default)(this, as_you_type);

			if (country_code && metadata.countries[country_code]) {
				this.default_country = country_code;
			}

			this.reset();
		}

		(0, _createClass3.default)(as_you_type, [{
			key: 'input',
			value: function input(text) {

				var extracted_number = (0, _parse.extract_formatted_phone_number)(text);

				if (!extracted_number) {
					if (text && text.indexOf('+') >= 0) {
						extracted_number = '+';
					}
				}

				if (!(0, _common.matches_entirely)(extracted_number, VALID_INCOMPLETE_PHONE_NUMBER_PATTERN)) {
					return this.current_output;
				}

				return this.process_input((0, _parse.parse_phone_number)(extracted_number));
			}
		}, {
			key: 'process_input',
			value: function process_input(input) {
				if (input[0] === '+') {
					if (!this.parsed_input) {
						this.parsed_input += '+';

						this.reset_countriness();
					}

					input = input.slice(1);
				}

				this.parsed_input += input;

				this.valid = false;

				this.national_number += input;

				if (this.is_international()) {
					if (!this.country_phone_code) {
						if (!this.extract_country_phone_code()) {
							return this.parsed_input;
						}

						this.initialize_phone_number_formats_for_this_country_phone_code();
						this.reset_format();
						this.determine_the_country();
					} else if (!this.country) {
							this.determine_the_country();
						}
				} else {

					var previous_national_prefix = this.national_prefix;
					this.national_number = this.national_prefix + this.national_number;

					this.extract_national_prefix();

					if (this.national_prefix !== previous_national_prefix) {
						this.matching_formats = this.available_formats;
						this.reset_format();
					}
				}

				var formatted_national_phone_number = this.format_national_phone_number(input);

				if (formatted_national_phone_number) {
					return this.full_phone_number(formatted_national_phone_number);
				}

				return this.parsed_input;
			}
		}, {
			key: 'format_national_phone_number',
			value: function format_national_phone_number(next_digits) {
				var national_number_formatted_with_previous_format = void 0;
				if (this.chosen_format) {
					national_number_formatted_with_previous_format = this.format_next_national_number_digits(next_digits);
				}

				var formatted_number = this.attempt_to_format_complete_phone_number();

				if (formatted_number) {
					if (this.country) {
						this.valid = true;
					}

					return formatted_number;
				}

				this.match_formats_by_leading_digits();

				if (this.choose_another_format()) {

					return this.reformat_national_number();
				}

				return national_number_formatted_with_previous_format;
			}
		}, {
			key: 'reset',
			value: function reset() {
				this.parsed_input = '';

				this.current_output = '';

				this.national_prefix = '';

				this.national_number = '';

				this.reset_countriness();

				this.reset_format();

				this.valid = false;

				return this;
			}
		}, {
			key: 'reset_country',
			value: function reset_country() {
				if (this.default_country && !this.is_international()) {
					this.country = this.default_country;
				} else {
					this.country = undefined;
				}
			}
		}, {
			key: 'reset_countriness',
			value: function reset_countriness() {
				this.reset_country();

				if (this.default_country && !this.is_international()) {
					this.country_metadata = metadata.countries[this.default_country];
					this.country_phone_code = this.country_metadata.phone_code;

					this.initialize_phone_number_formats_for_this_country_phone_code();
				} else {
					this.country_metadata = undefined;
					this.country_phone_code = undefined;

					this.available_formats = [];
					this.matching_formats = this.available_formats;
				}
			}
		}, {
			key: 'reset_format',
			value: function reset_format() {
				this.chosen_format = undefined;
				this.template = undefined;
				this.partially_populated_template = undefined;
				this.last_match_position = -1;
			}

		}, {
			key: 'reformat_national_number',
			value: function reformat_national_number() {
				return this.format_next_national_number_digits(this.national_number);
			}
		}, {
			key: 'initialize_phone_number_formats_for_this_country_phone_code',
			value: function initialize_phone_number_formats_for_this_country_phone_code() {
				this.available_formats = (0, _metadata.get_formats)(this.country_metadata).filter(function (format) {
					return ELIGIBLE_FORMAT_PATTERN.test((0, _metadata.get_format_international_format)(format));
				}).sort(function (a, b) {
					if ((0, _metadata.get_format_leading_digits_patterns)(a).length === 0 && (0, _metadata.get_format_leading_digits_patterns)(b).length > 0) {
						return -1;
					}

					if ((0, _metadata.get_format_leading_digits_patterns)(a).length > 0 && (0, _metadata.get_format_leading_digits_patterns)(b).length === 0) {
						return 1;
					}

					return 0;
				});

				this.matching_formats = this.available_formats;
			}
		}, {
			key: 'match_formats_by_leading_digits',
			value: function match_formats_by_leading_digits() {
				var leading_digits = this.national_number;

				var index_of_leading_digits_pattern = leading_digits.length - MIN_LEADING_DIGITS_LENGTH;

				if (index_of_leading_digits_pattern < 0) {
					index_of_leading_digits_pattern = 0;
				}

				this.matching_formats = this.get_relevant_phone_number_formats().filter(function (format) {
					var leading_digits_pattern_count = (0, _metadata.get_format_leading_digits_patterns)(format).length;

					if (leading_digits_pattern_count === 0) {
						return true;
					}

					var leading_digits_pattern_index = Math.min(index_of_leading_digits_pattern, leading_digits_pattern_count - 1);
					var leading_digits_pattern = (0, _metadata.get_format_leading_digits_patterns)(format)[leading_digits_pattern_index];
					return new RegExp('^' + leading_digits_pattern).test(leading_digits);
				});
			}
		}, {
			key: 'get_relevant_phone_number_formats',
			value: function get_relevant_phone_number_formats() {
				var leading_digits = this.national_number;

				if (leading_digits.length <= MIN_LEADING_DIGITS_LENGTH) {
					return this.available_formats;
				}

				return this.matching_formats;
			}

		}, {
			key: 'attempt_to_format_complete_phone_number',
			value: function attempt_to_format_complete_phone_number() {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = (0, _getIterator3.default)(this.get_relevant_phone_number_formats()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var format = _step.value;

						var matcher = new RegExp('^(?:' + (0, _metadata.get_format_pattern)(format) + ')$');

						if (!matcher.test(this.national_number)) {
							if (this.national_prefix && (0, _metadata.get_format_national_prefix_is_optional_when_formatting)(format, this.country_metadata)) {
								if (!matcher.test(this.national_prefix + this.national_number)) {
									continue;
								}

								this.national_number = this.national_prefix + this.national_number;
								this.national_prefix = '';
							}

							continue;
						}

						if (!this.validate_format(format)) {
							continue;
						}

						this.reset_format();
						this.chosen_format = format;

						var formatted_number = (0, _format.format_national_number_using_format)(this.national_number, format, this.is_international(), this.national_prefix.length > 0, this.country_metadata);

						if (this.create_formatting_template(format)) {
							this.reformat_national_number();
						} else {
							var full_number = this.full_phone_number(formatted_number);

							this.template = full_number.replace(/[\d\+]/g, DIGIT_PLACEHOLDER);
							this.partially_populated_template = full_number;
						}

						return formatted_number;
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

		}, {
			key: 'full_phone_number',
			value: function full_phone_number(formatted_national_number) {
				if (this.is_international()) {
					return '+' + this.country_phone_code + ' ' + formatted_national_number;
				}

				return formatted_national_number;
			}

		}, {
			key: 'extract_country_phone_code',
			value: function extract_country_phone_code() {
				if (!this.national_number) {
					return;
				}

				var _parse_phone_number_a = (0, _parse.parse_phone_number_and_country_phone_code)(this.parsed_input, metadata),
				    country_phone_code = _parse_phone_number_a.country_phone_code,
				    number = _parse_phone_number_a.number;

				if (!country_phone_code) {
					return;
				}

				this.country_phone_code = country_phone_code;
				this.national_number = number;

				return this.country_metadata = (0, _metadata.get_metadata_by_country_phone_code)(country_phone_code, metadata);
			}
		}, {
			key: 'extract_national_prefix',
			value: function extract_national_prefix() {
				this.national_prefix = '';

				if (!this.country_metadata) {
					return;
				}

				var national_prefix_for_parsing = (0, _metadata.get_national_prefix_for_parsing)(this.country_metadata);

				if (!national_prefix_for_parsing) {
					return;
				}

				var matches = this.national_number.match(new RegExp('^(?:' + national_prefix_for_parsing + ')'));

				if (!matches || !matches[0]) {
					return;
				}

				var national_number_starts_at = matches[0].length;

				this.national_prefix = this.national_number.slice(0, national_number_starts_at);
				this.national_number = this.national_number.slice(national_number_starts_at);

				return this.national_prefix;
			}
		}, {
			key: 'choose_another_format',
			value: function choose_another_format() {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = (0, _getIterator3.default)(this.get_relevant_phone_number_formats()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var format = _step2.value;

						if (this.chosen_format === format) {
							return;
						}

						if (!this.validate_format(format)) {
							continue;
						}

						if (!this.create_formatting_template(format)) {
							continue;
						}

						this.chosen_format = format;

						this.last_match_position = -1;

						return true;
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

				this.reset_country();

				this.reset_format();
			}
		}, {
			key: 'validate_format',
			value: function validate_format(format) {
				if (!this.is_international() && !this.national_prefix && (0, _metadata.get_format_national_prefix_is_mandatory_when_formatting)(format, this.country_metadata)) {
					return;
				}

				return true;
			}
		}, {
			key: 'create_formatting_template',
			value: function create_formatting_template(format) {
				if ((0, _metadata.get_format_pattern)(format).indexOf('|') >= 0) {
					return;
				}

				var national_prefix_formatting_rule = (0, _metadata.get_format_national_prefix_formatting_rule)(format, this.country_metadata);

				var number_pattern = (0, _metadata.get_format_pattern)(format).replace(CHARACTER_CLASS_PATTERN, '\\d').replace(STANDALONE_DIGIT_PATTERN, '\\d');

				var dummy_phone_number_matching_format_pattern = LONGEST_DUMMY_PHONE_NUMBER.match(number_pattern)[0];

				if (this.national_number.length > dummy_phone_number_matching_format_pattern.length) {
					return;
				}

				var number_format = this.get_format_format(format);

				if (this.national_prefix) {
					var _national_prefix_formatting_rule = (0, _metadata.get_format_national_prefix_formatting_rule)(format, this.country_metadata);

					if (_national_prefix_formatting_rule) {
						number_format = number_format.replace(_format.FIRST_GROUP_PATTERN, _national_prefix_formatting_rule);
					}
				}

				var template = dummy_phone_number_matching_format_pattern.replace(new RegExp(number_pattern, 'g'), number_format).replace(DUMMY_DIGIT_MATCHER, DIGIT_PLACEHOLDER);

				this.partially_populated_template = template;

				if (this.is_international()) {
					template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.country_phone_code.length) + ' ' + template;
				} else {
						template = template.replace(/\d/g, DIGIT_PLACEHOLDER);
					}

				return this.template = template;
			}
		}, {
			key: 'format_next_national_number_digits',
			value: function format_next_national_number_digits(digits) {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = (0, _getIterator3.default)(digits), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var digit = _step3.value;

						if (this.partially_populated_template.slice(this.last_match_position + 1).search(DIGIT_PLACEHOLDER_MATCHER) === -1) {
							this.chosen_format = undefined;
							this.template = undefined;
							this.partially_populated_template = undefined;
							return;
						}

						this.last_match_position = this.partially_populated_template.search(DIGIT_PLACEHOLDER_MATCHER);
						this.partially_populated_template = this.partially_populated_template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				return close_dangling_braces(this.partially_populated_template, this.last_match_position + 1).replace(DIGIT_PLACEHOLDER_MATCHER_GLOBAL, ' ');
			}
		}, {
			key: 'is_international',
			value: function is_international() {
				return this.parsed_input && this.parsed_input[0] === '+';
			}
		}, {
			key: 'get_format_format',
			value: function get_format_format(format) {
				if (this.is_international()) {
					return (0, _format.local_to_international_style)((0, _metadata.get_format_international_format)(format));
				}

				return (0, _metadata.get_format_format)(format);
			}

		}, {
			key: 'determine_the_country',
			value: function determine_the_country() {
				this.country = (0, _parse.find_country_code)(this.country_phone_code, this.national_number, metadata);
			}
		}]);
		return as_you_type;
	}();

	as_you_type.DIGIT_PLACEHOLDER = DIGIT_PLACEHOLDER;

	return as_you_type;
};

exports.close_dangling_braces = close_dangling_braces;
exports.count_occurences = count_occurences;
exports.repeat = repeat;

var _metadata = require('./metadata');

var _parse = require('./parse');

var _format = require('./format');

var _common = require('./common');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var DUMMY_DIGIT = '9';
var DUMMY_DIGIT_MATCHER = new RegExp(DUMMY_DIGIT, 'g');

var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15;

var LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH);

var DIGIT_PLACEHOLDER = 'x';
var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER);
var DIGIT_PLACEHOLDER_MATCHER_GLOBAL = new RegExp(DIGIT_PLACEHOLDER, 'g');

var CHARACTER_CLASS_PATTERN = /\[([^\[\]])*\]/g;

var STANDALONE_DIGIT_PATTERN = /\d(?=[^,}][^,}])/g;

var ELIGIBLE_FORMAT_PATTERN = new RegExp('^' + '[' + _parse.VALID_PUNCTUATION + ']*' + '(\\$\\d[' + _parse.VALID_PUNCTUATION + ']*)+' + '$');

var MIN_LEADING_DIGITS_LENGTH = 3;

var VALID_INCOMPLETE_PHONE_NUMBER = '[' + _parse.PLUS_CHARS + ']{0,1}' + '[' + _parse.VALID_PUNCTUATION + _parse.VALID_DIGITS + ']*';

var VALID_INCOMPLETE_PHONE_NUMBER_PATTERN = new RegExp('^' + VALID_INCOMPLETE_PHONE_NUMBER + '$', 'i');

function close_dangling_braces(template, cut_before) {
	var retained_template = template.slice(0, cut_before);

	var opening_braces = count_occurences('(', retained_template);
	var closing_braces = count_occurences(')', retained_template);

	var dangling_braces = opening_braces - closing_braces;

	while (dangling_braces > 0 && cut_before < template.length) {
		if (template[cut_before] === ')') {
			dangling_braces--;
		}
		cut_before++;
	}

	return template.slice(0, cut_before);
}

function count_occurences(symbol, string) {
	var count = 0;

	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = (0, _getIterator3.default)(string), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var character = _step4.value;

			if (character === symbol) {
				count++;
			}
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	return count;
}

function repeat(string, times) {
	if (times < 1) {
		return '';
	}

	var result = '';

	while (times > 1) {
		if (times & 1) {
			result += string;
		}

		times >>= 1;
		string += string;
	}

	return result + string;
}