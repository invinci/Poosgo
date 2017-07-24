
if (!String.prototype.codePointAt) {
	(function () {
		'use strict';

		var defineProperty = function () {
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch (error) {}
			return result;
		}();
		var codePointAt = function codePointAt(position) {
			if (this == null) {
				throw TypeError();
			}
			var string = String(this);
			var size = string.length;

			var index = position ? Number(position) : 0;
			if (index != index) {
				index = 0;
			}

			if (index < 0 || index >= size) {
				return undefined;
			}

			var first = string.charCodeAt(index);
			var second;
			if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
					second = string.charCodeAt(index + 1);
					if (second >= 0xDC00 && second <= 0xDFFF) {
						return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
					}
				}
			return first;
		};
		if (defineProperty) {
			defineProperty(String.prototype, 'codePointAt', {
				'value': codePointAt,
				'configurable': true,
				'writable': true
			});
		} else {
			String.prototype.codePointAt = codePointAt;
		}
	})();
}