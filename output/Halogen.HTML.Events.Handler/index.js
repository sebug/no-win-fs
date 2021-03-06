// Generated by psc-make version 0.6.8

/**
 *  | This module defines the `EventHandler` functor, which can be used
 *  | to perform standard operations on HTML events.
 */
"use strict";
var Control_Monad_Writer_Class = require("Control.Monad.Writer.Class");
var Prelude = require("Prelude");
var Control_Monad_Writer = require("Control.Monad.Writer");
var Control_Apply = require("Control.Apply");
var Data_Foldable = require("Data.Foldable");
var DOM = require("DOM");
var Data_Maybe = require("Data.Maybe");
var Data_Tuple = require("Data.Tuple");
var Data_Array = require("Data.Array");
var Control_Plus = require("Control.Plus");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Control_Monad_Writer_Trans = require("Control.Monad.Writer.Trans");
var Halogen_HTML_Events_Types = require("Halogen.HTML.Events.Types");
var Data_Monoid = require("Data.Monoid");
var Data_Identity = require("Data.Identity");
function preventDefaultImpl(e) {  return function() {    e.preventDefault();  };};
function stopPropagationImpl(e) {  return function() {    e.stopPropagation();  };};
function stopImmediatePropagationImpl(e) {  return function() {    e.stopImmediatePropagation();  };};
var PreventDefault = (function () {
    function PreventDefault() {

    };
    PreventDefault.value = new PreventDefault();
    return PreventDefault;
})();
var StopPropagation = (function () {
    function StopPropagation() {

    };
    StopPropagation.value = new StopPropagation();
    return StopPropagation;
})();
var StopImmediatePropagation = (function () {
    function StopImmediatePropagation() {

    };
    StopImmediatePropagation.value = new StopImmediatePropagation();
    return StopImmediatePropagation;
})();

/**
 *  | This monad supports the following operations on events:
 *  |
 *  | - `preventDefault`
 *  | - `stopPropagation`
 *  | - `stopImmediatePropagation`
 *  |
 *  | It can be used as follows:
 *  |
 *  | ```purescript
 *  | import Control.Functor (($>))
 *  |
 *  | H.a (E.onclick \_ -> E.preventDefault $> ClickHandler) (H.text "Click here")
 *  | ```
 */
var EventHandler = function (x) {
    return x;
};
var unEventHandler = function (_919) {
    return _919;
};

/**
 *  | Call the `stopPropagation` method on the current event
 */
var stopPropagation = Control_Monad_Writer_Class.tell(Data_Monoid.monoidArray)(Control_Monad_Writer_Trans.monadWriterT(Data_Monoid.monoidArray)(Data_Identity.monadIdentity))(Control_Monad_Writer_Class.monadWriterWriterT(Data_Monoid.monoidArray)(Data_Identity.monadIdentity))([ StopPropagation.value ]);

/**
 *  | Call the `stopImmediatePropagation` method on the current event
 */
var stopImmediatePropagation = Control_Monad_Writer_Class.tell(Data_Monoid.monoidArray)(Control_Monad_Writer_Trans.monadWriterT(Data_Monoid.monoidArray)(Data_Identity.monadIdentity))(Control_Monad_Writer_Class.monadWriterWriterT(Data_Monoid.monoidArray)(Data_Identity.monadIdentity))([ StopImmediatePropagation.value ]);

/**
 *  | This function can be used to update an event and return the wrapped value
 */
var runEventHandler = function (_920) {
    return function (_921) {
        var applyUpdate = function (_928) {
            if (_928 instanceof PreventDefault) {
                return preventDefaultImpl(_920);
            };
            if (_928 instanceof StopPropagation) {
                return stopPropagationImpl(_920);
            };
            if (_928 instanceof StopImmediatePropagation) {
                return stopImmediatePropagationImpl(_920);
            };
            throw new Error("Failed pattern match");
        };
        var _3150 = Control_Monad_Writer.runWriter(_921);
        return Control_Apply["*>"](Control_Monad_Eff.applyEff)(Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)(_3150.value1)(applyUpdate))(Prelude["return"](Control_Monad_Eff.monadEff)(_3150.value0));
    };
};

/**
 *  | Call the `preventDefault` method on the current event
 */
var preventDefault = Control_Monad_Writer_Class.tell(Data_Monoid.monoidArray)(Control_Monad_Writer_Trans.monadWriterT(Data_Monoid.monoidArray)(Data_Identity.monadIdentity))(Control_Monad_Writer_Class.monadWriterWriterT(Data_Monoid.monoidArray)(Data_Identity.monadIdentity))([ PreventDefault.value ]);
var functorEventHandler = new Prelude.Functor(function (_922) {
    return function (_923) {
        return Prelude["<$>"](Control_Monad_Writer_Trans.functorWriterT(Data_Identity.functorIdentity))(_922)(_923);
    };
});
var applyEventHandler = new Prelude.Apply(function (_924) {
    return function (_925) {
        return Prelude["<*>"](Control_Monad_Writer_Trans.applyWriterT(Data_Monoid.monoidArray)(Data_Identity.applyIdentity))(_924)(_925);
    };
}, function () {
    return functorEventHandler;
});
var bindEventHandler = new Prelude.Bind(function (_926) {
    return function (_927) {
        return Prelude[">>="](Control_Monad_Writer_Trans.bindWriterT(Data_Monoid.monoidArray)(Data_Identity.monadIdentity))(_926)(Prelude["<<<"](Prelude.semigroupoidArr)(unEventHandler)(_927));
    };
}, function () {
    return applyEventHandler;
});
var applicativeEventHandler = new Prelude.Applicative(function () {
    return applyEventHandler;
}, Prelude["<<<"](Prelude.semigroupoidArr)(EventHandler)(Prelude.pure(Control_Monad_Writer_Trans.applicativeWriterT(Data_Monoid.monoidArray)(Data_Identity.applicativeIdentity))));
var monadEventHandler = new Prelude.Monad(function () {
    return applicativeEventHandler;
}, function () {
    return bindEventHandler;
});
module.exports = {
    runEventHandler: runEventHandler, 
    stopImmediatePropagation: stopImmediatePropagation, 
    stopPropagation: stopPropagation, 
    preventDefault: preventDefault, 
    functorEventHandler: functorEventHandler, 
    applyEventHandler: applyEventHandler, 
    applicativeEventHandler: applicativeEventHandler, 
    bindEventHandler: bindEventHandler, 
    monadEventHandler: monadEventHandler
};
