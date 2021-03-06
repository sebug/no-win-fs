// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");
var DOM = require("DOM");
var DOM_File = require("DOM.File");
var DOM_XHR = require("DOM.XHR");
var Data_ArrayBuffer_Types = require("Data.ArrayBuffer.Types");

  function unsafeConversion (x) {
    return x;
  }
  ;

/**
 *  | A class for types that can be converted to values that can be sent with
 *  | XHR requests.
 */
var Requestable = function (toRequest) {
    this.toRequest = toRequest;
};

/**
 *  | A class for types that can be converted to values that can be sent with
 *  | XHR requests.
 */
var toRequest = function (dict) {
    return dict.toRequest;
};
var requestableUnit = new Requestable(unsafeConversion);
var requestableUint8ClampedArray = new Requestable(unsafeConversion);
var requestableUint8Array = new Requestable(unsafeConversion);
var requestableUint32Array = new Requestable(unsafeConversion);
var requestableUint16Array = new Requestable(unsafeConversion);
var requestableString = new Requestable(unsafeConversion);
var requestableRequestContent = new Requestable(Prelude.id(Prelude.categoryArr));
var requestableInt8Array = new Requestable(unsafeConversion);
var requestableInt32Array = new Requestable(unsafeConversion);
var requestableInt16Array = new Requestable(unsafeConversion);
var requestableFormData = new Requestable(unsafeConversion);
var requestableFloat64Array = new Requestable(unsafeConversion);
var requestableFloat32Array = new Requestable(unsafeConversion);
var requestableDocument = new Requestable(unsafeConversion);
var requestableBlob = new Requestable(unsafeConversion);
module.exports = {
    Requestable: Requestable, 
    toRequest: toRequest, 
    requestableRequestContent: requestableRequestContent, 
    requestableInt8Array: requestableInt8Array, 
    requestableInt16Array: requestableInt16Array, 
    requestableInt32Array: requestableInt32Array, 
    requestableUint8Array: requestableUint8Array, 
    requestableUint16Array: requestableUint16Array, 
    requestableUint32Array: requestableUint32Array, 
    requestableUint8ClampedArray: requestableUint8ClampedArray, 
    requestableFloat32Array: requestableFloat32Array, 
    requestableFloat64Array: requestableFloat64Array, 
    requestableBlob: requestableBlob, 
    requestableDocument: requestableDocument, 
    requestableString: requestableString, 
    requestableFormData: requestableFormData, 
    requestableUnit: requestableUnit
};
