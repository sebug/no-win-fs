// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");
var DOM = require("DOM");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Data_Function = require("Data.Function");
var Data_DOM_Simple_Types = require("Data.DOM.Simple.Types");

  function unsafeReadyState(obj) {
    return function () {
      return obj.readyState;
    };
  };

  function unsafeOnReadyStateChange(obj, fn) {
    return function () {
      obj.onreadystatechange = fn;
      return {};
    };
  };

  function unsafeOpen(obj, method, url) {
    return function () {
      obj.open(method, url);
      return {};
    };
  };

  function unsafeSend(obj) {
    return function () {
      obj.send();
      return {};
    };
  };

  function unsafeSendWithPayload(obj, payload) {
    return function () {
      obj.send(payload);
      return {};
    };
  };

  function unsafeSetResponseType(obj, rt) {
    return function () {
      obj.responseType = rt;
      return {};
    };
  };

  function unsafeResponseType(obj) {
    return function () {
      return obj.responseType;
    };
  };

  function unsafeResponse(obj) {
    return function () {
      return obj.response;
    };
  };

  function unsafeGetResponseHeader(obj, key) {
    return function () {
      return obj.getResponseHeader(key);
    };
  };
module.exports = {
    unsafeGetResponseHeader: unsafeGetResponseHeader, 
    unsafeResponse: unsafeResponse, 
    unsafeResponseType: unsafeResponseType, 
    unsafeSetResponseType: unsafeSetResponseType, 
    unsafeSendWithPayload: unsafeSendWithPayload, 
    unsafeSend: unsafeSend, 
    unsafeOpen: unsafeOpen, 
    unsafeOnReadyStateChange: unsafeOnReadyStateChange, 
    unsafeReadyState: unsafeReadyState
};
