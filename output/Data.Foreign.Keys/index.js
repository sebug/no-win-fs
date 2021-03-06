// Generated by psc-make version 0.6.8

/**
 *  | This module provides functions for working with object properties
 *  | of Javascript objects.
 */
"use strict";
var Data_Foreign = require("Data.Foreign");
var Prelude = require("Prelude");
var Data_Either = require("Data.Either");
var Data_Function = require("Data.Function");

  var unsafeKeys = Object.keys || function(value) {
    var keys = [];
    for (var prop in value) {
      if (Object.prototype.hasOwnProperty.call(value, prop)) {
        keys.push(prop);
      }
    }
    return keys;
  };
  ;

/**
 *  | Get an array of the properties defined on a foreign value
 */
var keys = function (_174) {
    if (Data_Foreign.isNull(_174)) {
        return Data_Either.Left.create(new Data_Foreign.TypeMismatch("object", "null"));
    };
    if (Data_Foreign.isUndefined(_174)) {
        return Data_Either.Left.create(new Data_Foreign.TypeMismatch("object", "undefined"));
    };
    if (Data_Foreign.typeOf(_174) === "object") {
        return Data_Either.Right.create(unsafeKeys(_174));
    };
    return Data_Either.Left.create(new Data_Foreign.TypeMismatch("object", Data_Foreign.typeOf(_174)));
};
module.exports = {
    keys: keys
};
