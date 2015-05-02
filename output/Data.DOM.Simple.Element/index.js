// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");
var Data_DOM_Simple_Unsafe_Element = require("Data.DOM.Simple.Unsafe.Element");
var Data_DOM_Simple_Unsafe_Utils = require("Data.DOM.Simple.Unsafe.Utils");
var Data_Foldable = require("Data.Foldable");
var Data_Tuple = require("Data.Tuple");
var Control_Monad_Eff = require("Control.Monad.Eff");
var DOM = require("DOM");
var Data_DOM_Simple_Types = require("Data.DOM.Simple.Types");
var Data_Maybe = require("Data.Maybe");
var Data_Array = require("Data.Array");
var Element = function (appendChild, children, classAdd, classContains, classRemove, classToggle, contentWindow, getAttribute, getElementById, getElementsByClassName, getElementsByName, getStyleAttr, hasAttribute, innerHTML, querySelector, querySelectorAll, removeAttribute, setAttribute, setInnerHTML, setStyleAttr, setTextContent, setValue, textContent, value) {
    this.appendChild = appendChild;
    this.children = children;
    this.classAdd = classAdd;
    this.classContains = classContains;
    this.classRemove = classRemove;
    this.classToggle = classToggle;
    this.contentWindow = contentWindow;
    this.getAttribute = getAttribute;
    this.getElementById = getElementById;
    this.getElementsByClassName = getElementsByClassName;
    this.getElementsByName = getElementsByName;
    this.getStyleAttr = getStyleAttr;
    this.hasAttribute = hasAttribute;
    this.innerHTML = innerHTML;
    this.querySelector = querySelector;
    this.querySelectorAll = querySelectorAll;
    this.removeAttribute = removeAttribute;
    this.setAttribute = setAttribute;
    this.setInnerHTML = setInnerHTML;
    this.setStyleAttr = setStyleAttr;
    this.setTextContent = setTextContent;
    this.setValue = setValue;
    this.textContent = textContent;
    this.value = value;
};
var value = function (dict) {
    return dict.value;
};
var textContent = function (dict) {
    return dict.textContent;
};
var showHtmlElement = new Prelude.Show(Data_DOM_Simple_Unsafe_Utils.showImpl);
var setValue = function (dict) {
    return dict.setValue;
};
var setTextContent = function (dict) {
    return dict.setTextContent;
};
var setStyleAttr = function (dict) {
    return dict.setStyleAttr;
};
var setStyleAttrs = function (__dict_Element_0) {
    return function (xs) {
        return function (el) {
            return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)(xs)(function (kv) {
                return setStyleAttr(__dict_Element_0)(Data_Tuple.fst(kv))(Data_Tuple.snd(kv))(el);
            });
        };
    };
};
var setInnerHTML = function (dict) {
    return dict.setInnerHTML;
};
var setAttribute = function (dict) {
    return dict.setAttribute;
};
var setAttributes = function (__dict_Element_1) {
    return function (xs) {
        return function (el) {
            return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)(xs)(function (kv) {
                return setAttribute(__dict_Element_1)(Data_Tuple.fst(kv))(Data_Tuple.snd(kv))(el);
            });
        };
    };
};
var removeAttribute = function (dict) {
    return dict.removeAttribute;
};
var querySelectorAll = function (dict) {
    return dict.querySelectorAll;
};
var querySelector = function (dict) {
    return dict.querySelector;
};
var innerHTML = function (dict) {
    return dict.innerHTML;
};
var htmlElement = new Element(Data_DOM_Simple_Unsafe_Element.unsafeAppendChild, Data_DOM_Simple_Unsafe_Element.unsafeChildren, Data_DOM_Simple_Unsafe_Element.unsafeClassAdd, Data_DOM_Simple_Unsafe_Element.unsafeClassContains, Data_DOM_Simple_Unsafe_Element.unsafeClassRemove, Data_DOM_Simple_Unsafe_Element.unsafeClassToggle, Data_DOM_Simple_Unsafe_Element.unsafeContentWindow, Data_DOM_Simple_Unsafe_Element.unsafeGetAttribute, function (id) {
    return function (el) {
        return Prelude[">>="](Control_Monad_Eff.bindEff)(Data_DOM_Simple_Unsafe_Element.unsafeGetElementById(id)(el))(Prelude[">>>"](Prelude.semigroupoidArr)(Data_DOM_Simple_Unsafe_Utils.ensure)(Prelude["return"](Control_Monad_Eff.monadEff)));
    };
}, Data_DOM_Simple_Unsafe_Element.unsafeGetElementsByClassName, Data_DOM_Simple_Unsafe_Element.unsafeGetElementsByName, Data_DOM_Simple_Unsafe_Element.unsafeGetStyleAttr, Data_DOM_Simple_Unsafe_Element.unsafeHasAttribute, Data_DOM_Simple_Unsafe_Element.unsafeInnerHTML, function (sel) {
    return function (el) {
        return Prelude[">>="](Control_Monad_Eff.bindEff)(Data_DOM_Simple_Unsafe_Element.unsafeQuerySelector(sel)(el))(Prelude[">>>"](Prelude.semigroupoidArr)(Data_DOM_Simple_Unsafe_Utils.ensure)(Prelude["return"](Control_Monad_Eff.monadEff)));
    };
}, Data_DOM_Simple_Unsafe_Element.unsafeQuerySelectorAll, Data_DOM_Simple_Unsafe_Element.unsafeRemoveAttribute, Data_DOM_Simple_Unsafe_Element.unsafeSetAttribute, Data_DOM_Simple_Unsafe_Element.unsafeSetInnerHTML, Data_DOM_Simple_Unsafe_Element.unsafeSetStyleAttr, Data_DOM_Simple_Unsafe_Element.unsafeSetTextContent, Data_DOM_Simple_Unsafe_Element.unsafeSetValue, Data_DOM_Simple_Unsafe_Element.unsafeTextContent, Data_DOM_Simple_Unsafe_Element.unsafeValue);
var hasAttribute = function (dict) {
    return dict.hasAttribute;
};
var getStyleAttr = function (dict) {
    return dict.getStyleAttr;
};
var getElementsByName = function (dict) {
    return dict.getElementsByName;
};
var getElementsByClassName = function (dict) {
    return dict.getElementsByClassName;
};
var getElementById = function (dict) {
    return dict.getElementById;
};
var getAttribute = function (dict) {
    return dict.getAttribute;
};
var focus = Data_DOM_Simple_Unsafe_Element.unsafeFocus;
var contentWindow = function (dict) {
    return dict.contentWindow;
};
var click = Data_DOM_Simple_Unsafe_Element.unsafeClick;
var classToggle = function (dict) {
    return dict.classToggle;
};
var classRemove = function (dict) {
    return dict.classRemove;
};
var classContains = function (dict) {
    return dict.classContains;
};
var classAdd = function (dict) {
    return dict.classAdd;
};
var children = function (dict) {
    return dict.children;
};
var blur = Data_DOM_Simple_Unsafe_Element.unsafeBlur;
var appendChild = function (dict) {
    return dict.appendChild;
};
module.exports = {
    Element: Element, 
    blur: blur, 
    focus: focus, 
    click: click, 
    setStyleAttrs: setStyleAttrs, 
    setAttributes: setAttributes, 
    classContains: classContains, 
    classToggle: classToggle, 
    classAdd: classAdd, 
    classRemove: classRemove, 
    contentWindow: contentWindow, 
    setValue: setValue, 
    value: value, 
    setTextContent: setTextContent, 
    textContent: textContent, 
    setInnerHTML: setInnerHTML, 
    innerHTML: innerHTML, 
    appendChild: appendChild, 
    children: children, 
    setStyleAttr: setStyleAttr, 
    getStyleAttr: getStyleAttr, 
    removeAttribute: removeAttribute, 
    hasAttribute: hasAttribute, 
    setAttribute: setAttribute, 
    getAttribute: getAttribute, 
    querySelectorAll: querySelectorAll, 
    querySelector: querySelector, 
    getElementsByName: getElementsByName, 
    getElementsByClassName: getElementsByClassName, 
    getElementById: getElementById, 
    htmlElement: htmlElement, 
    showHtmlElement: showHtmlElement
};
