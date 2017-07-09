Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _ratio = require('./ratio');

exports.default = _reactNative.StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  header: {
    marginTop: _reactNative.Platform.OS === 'ios' ? 16 : 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 48,
    width: (0, _ratio.getWidthPercent)(70)
  },
  inputOnly: {
    marginLeft: (0, _ratio.getWidthPercent)(15)
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    borderWidth: 1 / _reactNative.PixelRatio.get(),
    borderColor: '#eee',
    opacity: 0.8
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / _reactNative.PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  itemCountry: {
    flexDirection: 'row',
    height: (0, _ratio.getHeightPercent)(7),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: (0, _ratio.getHeightPercent)(7),
    width: (0, _ratio.getWidthPercent)(15)
  },
  itemCountryName: {
    justifyContent: 'center',
    width: (0, _ratio.getWidthPercent)(70),
    borderBottomWidth: 2 / _reactNative.PixelRatio.get(),
    borderBottomColor: '#ccc',
    height: (0, _ratio.getHeightPercent)(7)
  },
  countryName: {
    fontSize: (0, _ratio.getHeightPercent)(2.2)
  },
  scrollView: {
    flex: 1
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    height: (0, _ratio.getHeightPercent)(3.3),
    width: (0, _ratio.getWidthPercent)(4),
    justifyContent: 'center',
    alignItems: 'center'
  },
  letterText: {
    textAlign: 'center',
    fontSize: (0, _ratio.getHeightPercent)(2.2)
  }
});