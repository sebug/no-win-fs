// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");
var MimeType = function (x) {
    return x;
};
var showMimeType = new Prelude.Show(function (_11) {
    return "(MimeType " + (Prelude.show(Prelude.showString)(_11) + ")");
});
var mimeTypeToString = function (_6) {
    return _6;
};
var eqMimeType = new Prelude.Eq(function (_9) {
    return function (_10) {
        return _9 !== _10;
    };
}, function (_7) {
    return function (_8) {
        return _7 === _8;
    };
});
module.exports = {
    MimeType: MimeType, 
    mimeTypeToString: mimeTypeToString, 
    eqMimeType: eqMimeType, 
    showMimeType: showMimeType
};