// Generated by psc-make version 0.6.8

/**
 *  | Unsafe string and character functions.
 */
"use strict";
var Prelude = require("Prelude");
var Data_Char = require("Data.Char");

    function charCodeAt(i) {
      return function(s) {
        if (s.length <= i) {
          throw new Error("Data.String.Unsafe.charCodeAt: Invalid index.");
        };
        return s.charCodeAt(i);
      };
    }
    ;

    function charAt(i) {
      return function(s) {
        if (s.length <= i) {
          throw new Error("Data.String.Unsafe.charAt: Invalid index.");
        };
        return s.charAt(i);
      };
    }
    ;

    function $$char(s) {
      if (s.length != 1) {
        throw new Error("Data.String.Unsafe.char: Expected string of length 1.");
      };
      return s.charAt(0);
    }
    ;
module.exports = {
    charCodeAt: charCodeAt, 
    charAt: charAt, 
    "char": $$char
};
