// Generated by psc-make version 0.6.8

/**
 *  | This module defines the `ComonadEnv` type class and its instances.
 */
"use strict";
var Prelude = require("Prelude");
var Data_Tuple = require("Data.Tuple");
var Control_Comonad_Env_Trans = require("Control.Comonad.Env.Trans");
var Control_Comonad = require("Control.Comonad");
var Control_Comonad_Env = require("Control.Comonad.Env");

/**
 *  | The `ComonadEnv` type class represents those monads which support a global environment via
 *  | `ask` and `local`.
 *  |
 *  | - `ask` reads the current environment from the context.
 *  | - `local` changes the value of the global environment.
 *  |
 *  | An implementation is provided for `EnvT`.
 *  |
 *  | Laws:
 *  |
 *  | - `ask (local f x) = f (ask x)`
 *  | - `extract (local _ x) = extract a`
 *  | - `extend g (local f x) = extend (g <<< local f) x` 
 */
var ComonadEnv = function (__superclass_Control$dotComonad$dotComonad_0, ask, local) {
    this["__superclass_Control.Comonad.Comonad_0"] = __superclass_Control$dotComonad$dotComonad_0;
    this.ask = ask;
    this.local = local;
};

/**
 *  | The `ComonadEnv` type class represents those monads which support a global environment via
 *  | `ask` and `local`.
 *  |
 *  | - `ask` reads the current environment from the context.
 *  | - `local` changes the value of the global environment.
 *  |
 *  | An implementation is provided for `EnvT`.
 *  |
 *  | Laws:
 *  |
 *  | - `ask (local f x) = f (ask x)`
 *  | - `extract (local _ x) = extract a`
 *  | - `extend g (local f x) = extend (g <<< local f) x` 
 */
var local = function (dict) {
    return dict.local;
};
var comonadEnvTuple = new ComonadEnv(function () {
    return Data_Tuple.comonadTuple;
}, Data_Tuple.fst, function (_723) {
    return function (_724) {
        return new Data_Tuple.Tuple(_723(_724.value0), _724.value1);
    };
});
var comonadEnvEnvT = function (__dict_Comonad_0) {
    return new ComonadEnv(function () {
        return Control_Comonad_Env_Trans.comonadEnvT(__dict_Comonad_0);
    }, function (x) {
        return Data_Tuple.fst(Control_Comonad_Env_Trans.runEnvT(x));
    }, function (f) {
        return function (x) {
            return Control_Comonad_Env_Trans.EnvT((function () {
                var _2180 = Control_Comonad_Env_Trans.runEnvT(x);
                return new Data_Tuple.Tuple(f(_2180.value0), _2180.value1);
            })());
        };
    });
};

/**
 *  | The `ComonadEnv` type class represents those monads which support a global environment via
 *  | `ask` and `local`.
 *  |
 *  | - `ask` reads the current environment from the context.
 *  | - `local` changes the value of the global environment.
 *  |
 *  | An implementation is provided for `EnvT`.
 *  |
 *  | Laws:
 *  |
 *  | - `ask (local f x) = f (ask x)`
 *  | - `extract (local _ x) = extract a`
 *  | - `extend g (local f x) = extend (g <<< local f) x` 
 */
var ask = function (dict) {
    return dict.ask;
};

/**
 *  | Get a value which depends on the environment.
 */
var asks = function (__dict_ComonadEnv_1) {
    return function (f) {
        return function (x) {
            return f(ask(__dict_ComonadEnv_1)(x));
        };
    };
};
module.exports = {
    ComonadEnv: ComonadEnv, 
    asks: asks, 
    local: local, 
    ask: ask, 
    comonadEnvTuple: comonadEnvTuple, 
    comonadEnvEnvT: comonadEnvEnvT
};