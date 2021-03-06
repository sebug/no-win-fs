// Generated by psc-make version 0.6.8

/**
 *  | This module defines the environment comonad transformer, `EnvT`.
 */
"use strict";
var Prelude = require("Prelude");
var Control_Extend = require("Control.Extend");
var Control_Comonad = require("Control.Comonad");
var Control_Comonad_Trans = require("Control.Comonad.Trans");
var Data_Tuple = require("Data.Tuple");

/**
 *  | The environment comonad transformer.
 *  | 
 *  | This comonad transformer extends the context of a value in the base comonad with a _global environment_ of
 *  | type `e`.
 *  |
 *  | The `ComonadEnv` type class describes the operations supported by this comonad.
 */
var EnvT = function (x) {
    return x;
};

/**
 *  | Change the environment type in an `EnvT` context.
 */
var withEnvT = function (_311) {
    return function (_312) {
        return EnvT(new Data_Tuple.Tuple(_311(_312.value0), _312.value1));
    };
};

/**
 *  | Unwrap a value in the `EnvT` comonad.
 */
var runEnvT = function (_310) {
    return _310;
};

/**
 *  | Change the underlying comonad and data type in an `EnvT` context.
 */
var mapEnvT = function (_313) {
    return function (_314) {
        return EnvT(new Data_Tuple.Tuple(_314.value0, _313(_314.value1)));
    };
};
var functorEnvT = function (__dict_Functor_0) {
    return new Prelude.Functor(function (_315) {
        return function (_316) {
            return EnvT(new Data_Tuple.Tuple(_316.value0, Prelude["<$>"](__dict_Functor_0)(_315)(_316.value1)));
        };
    });
};
var extendEnvT = function (__dict_Extend_1) {
    return new Control_Extend.Extend(function (_317) {
        return function (_318) {
            return EnvT(new Data_Tuple.Tuple(_318.value0, Prelude["<$>"](__dict_Extend_1["__superclass_Prelude.Functor_0"]())(_317)(Control_Extend["<<="](__dict_Extend_1)(Prelude[">>>"](Prelude.semigroupoidArr)(Data_Tuple.Tuple.create(_318.value0))(EnvT))(_318.value1))));
        };
    }, function () {
        return functorEnvT(__dict_Extend_1["__superclass_Prelude.Functor_0"]());
    });
};
var comonadTransEnvT = new Control_Comonad_Trans.ComonadTrans(function (__dict_Comonad_2) {
    return function (_320) {
        return _320.value1;
    };
});
var comonadEnvT = function (__dict_Comonad_3) {
    return new Control_Comonad.Comonad(function () {
        return extendEnvT(__dict_Comonad_3["__superclass_Control.Extend.Extend_0"]());
    }, function (_319) {
        return Control_Comonad.extract(__dict_Comonad_3)(_319.value1);
    });
};
module.exports = {
    EnvT: EnvT, 
    mapEnvT: mapEnvT, 
    withEnvT: withEnvT, 
    runEnvT: runEnvT, 
    functorEnvT: functorEnvT, 
    extendEnvT: extendEnvT, 
    comonadEnvT: comonadEnvT, 
    comonadTransEnvT: comonadTransEnvT
};
