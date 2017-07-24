
require('string.prototype.codepointat');

"use strict";

var parser = /:([a-zA-Z0-9_\-\+]+):/g;

var Emoji = module.exports = {
  emoji: require('./emoji.json')
};

Emoji._get = function _get(emoji) {
  if (Emoji.emoji.hasOwnProperty(emoji)) {
    return Emoji.emoji[emoji];
  }
  return ':' + emoji + ':';
};

Emoji.get = function get(emoji) {
  if (emoji.indexOf(':') > -1) {
    emoji = emoji.substr(1, emoji.length - 2);
  }

  return Emoji._get(emoji);
};

Emoji.which = function which(emoji_code) {
  for (var prop in Emoji.emoji) {
    if (Emoji.emoji.hasOwnProperty(prop)) {
      if (Emoji.emoji[prop].codePointAt() === emoji_code.codePointAt()) {
        return prop;
      }
    }
  }
};

Emoji.emojify = function emojify(str, on_missing) {
  return str.split(parser).map(function parseEmoji(s, i) {
    if (i % 2 === 0) return s;
    var emoji = Emoji._get(s);
    if (emoji.indexOf(':') > -1 && typeof on_missing === 'function') {
      return on_missing(emoji.substr(1, emoji.length - 2));
    }
    return emoji;
  }).join('');
};