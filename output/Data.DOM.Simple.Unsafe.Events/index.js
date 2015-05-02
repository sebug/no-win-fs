// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");
var DOM = require("DOM");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Data_DOM_Simple_Types = require("Data.DOM.Simple.Types");

  function unsafeAddEventListener(targ) {
    return function (cb) {
       return function (src) {
         return function () {
           src.addEventListener(targ, function(evt) {
             cb(evt)();
           });
         };
       };
    };
  };

  function unsafeRemoveEventListener(targ) {
    return function (cb) {
       return function (src) {
         return function () {
           src.removeEventListener(targ, function (evt) {
             cb(evt)();
           });
         };
       };
    };
  };

  function unsafeEventTarget(event) {
    return function () {
      return event.target;
    };
  };

  function unsafeStopPropagation(event) {
    return function () {
      event.stopPropagation();
    };
  };

  function unsafePreventDefault(event) {
    return function () {
      event.preventDefault();
    };
  };

  function unsafeEventKey(event) {
    return function() {
      return event.key === undefined
         ? String.fromCharCode(event.keyCode)
         : event.key;
    };
  };

  function unsafeEventKeyCode(event) {
    return function() {
      return event.keyCode;
    };
  };

  function unsafeEventNumberProp(prop) {
    return function (event) {
      return function() {
        return event[prop];
      };
    };
  };

  function unsafeEventStringProp(prop) {
    return function (event) {
      return function() {
        return event[prop];
      };
    };
  };

  function unsafeEventBooleanProp(prop) {
    return function (event) {
      return function() {
        return !!event[prop];
      };
    };
  };

  function unsafeEventView(event) {
    return function() {
      return event.view;
    };
  };
module.exports = {
    unsafeEventView: unsafeEventView, 
    unsafeEventBooleanProp: unsafeEventBooleanProp, 
    unsafeEventStringProp: unsafeEventStringProp, 
    unsafeEventNumberProp: unsafeEventNumberProp, 
    unsafeEventKeyCode: unsafeEventKeyCode, 
    unsafeEventKey: unsafeEventKey, 
    unsafePreventDefault: unsafePreventDefault, 
    unsafeStopPropagation: unsafeStopPropagation, 
    unsafeEventTarget: unsafeEventTarget, 
    unsafeRemoveEventListener: unsafeRemoveEventListener, 
    unsafeAddEventListener: unsafeAddEventListener
};