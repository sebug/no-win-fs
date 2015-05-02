// Generated by psc-make version 0.6.8

/**
 *  | This module defines an effect and actions for working with
 *  | global mutable variables.
 *  |
 *  | _Note_: The `Control.Monad.ST` provides a _safe_ alternative
 *  | to global mutable variables when mutation is restricted to a
 *  | local scope.
 */
"use strict";
var Prelude = require("Prelude");
var Control_Monad_Eff = require("Control.Monad.Eff");

  function newRef(val) {
    return function () {
      return { value: val };
    };
  }
;

  function readRef(ref) {
    return function() {
      return ref.value;
    };
  }
;

  function modifyRef$prime(ref) {
    return function(f) {
      return function() {
        var t = f(ref.value);
        ref.value = t.newState;
        return t.retVal;
      };
    };
  }
;

  function writeRef(ref) {
    return function(val) {
      return function() {
        ref.value = val;
        return {};
      };
    };
  }
;

/**
 *  | Update the value of a mutable reference by applying a function
 *  | to the current value.
 */
var modifyRef = function (ref) {
    return function (f) {
        return modifyRef$prime(ref)(function (s) {
            return {
                newState: f(s), 
                retVal: Prelude.unit
            };
        });
    };
};
module.exports = {
    writeRef: writeRef, 
    modifyRef: modifyRef, 
    "modifyRef'": modifyRef$prime, 
    readRef: readRef, 
    newRef: newRef
};
