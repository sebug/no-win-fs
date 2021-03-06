// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");
var DOM = require("DOM");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Data_DOM_Simple_Types = require("Data.DOM.Simple.Types");

function unsafeNodeListLength(nl) {
  return function () {
    return nl.length;
  }
};

function unsafeNodeListItem(idx) {
  return function (nl) {
    return function () {
      return nl.item(idx);
    }
  }
};

function unsafeNodeListToArray(nl) {
  return function () {
    return Array.prototype.slice.call(nl);
  };
};
module.exports = {
    unsafeNodeListToArray: unsafeNodeListToArray, 
    unsafeNodeListItem: unsafeNodeListItem, 
    unsafeNodeListLength: unsafeNodeListLength
};
