// Generated by psc-make version 0.6.8
"use strict";
var Data_Exists = require("Data.Exists");
var Prelude = require("Prelude");
var Halogen_HTML_Attributes = require("Halogen.HTML.Attributes");
var Halogen_HTML = require("Halogen.HTML");
var Data_String = require("Data.String");
var Data_Array = require("Data.Array");
var Data_Foldable = require("Data.Foldable");
var Data_Maybe = require("Data.Maybe");
var Data_Function = require("Data.Function");
var Data_Monoid = require("Data.Monoid");
var Data_Void = require("Data.Void");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Control_Monad_Eff_Unsafe = require("Control.Monad.Eff.Unsafe");
var Halogen_HTML_Events_Types = require("Halogen.HTML.Events.Types");
var renderAttr = function (_952) {
    if (_952 instanceof Halogen_HTML_Attributes.Attr) {
        return Data_Exists.runExists(function (_951) {
            return Data_Maybe.Just.create(Halogen_HTML_Attributes.runAttributeName(_951.value1) + ("=\"" + (_951.value0(_951.value1)(_951.value2) + "\"")));
        })(_952.value0);
    };
    return Data_Maybe.Nothing.value;
};

/**
 *  | Render a HTML document as a `String`, usually for testing purposes.
 */
var renderHTMLToString = function (_953) {
    if (_953 instanceof Halogen_HTML.Text) {
        return _953.value0;
    };
    if (_953 instanceof Halogen_HTML.Element) {
        return "<" + (Halogen_HTML.runTagName(_953.value0) + (" " + (Data_String.joinWith(" ")(Data_Array.mapMaybe(renderAttr)(_953.value1)) + (">" + (Data_Foldable.foldMap(Data_Foldable.foldableArray)(Data_Monoid.monoidString)(renderHTMLToString)(_953.value2) + ("</" + (Halogen_HTML.runTagName(_953.value0) + ">")))))));
    };
    throw new Error("Failed pattern match");
};
module.exports = {
    renderHTMLToString: renderHTMLToString
};
