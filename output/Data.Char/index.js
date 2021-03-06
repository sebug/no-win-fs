// Generated by psc-make version 0.6.8

/**
 *  | A type and functions for single characters.
 */
"use strict";
var Prelude = require("Prelude");

    function toCharCode(c) {
      return c.charCodeAt(0);
    }
    ;

    function fromCharCode(c) {
      return String.fromCharCode(c);
    }
    ;

/**
 * | A unicode character.
 */
var Char = function (x) {
    return x;
};

/**
 *  | Characters can be rendered as a string with `show`.
 */
var showChar = new Prelude.Show(function (_77) {
    return "Char " + Prelude.show(Prelude.showString)(_77);
});

/**
 *  | Characters can be compared for equality with `==` and `/=`.
 */
var eqChar = new Prelude.Eq(function (a) {
    return function (b) {
        return !Prelude["=="](eqChar)(a)(b);
    };
}, function (_73) {
    return function (_74) {
        return _73 === _74;
    };
});

/**
 *  | Characters can be compared with `compare`, `>`, `>=`, `<` and `<=`.
 */
var ordChar = new Prelude.Ord(function () {
    return eqChar;
}, function (_75) {
    return function (_76) {
        return Prelude.compare(Prelude.ordString)(_75)(_76);
    };
});

/**
 *  | Returns the string of length `1` containing only the given character.
 */
var charString = function (_72) {
    return _72;
};
module.exports = {
    toCharCode: toCharCode, 
    fromCharCode: fromCharCode, 
    charString: charString, 
    eqChar: eqChar, 
    ordChar: ordChar, 
    showChar: showChar
};
