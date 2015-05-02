// Generated by psc-make version 0.6.8

/**
 *  | This module provides the FFI definitions required to render HTML documents
 *  | using the `virtual-dom` library.
 */
"use strict";
var Data_Function = require("Data.Function");
var Prelude = require("Prelude");
var DOM = require("DOM");
var Data_DOM_Simple_Types = require("Data.DOM.Simple.Types");
var Data_Int = require("Data.Int");
var Data_Maybe = require("Data.Maybe");
var Data_Monoid = require("Data.Monoid");
var Data_Nullable = require("Data.Nullable");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Control_Monad_ST = require("Control.Monad.ST");
var emptyProps = {};
function prop(key, value) {  var props = {};  props[key] = value;  return props;};
function handlerProp(key, f) {  var props = {};  var Hook = function () {};  Hook.prototype.callback = function(e) {    f(e)();  };  Hook.prototype.hook = function(node) {    node.addEventListener(key, this.callback);  };  Hook.prototype.unhook = function(node) {    node.removeEventListener(key, this.callback);  };  props['halogen-hook-' + key] = new Hook(f);  return props;};
function initProp(f) {  var props = {};  var Hook = function () {};  Hook.prototype.hook = function(node, prop, prev) {    if (typeof prev === 'undefined') {      f();    };  };  props['halogen-init'] = new Hook(f);  return props;};
function finalizerProp(f) {  var props = {};  var Hook = function () {};  Hook.prototype.hook = function() { };  Hook.prototype.unhook = function() {    f();  };  props['halogen-finalizer'] = new Hook(f);  return props;};
function concatProps(p1, p2) {  var props = {};  for (var key in p1) {    props[key] = p1[key];  }  for (var key in p2) {    props[key] = p2[key];  }  return props;};
function createElement(vtree) {  return require('virtual-dom/create-element')(vtree);};
function diff(vtree1) {  return function createElement(vtree2) {    return require('virtual-dom/diff')(vtree1, vtree2);  };};
function patch(p) {  return function(node) {    return function() {      return require('virtual-dom/patch')(node, p);    };  };};
function vtext(s) {  var VText = require('virtual-dom/vnode/vtext');  return new VText(s);};
function vnode(name) {  return function(attr) {    return function(children) {      var VirtualNode = require('virtual-dom/vnode/vnode');      var props = {        attributes: {}      };      for (var key in attr) {        if ((key.indexOf('data-') === 0) || (key === 'readonly')) {          props.attributes[key] = attr[key];        } else {          props[key] = attr[key];        }      }      return new VirtualNode(name, props, children);    };  };};
function vwidget(driver) {  return function(w) {    return w.create(driver);  };};
function mapWidget(f) {  return function(w) {    return {      create: function(driver) {        return w.create(function(i) {          return driver(f(i));        });      }    };  };};
function widget(value, name, id, init, update, destroy) {  return {    create: function(driver) {      var Widget = function () {};      Widget.prototype.type = 'Widget';      Widget.prototype.name = name;      Widget.prototype.id = id;      Widget.prototype.value = value;      Widget.prototype.init = function(){        var result = init(driver)();        this.context = result.context;        return result.node;      };      Widget.prototype.update = function(prev, node) {        this.context = prev.context;        return update(this.value, prev.value, prev.context, node)();      };      Widget.prototype.destroy = function(node) {        destroy(this.context, node)();      };      return new Widget();    }  };};
var semigroupProps = new Prelude.Semigroup(Data_Function.runFn2(concatProps));
var monoidProps = new Data_Monoid.Monoid(function () {
    return semigroupProps;
}, emptyProps);
var functorWidget = new Prelude.Functor(mapWidget);
module.exports = {
    widget: widget, 
    vwidget: vwidget, 
    vnode: vnode, 
    vtext: vtext, 
    patch: patch, 
    diff: diff, 
    createElement: createElement, 
    finalizerProp: finalizerProp, 
    initProp: initProp, 
    handlerProp: handlerProp, 
    prop: prop, 
    emptyProps: emptyProps, 
    semigroupProps: semigroupProps, 
    monoidProps: monoidProps, 
    functorWidget: functorWidget
};