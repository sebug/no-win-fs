// Generated by psc-make version 0.6.8

/**
 *  | This module enumerates some common HTML attributes, and provides additional
 *  | helper functions for working with CSS classes.
 */
"use strict";
var Prelude = require("Prelude");
var Data_Exists = require("Data.Exists");
var Data_String = require("Data.String");
var Data_StrMap = require("Data.StrMap");
var Data_Array = require("Data.Array");
var DOM = require("DOM");
var Data_Maybe = require("Data.Maybe");
var Data_Tuple = require("Data.Tuple");
var Data_Either = require("Data.Either");
var Data_Foreign = require("Data.Foreign");
var Data_Monoid = require("Data.Monoid");
var Data_Traversable = require("Data.Traversable");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Control_Monad_ST = require("Control.Monad.ST");
var Halogen_Internal_VirtualDOM = require("Halogen.Internal.VirtualDOM");
var Halogen_HTML_Events_Types = require("Halogen.HTML.Events.Types");
var Halogen_HTML_Events_Handler = require("Halogen.HTML.Events.Handler");
function unsafeCoerce(x) {  return x;};

/**
 *  | A newtype for CSS styles
 */
var Styles = function (x) {
    return x;
};

/**
 *  | A type-safe wrapper for event names.
 *  |
 *  | The phantom type `fields` describes the event type which we can expect to exist on events
 *  | corresponding to this name.
 */
var EventName = function (x) {
    return x;
};

/**
 *  | The data which represents a typed event handler, hidden inside an existential package in
 *  | the `Attr` type.
 */
var HandlerF = (function () {
    function HandlerF(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    HandlerF.create = function (value0) {
        return function (value1) {
            return new HandlerF(value0, value1);
        };
    };
    return HandlerF;
})();

/**
 *  | A wrapper for strings which are used as CSS classes
 */
var ClassName = function (x) {
    return x;
};

/**
 *  | A type-safe wrapper for attribute names
 *  |
 *  | The phantom type `value` describes the type of value which this attribute requires.
 */
var AttributeName = function (x) {
    return x;
};

/**
 *  | The data which represents a typed attribute, hidden inside an existential package in
 *  | the `Attr` type.
 */
var AttrF = (function () {
    function AttrF(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    AttrF.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new AttrF(value0, value1, value2);
            };
        };
    };
    return AttrF;
})();

/**
 *  | A single attribute is either
 *  |
 *  | - An attribute
 *  | - An event handler
 */
var Attr = (function () {
    function Attr(value0) {
        this.value0 = value0;
    };
    Attr.create = function (value0) {
        return new Attr(value0);
    };
    return Attr;
})();

/**
 *  | A single attribute is either
 *  |
 *  | - An attribute
 *  | - An event handler
 */
var Handler = (function () {
    function Handler(value0) {
        this.value0 = value0;
    };
    Handler.create = function (value0) {
        return new Handler(value0);
    };
    return Handler;
})();

/**
 *  | A single attribute is either
 *  |
 *  | - An attribute
 *  | - An event handler
 */
var Initializer = (function () {
    function Initializer(value0) {
        this.value0 = value0;
    };
    Initializer.create = function (value0) {
        return new Initializer(value0);
    };
    return Initializer;
})();

/**
 *  | A single attribute is either
 *  |
 *  | - An attribute
 *  | - An event handler
 */
var Finalizer = (function () {
    function Finalizer(value0) {
        this.value0 = value0;
    };
    Finalizer.create = function (value0) {
        return new Finalizer(value0);
    };
    return Finalizer;
})();

/**
 *  | This type class captures those types which can be used as attribute values.
 *  |
 *  | `toAttrString` is an alternative to `show`, and is needed by `attr` in the string renderer.
 */
var IsAttribute = function (toAttrString) {
    this.toAttrString = toAttrString;
};

/**
 *  | This type class captures those types which can be used as attribute values.
 *  |
 *  | `toAttrString` is an alternative to `show`, and is needed by `attr` in the string renderer.
 */
var toAttrString = function (dict) {
    return dict.toAttrString;
};

/**
 *  Create CSS styles
 */
var styles = Styles;
var stringIsAttribute = new IsAttribute(function (_937) {
    return function (_938) {
        return _938;
    };
});

/**
 *  | Unpack CSS styles
 */
var runStyles = function (_934) {
    return _934;
};
var runExistsR = unsafeCoerce;

/**
 *  | Unpack an event name
 */
var runEventName = function (_933) {
    return _933;
};

/**
 *  | Unpack a class name
 */
var runClassName = function (_931) {
    return _931;
};

/**
 *  | Unpack an attribute name
 */
var runAttributeName = function (_932) {
    return _932;
};
var numberIsAttribute = new IsAttribute(function (_939) {
    return function (_940) {
        return Prelude.show(Prelude.showNumber)(_940);
    };
});
var mkExistsR = unsafeCoerce;

/**
 *  | Attach an initializer.
 */
var initializer = Initializer.create;

/**
 *  | Create an event handler
 */
var handler = function (name_1) {
    return function (k) {
        return new Handler(mkExistsR(new HandlerF(name_1, k)));
    };
};

/**
 *  | Attach a finalizer.
 */
var finalizer = Finalizer.create;

/**
 *  Create an event name
 */
var eventName = EventName;

/**
 *  Create a class name
 */
var className = ClassName;

/**
 *  | Create an attribute name
 */
var attributeName = AttributeName;

/**
 *  | Create an attribute
 */
var attr = function (__dict_IsAttribute_0) {
    return function (name_1) {
        return function (v) {
            return new Attr(Data_Exists.mkExists(new AttrF(toAttrString(__dict_IsAttribute_0), name_1, v)));
        };
    };
};
var charset = attr(stringIsAttribute)(attributeName("charset"));
var class_ = Prelude["<<<"](Prelude.semigroupoidArr)(attr(stringIsAttribute)(attributeName("className")))(runClassName);
var classes = function (ss) {
    return attr(stringIsAttribute)(attributeName("className"))(Data_String.joinWith(" ")(Data_Array.map(runClassName)(ss)));
};
var colSpan = Prelude["<<<"](Prelude.semigroupoidArr)(attr(stringIsAttribute)(attributeName("colSpan")))(Prelude.show(Prelude.showNumber));
var content = attr(stringIsAttribute)(attributeName("content"));
var $$for = attr(stringIsAttribute)(attributeName("for"));
var height = Prelude["<<<"](Prelude.semigroupoidArr)(attr(stringIsAttribute)(attributeName("height")))(Prelude.show(Prelude.showNumber));
var href = attr(stringIsAttribute)(attributeName("href"));
var httpEquiv = attr(stringIsAttribute)(attributeName("http-equiv"));
var id_ = attr(stringIsAttribute)(attributeName("id"));
var name = attr(stringIsAttribute)(attributeName("name"));
var booleanIsAttribute = new IsAttribute(function (_941) {
    return function (_942) {
        if (_942) {
            return runAttributeName(_941);
        };
        if (!_942) {
            return "";
        };
        throw new Error("Failed pattern match");
    };
});
var checked = attr(booleanIsAttribute)(attributeName("checked"));
var disabled = attr(booleanIsAttribute)(attributeName("disabled"));
var enabled = Prelude["<<<"](Prelude.semigroupoidArr)(disabled)(Prelude.not(Prelude.boolLikeBoolean));
var functorAttr = new Prelude.Functor(function (_935) {
    return function (_936) {
        if (_936 instanceof Attr) {
            return new Attr(_936.value0);
        };
        if (_936 instanceof Handler) {
            return runExistsR(function (_929) {
                return new Handler(mkExistsR(new HandlerF(_929.value0, function (e_2) {
                    return Prelude["<$>"](Halogen_HTML_Events_Handler.functorEventHandler)(_935)(_929.value1(e_2));
                })));
            })(_936.value0);
        };
        if (_936 instanceof Initializer) {
            return new Initializer(_935(_936.value0));
        };
        if (_936 instanceof Finalizer) {
            return new Finalizer(_935(_936.value0));
        };
        throw new Error("Failed pattern match");
    };
});
var placeholder = attr(stringIsAttribute)(attributeName("placeholder"));
var readonly = attr(booleanIsAttribute)(attributeName("readonly"));
var rel = attr(stringIsAttribute)(attributeName("rel"));
var required = attr(booleanIsAttribute)(attributeName("required"));
var rowSpan = Prelude["<<<"](Prelude.semigroupoidArr)(attr(stringIsAttribute)(attributeName("rowSpan")))(Prelude.show(Prelude.showNumber));
var selected = attr(booleanIsAttribute)(attributeName("selected"));
var spellcheck = attr(booleanIsAttribute)(attributeName("spellcheck"));
var src = attr(stringIsAttribute)(attributeName("src"));
var target = attr(stringIsAttribute)(attributeName("target"));
var title = attr(stringIsAttribute)(attributeName("title"));
var type_ = attr(stringIsAttribute)(attributeName("type"));
var value = attr(stringIsAttribute)(attributeName("value"));
var stylesIsAttribute = new IsAttribute(function (_943) {
    return function (_944) {
        return Data_String.joinWith("; ")(Prelude["<$>"](Data_Array.functorArray)(function (_930) {
            return _930.value0 + (": " + _930.value1);
        })(Data_StrMap.toList(_944)));
    };
});
var style = attr(stylesIsAttribute)(attributeName("style"));
var width = Prelude["<<<"](Prelude.semigroupoidArr)(attr(stringIsAttribute)(attributeName("width")))(Prelude.show(Prelude.showNumber));

/**
 *  Smart constructors
 */
var alt = attr(stringIsAttribute)(attributeName("alt"));
module.exports = {
    Attr: Attr, 
    Handler: Handler, 
    Initializer: Initializer, 
    Finalizer: Finalizer, 
    HandlerF: HandlerF, 
    AttrF: AttrF, 
    IsAttribute: IsAttribute, 
    style: style, 
    placeholder: placeholder, 
    selected: selected, 
    checked: checked, 
    enabled: enabled, 
    spellcheck: spellcheck, 
    readonly: readonly, 
    required: required, 
    disabled: disabled, 
    width: width, 
    value: value, 
    type_: type_, 
    title: title, 
    target: target, 
    src: src, 
    rel: rel, 
    name: name, 
    id_: id_, 
    httpEquiv: httpEquiv, 
    href: href, 
    height: height, 
    "for": $$for, 
    content: content, 
    rowSpan: rowSpan, 
    colSpan: colSpan, 
    classes: classes, 
    class_: class_, 
    charset: charset, 
    alt: alt, 
    finalizer: finalizer, 
    initializer: initializer, 
    handler: handler, 
    attr: attr, 
    runExistsR: runExistsR, 
    mkExistsR: mkExistsR, 
    toAttrString: toAttrString, 
    runStyles: runStyles, 
    styles: styles, 
    runEventName: runEventName, 
    eventName: eventName, 
    runAttributeName: runAttributeName, 
    attributeName: attributeName, 
    runClassName: runClassName, 
    className: className, 
    functorAttr: functorAttr, 
    stringIsAttribute: stringIsAttribute, 
    numberIsAttribute: numberIsAttribute, 
    booleanIsAttribute: booleanIsAttribute, 
    stylesIsAttribute: stylesIsAttribute
};
