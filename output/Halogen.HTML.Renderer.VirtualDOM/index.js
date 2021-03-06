// Generated by psc-make version 0.6.8
"use strict";
var Data_Exists = require("Data.Exists");
var Data_Function = require("Data.Function");
var Halogen_Internal_VirtualDOM = require("Halogen.Internal.VirtualDOM");
var Halogen_HTML_Attributes = require("Halogen.HTML.Attributes");
var Prelude = require("Prelude");
var Control_Monad_Eff_Unsafe = require("Control.Monad.Eff.Unsafe");
var Halogen_HTML_Events_Handler = require("Halogen.HTML.Events.Handler");
var Halogen_HTML = require("Halogen.HTML");
var Data_Foldable = require("Data.Foldable");
var Data_Array = require("Data.Array");
var Data_Monoid = require("Data.Monoid");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Halogen_HTML_Events_Types = require("Halogen.HTML.Events.Types");
var renderAttr = function (_956) {
    return function (_957) {
        if (_957 instanceof Halogen_HTML_Attributes.Attr) {
            return Data_Exists.runExists(function (_954) {
                return Halogen_Internal_VirtualDOM.prop(Halogen_HTML_Attributes.runAttributeName(_954.value1), _954.value2);
            })(_957.value0);
        };
        if (_957 instanceof Halogen_HTML_Attributes.Handler) {
            return Halogen_HTML_Attributes.runExistsR(function (_955) {
                return Halogen_Internal_VirtualDOM.handlerProp(Halogen_HTML_Attributes.runEventName(_955.value0), function (ev) {
                    return function __do() {
                        var _52 = Control_Monad_Eff_Unsafe.unsafeInterleaveEff(Halogen_HTML_Events_Handler.runEventHandler(ev)(_955.value1(ev)))();
                        return _956(_52)();
                    };
                });
            })(_957.value0);
        };
        if (_957 instanceof Halogen_HTML_Attributes.Initializer) {
            return Halogen_Internal_VirtualDOM.initProp(_956(_957.value0));
        };
        if (_957 instanceof Halogen_HTML_Attributes.Finalizer) {
            return Halogen_Internal_VirtualDOM.finalizerProp(_956(_957.value0));
        };
        throw new Error("Failed pattern match");
    };
};

/**
 *  | Render a `HTML` document to a virtual DOM node
 *  |
 *  | The first argument is an event handler.
 *  | The second argument is used to replace placeholder nodes.
 */
var renderHTML = function (f) {
    return function (g) {
        var go = function (_958) {
            if (_958 instanceof Halogen_HTML.Text) {
                return Halogen_Internal_VirtualDOM.vtext(_958.value0);
            };
            if (_958 instanceof Halogen_HTML.Placeholder) {
                return Halogen_Internal_VirtualDOM.vwidget(f)(g(_958.value0));
            };
            if (_958 instanceof Halogen_HTML.Element) {
                return Halogen_Internal_VirtualDOM.vnode(Halogen_HTML.runTagName(_958.value0))(Data_Foldable.foldMap(Data_Foldable.foldableArray)(Halogen_Internal_VirtualDOM.monoidProps)(renderAttr(f))(_958.value1))(Data_Array.map(go)(_958.value2));
            };
            throw new Error("Failed pattern match");
        };
        return go;
    };
};
module.exports = {
    renderHTML: renderHTML
};
