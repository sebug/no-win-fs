// Generated by psc-make version 0.6.8

/**
 *  | This module defines the `Writer` monad.
 */
"use strict";
var Prelude = require("Prelude");
var Data_Identity = require("Data.Identity");
var Control_Monad_Writer_Trans = require("Control.Monad.Writer.Trans");
var Data_Tuple = require("Data.Tuple");
var Data_Monoid = require("Data.Monoid");

/**
 *  | Run a computation in the `Writer` monad
 */
var runWriter = Prelude["<<<"](Prelude.semigroupoidArr)(Data_Identity.runIdentity)(Control_Monad_Writer_Trans.runWriterT);

/**
 *  | Change the result and accumulator types in a `Writer` monad action
 */
var mapWriter = function (f) {
    return Control_Monad_Writer_Trans.mapWriterT(Prelude["<<<"](Prelude.semigroupoidArr)(Data_Identity.Identity)(Prelude["<<<"](Prelude.semigroupoidArr)(f)(Data_Identity.runIdentity)));
};

/**
 *  | Run a computation in the `Writer` monad, discarding the result
 */
var execWriter = function (m) {
    return Data_Tuple.snd(runWriter(m));
};
module.exports = {
    mapWriter: mapWriter, 
    execWriter: execWriter, 
    runWriter: runWriter
};
