
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ImageResizeMode = require('ImageResizeMode');
var LayoutPropTypes = require('LayoutPropTypes');
var ColorPropType = require('ColorPropType');
var ShadowPropTypesIOS = require('ShadowPropTypesIOS');
var TransformPropTypes = require('TransformPropTypes');

var ReactPropTypes = require('React').PropTypes;

var ImageStylePropTypes = _extends({}, LayoutPropTypes, ShadowPropTypesIOS, TransformPropTypes, {
  resizeMode: ReactPropTypes.oneOf(Object.keys(ImageResizeMode)),
  backfaceVisibility: ReactPropTypes.oneOf(['visible', 'hidden']),
  backgroundColor: ColorPropType,
  borderColor: ColorPropType,
  borderWidth: ReactPropTypes.number,
  borderRadius: ReactPropTypes.number,
  overflow: ReactPropTypes.oneOf(['visible', 'hidden']),

  tintColor: ColorPropType,
  opacity: ReactPropTypes.number,

  overlayColor: ReactPropTypes.string,

  borderTopLeftRadius: ReactPropTypes.number,
  borderTopRightRadius: ReactPropTypes.number,
  borderBottomLeftRadius: ReactPropTypes.number,
  borderBottomRightRadius: ReactPropTypes.number
});

module.exports = ImageStylePropTypes;