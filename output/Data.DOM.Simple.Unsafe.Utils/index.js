// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");
var Data_Maybe = require("Data.Maybe");

  function ensure3(nothing) {
    return function(just) {
      return function(v) {
        if (v === undefined || v === null) {
          return nothing;
        } else {
          return just(v);
        }
      };
   };
  };

  function showImpl(v) {
    return function () {
      return v.toString();
    };
  };
var ensure = ensure3(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
module.exports = {
    showImpl: showImpl, 
    ensure: ensure, 
    ensure3: ensure3
};
