// Generated by psc-make version 0.6.8

/**
 *  | This module defines the `Store` comonad.
 */
"use strict";
var Data_Tuple = require("Data.Tuple");
var Prelude = require("Prelude");
var Data_Identity = require("Data.Identity");
var Control_Comonad_Store_Trans = require("Control.Comonad.Store.Trans");

/**
 *  | Create a value in context in the `Store` comonad.
 */
var store = function (f) {
    return function (x) {
        return Control_Comonad_Store_Trans.StoreT(new Data_Tuple.Tuple(f, x));
    };
};

/**
 *  | Unwrap a value in the `Store` comonad.
 */
var runStore = function (s) {
    return Data_Tuple.swap(Prelude["<$>"](Data_Tuple.functorTuple)(Data_Identity.runIdentity)(Data_Tuple.swap(Control_Comonad_Store_Trans.runStoreT(s))));
};
module.exports = {
    store: store, 
    runStore: runStore
};
