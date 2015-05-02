// Generated by psc-make version 0.6.8

/**
 *  | Wraps the functions of Javascript's `String` object.
 *  | A String represents a sequence of characters.
 *  | For details of the underlying implementation, see [String Reference at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).
 */
"use strict";
var Data_Function = require("Data.Function");
var Data_Char = require("Data.Char");
var Prelude = require("Prelude");
var Data_String_Unsafe = require("Data.String.Unsafe");
var Data_Maybe = require("Data.Maybe");

    function _charAt(i, s, Just, Nothing) {
      return i >= 0 && i < s.length ? Just(s.charAt(i)) : Nothing;
    }
    ;

    function _charCodeAt(i, s, Just, Nothing) {
      return i >= 0 && i < s.length ? Just(s.charCodeAt(i)) : Nothing;
    }
    ;

    function fromCharArray(a) {
      return a.join('');
    }
    ;

    function indexOf(x) {
      return function(s) {
        return s.indexOf(x);
      };
    }
    ;

    function indexOf$prime(x) {
      return function(startAt) {
        return function(s) {
          return s.indexOf(x, startAt);
        };
      };
    }
    ;

    function lastIndexOf(x) {
      return function(s) {
        return s.lastIndexOf(x);
      };
    }
    ;

    function lastIndexOf$prime(x) {
      return function(startAt) {
        return function(s) {
          return s.lastIndexOf(x, startAt);
        };
      };
    }
    ;

    function length(s) {
      return s.length;
    }
    ;

    function localeCompare(s1) {
      return function(s2) {
        return s1.localeCompare(s2);
      };
    }
    ;

    function replace(s1) {
      return function(s2) {
        return function(s3) {
          return s3.replace(s1, s2);
        };
      };
    }
    ;

    function take(n) {
      return function(s) {
        return s.substr(0, n);
      };
    }
    ;

    function drop(n) {
      return function(s) {
        return s.substr(n);
      };
    }
    ;

    function count(p){
      return function(s){
        var i;
        for(i = 0; i < s.length && p(s.charAt(i)); i++){};
        return i;
      };
    }
    ;

    function split(sep) {
      return function(s) {
        return s.split(sep);
      };
    }
    ;

    function toCharArray(s) {
      return s.split('');
    }
    ;

    function toLower(s) {
      return s.toLowerCase();
    }
    ;

    function toUpper(s) {
      return s.toUpperCase();
    }
    ;

    function trim(s) {
      return s.trim();
    }
    ;

    function joinWith(s) {
      return function(xs) {
        return xs.join(s);
      };
    }
    ;

/**
 *  | Returns the longest prefix (possibly empty) of characters that satisfy
 *  | the predicate:
 */
var takeWhile = function (p) {
    return function (s) {
        return take(count(p)(s))(s);
    };
};

/**
 *  | Returns `true` if the given string is empty.
 */
var $$null = function (s) {
    return length(s) === 0;
};

/**
 *  | Returns the first character and the rest of the string,
 *  | if the string is not empty.
 */
var uncons = function (_510) {
    if ($$null(_510)) {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just({
        head: Data_String_Unsafe.charAt(0)(_510), 
        tail: drop(1)(_510)
    });
};

/**
 *  | Returns a string of length `1` containing the given character.
 */
var fromChar = Data_Char.charString;

/**
 *  | Returns a string of length `1` containing the given character.
 *  | Same as `fromChar`.
 */
var singleton = fromChar;

/**
 *  | Returns the suffix remaining after `takeWhile`.
 */
var dropWhile = function (p) {
    return function (s) {
        return drop(count(p)(s))(s);
    };
};

/**
 *  | Returns the numeric Unicode value of the character at the given index,
 *  | if the index is within bounds.
 */
var charCodeAt = function (n) {
    return function (s) {
        return _charCodeAt(n, s, Data_Maybe.Just.create, Data_Maybe.Nothing.value);
    };
};

/**
 *  | Returns the character at the given index, if the index is within bounds.
 */
var charAt = function (n) {
    return function (s) {
        return _charAt(n, s, Data_Maybe.Just.create, Data_Maybe.Nothing.value);
    };
};
module.exports = {
    joinWith: joinWith, 
    trim: trim, 
    toUpper: toUpper, 
    toLower: toLower, 
    toCharArray: toCharArray, 
    split: split, 
    dropWhile: dropWhile, 
    drop: drop, 
    takeWhile: takeWhile, 
    take: take, 
    count: count, 
    replace: replace, 
    localeCompare: localeCompare, 
    singleton: singleton, 
    length: length, 
    uncons: uncons, 
    "null": $$null, 
    "lastIndexOf'": lastIndexOf$prime, 
    lastIndexOf: lastIndexOf, 
    "indexOf'": indexOf$prime, 
    indexOf: indexOf, 
    fromChar: fromChar, 
    fromCharArray: fromCharArray, 
    charCodeAt: charCodeAt, 
    charAt: charAt
};
