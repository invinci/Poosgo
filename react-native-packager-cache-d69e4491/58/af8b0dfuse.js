/**
 * @license
 * Fuse - Lightweight fuzzy-search
 *
 * Copyright (c) 2012-2016 Kirollos Risk <kirollos@gmail.com>.
 * All Rights Reserved. Apache Software License 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
;(function (global) {
  'use strict';

  function log() {
    console.log.apply(console, arguments);
  }

  var defaultOptions = {
    id: null,

    caseSensitive: false,

    include: [],

    shouldSort: true,

    searchFn: BitapSearcher,

    sortFn: function sortFn(a, b) {
      return a.score - b.score;
    },

    getFn: deepValue,

    keys: [],

    verbose: false,

    tokenize: false,

    matchAllTokens: false,

    tokenSeparator: / +/g,

    minMatchCharLength: 1,

    findAllMatches: false
  };

  function Fuse(list, options) {
    var key;

    this.list = list;
    this.options = options = options || {};

    for (key in defaultOptions) {
      if (!defaultOptions.hasOwnProperty(key)) {
        continue;
      }

      if (typeof defaultOptions[key] === 'boolean') {
        this.options[key] = key in options ? options[key] : defaultOptions[key];
      } else {
        this.options[key] = options[key] || defaultOptions[key];
      }
    }
  }

  Fuse.VERSION = '2.6.2';

  Fuse.prototype.set = function (list) {
    this.list = list;
    return list;
  };

  Fuse.prototype.search = function (pattern) {
    if (this.options.verbose) log('\nSearch term:', pattern, '\n');

    this.pattern = pattern;
    this.results = [];
    this.resultMap = {};
    this._keyMap = null;

    this._prepareSearchers();
    this._startSearch();
    this._computeScore();
    this._sort();

    var output = this._format();
    return output;
  };

  Fuse.prototype._prepareSearchers = function () {
    var options = this.options;
    var pattern = this.pattern;
    var searchFn = options.searchFn;
    var tokens = pattern.split(options.tokenSeparator);
    var i = 0;
    var len = tokens.length;

    if (this.options.tokenize) {
      this.tokenSearchers = [];
      for (; i < len; i++) {
        this.tokenSearchers.push(new searchFn(tokens[i], options));
      }
    }
    this.fullSeacher = new searchFn(pattern, options);
  };

  Fuse.prototype._startSearch = function () {
    var options = this.options;
    var getFn = options.getFn;
    var list = this.list;
    var listLen = list.length;
    var keys = this.options.keys;
    var keysLen = keys.length;
    var key;
    var weight;
    var item = null;
    var i;
    var j;

    if (typeof list[0] === 'string') {
      for (i = 0; i < listLen; i++) {
        this._analyze('', list[i], i, i);
      }
    } else {
      this._keyMap = {};

      for (i = 0; i < listLen; i++) {
        item = list[i];

        for (j = 0; j < keysLen; j++) {
          key = keys[j];
          if (typeof key !== 'string') {
            weight = 1 - key.weight || 1;
            this._keyMap[key.name] = {
              weight: weight
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            this._keyMap[key] = {
              weight: 1
            };
          }
          this._analyze(key, getFn(item, key, []), item, i);
        }
      }
    }
  };

  Fuse.prototype._analyze = function (key, text, entity, index) {
    var options = this.options;
    var words;
    var scores;
    var exists = false;
    var existingResult;
    var averageScore;
    var finalScore;
    var scoresLen;
    var mainSearchResult;
    var tokenSearcher;
    var termScores;
    var word;
    var tokenSearchResult;
    var hasMatchInText;
    var checkTextMatches;
    var i;
    var j;

    if (text === undefined || text === null) {
      return;
    }

    scores = [];

    var numTextMatches = 0;

    if (typeof text === 'string') {
      words = text.split(options.tokenSeparator);

      if (options.verbose) log('---------\nKey:', key);

      if (this.options.tokenize) {
        for (i = 0; i < this.tokenSearchers.length; i++) {
          tokenSearcher = this.tokenSearchers[i];

          if (options.verbose) log('Pattern:', tokenSearcher.pattern);

          termScores = [];
          hasMatchInText = false;

          for (j = 0; j < words.length; j++) {
            word = words[j];
            tokenSearchResult = tokenSearcher.search(word);
            var obj = {};
            if (tokenSearchResult.isMatch) {
              obj[word] = tokenSearchResult.score;
              exists = true;
              hasMatchInText = true;
              scores.push(tokenSearchResult.score);
            } else {
              obj[word] = 1;
              if (!this.options.matchAllTokens) {
                scores.push(1);
              }
            }
            termScores.push(obj);
          }

          if (hasMatchInText) {
            numTextMatches++;
          }

          if (options.verbose) log('Token scores:', termScores);
        }

        averageScore = scores[0];
        scoresLen = scores.length;
        for (i = 1; i < scoresLen; i++) {
          averageScore += scores[i];
        }
        averageScore = averageScore / scoresLen;

        if (options.verbose) log('Token score average:', averageScore);
      }

      mainSearchResult = this.fullSeacher.search(text);
      if (options.verbose) log('Full text score:', mainSearchResult.score);

      finalScore = mainSearchResult.score;
      if (averageScore !== undefined) {
        finalScore = (finalScore + averageScore) / 2;
      }

      if (options.verbose) log('Score average:', finalScore);

      checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= this.tokenSearchers.length : true;

      if (options.verbose) log('Check Matches', checkTextMatches);

      if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
        existingResult = this.resultMap[index];

        if (existingResult) {
          existingResult.output.push({
            key: key,
            score: finalScore,
            matchedIndices: mainSearchResult.matchedIndices
          });
        } else {
          this.resultMap[index] = {
            item: entity,
            output: [{
              key: key,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            }]
          };

          this.results.push(this.resultMap[index]);
        }
      }
    } else if (isArray(text)) {
      for (i = 0; i < text.length; i++) {
        this._analyze(key, text[i], entity, index);
      }
    }
  };

  Fuse.prototype._computeScore = function () {
    var i;
    var j;
    var keyMap = this._keyMap;
    var totalScore;
    var output;
    var scoreLen;
    var score;
    var weight;
    var results = this.results;
    var bestScore;
    var nScore;

    if (this.options.verbose) log('\n\nComputing score:\n');

    for (i = 0; i < results.length; i++) {
      totalScore = 0;
      output = results[i].output;
      scoreLen = output.length;

      bestScore = 1;

      for (j = 0; j < scoreLen; j++) {
        score = output[j].score;
        weight = keyMap ? keyMap[output[j].key].weight : 1;

        nScore = score * weight;

        if (weight !== 1) {
          bestScore = Math.min(bestScore, nScore);
        } else {
          totalScore += nScore;
          output[j].nScore = nScore;
        }
      }

      if (bestScore === 1) {
        results[i].score = totalScore / scoreLen;
      } else {
        results[i].score = bestScore;
      }

      if (this.options.verbose) log(results[i]);
    }
  };

  Fuse.prototype._sort = function () {
    var options = this.options;
    if (options.shouldSort) {
      if (options.verbose) log('\n\nSorting....');
      this.results.sort(options.sortFn);
    }
  };

  Fuse.prototype._format = function () {
    var options = this.options;
    var getFn = options.getFn;
    var finalOutput = [];
    var item;
    var i;
    var len;
    var results = this.results;
    var replaceValue;
    var getItemAtIndex;
    var include = options.include;

    if (options.verbose) log('\n\nOutput:\n\n', results);

    replaceValue = options.id ? function (index) {
      results[index].item = getFn(results[index].item, options.id, [])[0];
    } : function () {};

    getItemAtIndex = function getItemAtIndex(index) {
      var record = results[index];
      var data;
      var j;
      var output;
      var _item;
      var _result;

      if (include.length > 0) {
        data = {
          item: record.item
        };
        if (include.indexOf('matches') !== -1) {
          output = record.output;
          data.matches = [];
          for (j = 0; j < output.length; j++) {
            _item = output[j];
            _result = {
              indices: _item.matchedIndices
            };
            if (_item.key) {
              _result.key = _item.key;
            }
            data.matches.push(_result);
          }
        }

        if (include.indexOf('score') !== -1) {
          data.score = results[index].score;
        }
      } else {
        data = record.item;
      }

      return data;
    };

    for (i = 0, len = results.length; i < len; i++) {
      replaceValue(i);
      item = getItemAtIndex(i);
      finalOutput.push(item);
    }

    return finalOutput;
  };

  function deepValue(obj, path, list) {
    var firstSegment;
    var remaining;
    var dotIndex;
    var value;
    var i;
    var len;

    if (!path) {
      list.push(obj);
    } else {
      dotIndex = path.indexOf('.');

      if (dotIndex !== -1) {
        firstSegment = path.slice(0, dotIndex);
        remaining = path.slice(dotIndex + 1);
      } else {
        firstSegment = path;
      }

      value = obj[firstSegment];
      if (value !== null && value !== undefined) {
        if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
          list.push(value);
        } else if (isArray(value)) {
          for (i = 0, len = value.length; i < len; i++) {
            deepValue(value[i], remaining, list);
          }
        } else if (remaining) {
          deepValue(value, remaining, list);
        }
      }
    }

    return list;
  }

  function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  function BitapSearcher(pattern, options) {
    options = options || {};
    this.options = options;
    this.options.location = options.location || BitapSearcher.defaultOptions.location;
    this.options.distance = 'distance' in options ? options.distance : BitapSearcher.defaultOptions.distance;
    this.options.threshold = 'threshold' in options ? options.threshold : BitapSearcher.defaultOptions.threshold;
    this.options.maxPatternLength = options.maxPatternLength || BitapSearcher.defaultOptions.maxPatternLength;

    this.pattern = options.caseSensitive ? pattern : pattern.toLowerCase();
    this.patternLen = pattern.length;

    if (this.patternLen <= this.options.maxPatternLength) {
      this.matchmask = 1 << this.patternLen - 1;
      this.patternAlphabet = this._calculatePatternAlphabet();
    }
  }

  BitapSearcher.defaultOptions = {
    location: 0,

    distance: 100,

    threshold: 0.6,

    maxPatternLength: 32
  };

  BitapSearcher.prototype._calculatePatternAlphabet = function () {
    var mask = {},
        i = 0;

    for (i = 0; i < this.patternLen; i++) {
      mask[this.pattern.charAt(i)] = 0;
    }

    for (i = 0; i < this.patternLen; i++) {
      mask[this.pattern.charAt(i)] |= 1 << this.pattern.length - i - 1;
    }

    return mask;
  };

  BitapSearcher.prototype._bitapScore = function (errors, location) {
    var accuracy = errors / this.patternLen,
        proximity = Math.abs(this.options.location - location);

    if (!this.options.distance) {
      return proximity ? 1.0 : accuracy;
    }
    return accuracy + proximity / this.options.distance;
  };

  BitapSearcher.prototype.search = function (text) {
    var options = this.options;
    var i;
    var j;
    var textLen;
    var findAllMatches;
    var location;
    var threshold;
    var bestLoc;
    var binMin;
    var binMid;
    var binMax;
    var start, finish;
    var bitArr;
    var lastBitArr;
    var charMatch;
    var score;
    var locations;
    var matches;
    var isMatched;
    var matchMask;
    var matchedIndices;
    var matchesLen;
    var match;

    text = options.caseSensitive ? text : text.toLowerCase();

    if (this.pattern === text) {
      return {
        isMatch: true,
        score: 0,
        matchedIndices: [[0, text.length - 1]]
      };
    }

    if (this.patternLen > options.maxPatternLength) {
      matches = text.match(new RegExp(this.pattern.replace(options.tokenSeparator, '|')));
      isMatched = !!matches;

      if (isMatched) {
        matchedIndices = [];
        for (i = 0, matchesLen = matches.length; i < matchesLen; i++) {
          match = matches[i];
          matchedIndices.push([text.indexOf(match), match.length - 1]);
        }
      }

      return {
        isMatch: isMatched,

        score: isMatched ? 0.5 : 1,
        matchedIndices: matchedIndices
      };
    }

    findAllMatches = options.findAllMatches;

    location = options.location;

    textLen = text.length;

    threshold = options.threshold;

    bestLoc = text.indexOf(this.pattern, location);

    matchMask = [];
    for (i = 0; i < textLen; i++) {
      matchMask[i] = 0;
    }

    if (bestLoc != -1) {
      threshold = Math.min(this._bitapScore(0, bestLoc), threshold);

      bestLoc = text.lastIndexOf(this.pattern, location + this.patternLen);

      if (bestLoc != -1) {
        threshold = Math.min(this._bitapScore(0, bestLoc), threshold);
      }
    }

    bestLoc = -1;
    score = 1;
    locations = [];
    binMax = this.patternLen + textLen;

    for (i = 0; i < this.patternLen; i++) {
      binMin = 0;
      binMid = binMax;
      while (binMin < binMid) {
        if (this._bitapScore(i, location + binMid) <= threshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      }

      binMax = binMid;
      start = Math.max(1, location - binMid + 1);
      if (findAllMatches) {
        finish = textLen;
      } else {
        finish = Math.min(location + binMid, textLen) + this.patternLen;
      }

      bitArr = Array(finish + 2);

      bitArr[finish + 1] = (1 << i) - 1;

      for (j = finish; j >= start; j--) {
        charMatch = this.patternAlphabet[text.charAt(j - 1)];

        if (charMatch) {
          matchMask[j - 1] = 1;
        }

        if (i === 0) {
          bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
        } else {
          bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch | ((lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1) | lastBitArr[j + 1];
        }
        if (bitArr[j] & this.matchmask) {
          score = this._bitapScore(i, j - 1);

          if (score <= threshold) {
            threshold = score;
            bestLoc = j - 1;
            locations.push(bestLoc);

            if (bestLoc > location) {
              start = Math.max(1, 2 * location - bestLoc);
            } else {
              break;
            }
          }
        }
      }

      if (this._bitapScore(i + 1, location) > threshold) {
        break;
      }
      lastBitArr = bitArr;
    }

    matchedIndices = this._getMatchedIndices(matchMask);

    return {
      isMatch: bestLoc >= 0,
      score: score === 0 ? 0.001 : score,
      matchedIndices: matchedIndices
    };
  };

  BitapSearcher.prototype._getMatchedIndices = function (matchMask) {
    var matchedIndices = [];
    var start = -1;
    var end = -1;
    var i = 0;
    var match;
    var len = matchMask.length;
    for (; i < len; i++) {
      match = matchMask[i];
      if (match && start === -1) {
        start = i;
      } else if (!match && start !== -1) {
        end = i - 1;
        if (end - start + 1 >= this.options.minMatchCharLength) {
          matchedIndices.push([start, end]);
        }
        start = -1;
      }
    }
    if (matchMask[i - 1]) {
      if (i - 1 - start + 1 >= this.options.minMatchCharLength) {
        matchedIndices.push([start, i - 1]);
      }
    }
    return matchedIndices;
  };

  if (typeof exports === 'object') {
    module.exports = Fuse;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return Fuse;
    });
  } else {
    global.Fuse = Fuse;
  }
})(this);