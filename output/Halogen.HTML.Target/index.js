// Generated by psc-make version 0.6.8

/**
 *  | This module defines a type of _link targets_, which can be used as the target of a hyperlink or button.
 *  |
 *  | This type is quite useful when defining reusable components.
 */
"use strict";
var Halogen_HTML_Attributes = require("Halogen.HTML.Attributes");
var Halogen_HTML_Events = require("Halogen.HTML.Events");
var Control_Functor = require("Control.Functor");
var Halogen_HTML_Events_Handler = require("Halogen.HTML.Events.Handler");
var Prelude = require("Prelude");
var Control_Alt = require("Control.Alt");
var Halogen_HTML = require("Halogen.HTML");

/**
 *  | A type-safe wrapper for a URL
 */
var URL = (function () {
    function URL(value0) {
        this.value0 = value0;
    };
    URL.create = function (value0) {
        return new URL(value0);
    };
    return URL;
})();

/**
 *  | There are two types of target:
 *  |
 *  | - `LinkTarget` creates a target which links to a URL.
 *  | - `DataTarget` creates a target which carries data which may be used to generate inputs or requests.
 */
var LinkTarget = (function () {
    function LinkTarget(value0) {
        this.value0 = value0;
    };
    LinkTarget.create = function (value0) {
        return new LinkTarget(value0);
    };
    return LinkTarget;
})();

/**
 *  | There are two types of target:
 *  |
 *  | - `LinkTarget` creates a target which links to a URL.
 *  | - `DataTarget` creates a target which carries data which may be used to generate inputs or requests.
 */
var DataTarget = (function () {
    function DataTarget(value0) {
        this.value0 = value0;
    };
    DataTarget.create = function (value0) {
        return new DataTarget(value0);
    };
    return DataTarget;
})();

/**
 *  | Create a `URL`
 */
var url = URL.create;

/**
 *  | Unwrap a URL
 */
var runURL = function (_999) {
    return _999.value0;
};

/**
 *  | Attach a `Target` to an element using the `href` or `onclick` attribute as appropriate
 */
var target = function (_1000) {
    if (_1000 instanceof LinkTarget) {
        return [ Halogen_HTML_Attributes.href(runURL(_1000.value0)) ];
    };
    if (_1000 instanceof DataTarget) {
        return [ Halogen_HTML_Attributes.href("#"), Halogen_HTML_Events.onClick(function (_998) {
            return Control_Functor["$>"](Halogen_HTML_Events_Handler.functorEventHandler)(Halogen_HTML_Events_Handler.preventDefault)(_1000.value0);
        }) ];
    };
    throw new Error("Failed pattern match");
};
module.exports = {
    LinkTarget: LinkTarget, 
    DataTarget: DataTarget, 
    target: target, 
    runURL: runURL, 
    url: url
};
