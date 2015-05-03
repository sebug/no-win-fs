// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");
var DELETE = (function () {
    function DELETE() {

    };
    DELETE.value = new DELETE();
    return DELETE;
})();
var GET = (function () {
    function GET() {

    };
    GET.value = new GET();
    return GET;
})();
var HEAD = (function () {
    function HEAD() {

    };
    HEAD.value = new HEAD();
    return HEAD;
})();
var OPTIONS = (function () {
    function OPTIONS() {

    };
    OPTIONS.value = new OPTIONS();
    return OPTIONS;
})();
var PATCH = (function () {
    function PATCH() {

    };
    PATCH.value = new PATCH();
    return PATCH;
})();
var POST = (function () {
    function POST() {

    };
    POST.value = new POST();
    return POST;
})();
var PUT = (function () {
    function PUT() {

    };
    PUT.value = new PUT();
    return PUT;
})();
var MOVE = (function () {
    function MOVE() {

    };
    MOVE.value = new MOVE();
    return MOVE;
})();
var COPY = (function () {
    function COPY() {

    };
    COPY.value = new COPY();
    return COPY;
})();
var CustomMethod = (function () {
    function CustomMethod(value0) {
        this.value0 = value0;
    };
    CustomMethod.create = function (value0) {
        return new CustomMethod(value0);
    };
    return CustomMethod;
})();
var showMethod = new Prelude.Show(function (_20) {
    if (_20 instanceof DELETE) {
        return "DELETE";
    };
    if (_20 instanceof GET) {
        return "GET";
    };
    if (_20 instanceof HEAD) {
        return "HEAD";
    };
    if (_20 instanceof OPTIONS) {
        return "OPTIONS";
    };
    if (_20 instanceof PATCH) {
        return "PATCH";
    };
    if (_20 instanceof POST) {
        return "POST";
    };
    if (_20 instanceof PUT) {
        return "PUT";
    };
    if (_20 instanceof MOVE) {
        return "MOVE";
    };
    if (_20 instanceof COPY) {
        return "COPY";
    };
    if (_20 instanceof CustomMethod) {
        return "(CustomMethod " + (Prelude.show(Prelude.showString)(_20.value0) + ")");
    };
    throw new Error("Failed pattern match");
});
var methodToString = function (_17) {
    if (_17 instanceof CustomMethod) {
        return _17.value0;
    };
    return Prelude.show(showMethod)(_17);
};
var eqMethod = new Prelude.Eq(function (x) {
    return function (y) {
        return !Prelude["=="](eqMethod)(x)(y);
    };
}, function (_18) {
    return function (_19) {
        if (_18 instanceof DELETE && _19 instanceof DELETE) {
            return true;
        };
        if (_18 instanceof GET && _19 instanceof GET) {
            return true;
        };
        if (_18 instanceof HEAD && _19 instanceof HEAD) {
            return true;
        };
        if (_18 instanceof OPTIONS && _19 instanceof OPTIONS) {
            return true;
        };
        if (_18 instanceof PATCH && _19 instanceof PATCH) {
            return true;
        };
        if (_18 instanceof POST && _19 instanceof POST) {
            return true;
        };
        if (_18 instanceof PUT && _19 instanceof PUT) {
            return true;
        };
        if (_18 instanceof MOVE && _19 instanceof MOVE) {
            return true;
        };
        if (_18 instanceof COPY && _19 instanceof COPY) {
            return true;
        };
        return false;
    };
});
module.exports = {
    DELETE: DELETE, 
    GET: GET, 
    HEAD: HEAD, 
    OPTIONS: OPTIONS, 
    PATCH: PATCH, 
    POST: POST, 
    PUT: PUT, 
    MOVE: MOVE, 
    COPY: COPY, 
    CustomMethod: CustomMethod, 
    methodToString: methodToString, 
    eqMethod: eqMethod, 
    showMethod: showMethod
};
