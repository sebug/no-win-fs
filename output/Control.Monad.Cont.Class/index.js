// Generated by psc-make version 0.6.8

/**
 *  | This module defines the `MonadCont` type class and its instances.
 */
"use strict";
var Control_Monad_Cont_Trans = require("Control.Monad.Cont.Trans");
var Control_Monad_Error_Trans = require("Control.Monad.Error.Trans");
var Control_Monad_Maybe_Trans = require("Control.Monad.Maybe.Trans");
var Control_Monad_Reader_Trans = require("Control.Monad.Reader.Trans");
var Control_Monad_State_Trans = require("Control.Monad.State.Trans");
var Control_Monad_Writer_Trans = require("Control.Monad.Writer.Trans");
var Prelude = require("Prelude");
var Control_Monad_Error = require("Control.Monad.Error");
var Data_Monoid = require("Data.Monoid");

/**
 *  | The `MonadCont` type class represents those monads which support the
 *  | `callCC` operation.
 *  |
 *  | An implementation is provided for `ContT`, and for other monad transformers
 *  | defined in this library.
 */
var MonadCont = function (callCC) {
    this.callCC = callCC;
};
var monadContContT = function (__dict_Monad_0) {
    return new MonadCont(Control_Monad_Cont_Trans.callCC);
};

/**
 *  | The `MonadCont` type class represents those monads which support the
 *  | `callCC` operation.
 *  |
 *  | An implementation is provided for `ContT`, and for other monad transformers
 *  | defined in this library.
 */
var callCC = function (dict) {
    return dict.callCC;
};
var monadContErrorT = function (__dict_MonadCont_1) {
    return new MonadCont(Control_Monad_Error_Trans.liftCallCCError(callCC(__dict_MonadCont_1)));
};
var monadContMaybeT = function (__dict_MonadCont_2) {
    return new MonadCont(Control_Monad_Maybe_Trans.liftCallCCMaybe(callCC(__dict_MonadCont_2)));
};
var monadContReaderT = function (__dict_MonadCont_3) {
    return new MonadCont(Control_Monad_Reader_Trans.liftCallCCReader(callCC(__dict_MonadCont_3)));
};
var monadContStateT = function (__dict_MonadCont_4) {
    return new MonadCont(Control_Monad_State_Trans["liftCallCCState'"](callCC(__dict_MonadCont_4)));
};
var monadWriterT = function (__dict_Monoid_5) {
    return function (__dict_MonadCont_6) {
        return new MonadCont(Control_Monad_Writer_Trans.liftCallCCWriter(__dict_Monoid_5)(callCC(__dict_MonadCont_6)));
    };
};
module.exports = {
    MonadCont: MonadCont, 
    callCC: callCC, 
    monadContContT: monadContContT, 
    monadContErrorT: monadContErrorT, 
    monadContMaybeT: monadContMaybeT, 
    monadContReaderT: monadContReaderT, 
    monadContStateT: monadContStateT, 
    monadWriterT: monadWriterT
};
