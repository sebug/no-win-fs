// Generated by psc-make version 0.6.8

/**
 *  | This module defines helper functions for working with `Bind` instances.
 */
"use strict";
var Prelude = require("Prelude");

/**
 *  | Forwards Kleisli composition.
 *  |
 *  | For example:
 *  | 
 *  | ```purescript
 *  | import Data.Array (head, tail)
 *  | 
 *  | third = tail >=> tail >=> head
 *  | ```
 */
var $greater$eq$greater = function (__dict_Bind_0) {
    return function (f) {
        return function (g) {
            return function (a) {
                return Prelude[">>="](__dict_Bind_0)(f(a))(g);
            };
        };
    };
};

/**
 *  | A version of `(>>=)` with its arguments flipped.
 */
var $eq$less$less = function (__dict_Bind_1) {
    return function (f) {
        return function (m) {
            return Prelude[">>="](__dict_Bind_1)(m)(f);
        };
    };
};

/**
 *  | Backwards Kleisli composition.
 */
var $less$eq$less = function (__dict_Bind_2) {
    return function (f) {
        return function (g) {
            return function (a) {
                return $eq$less$less(__dict_Bind_2)(f)(g(a));
            };
        };
    };
};

/**
 *  | Collapse two applications of a monadic type constructor into one.
 */
var join = function (__dict_Bind_3) {
    return function (m) {
        return Prelude[">>="](__dict_Bind_3)(m)(Prelude.id(Prelude.categoryArr));
    };
};

/**
 *  | Execute a monadic action if a condition holds. 
 *  | 
 *  | For example:
 *  |
 *  | ```purescript
 *  | main = ifM ((< 0.5) <$> random)
 *  |          (trace "Heads")
 *  |          (trace "Tails")
 *  | ```
 */
var ifM = function (__dict_Bind_4) {
    return function (cond) {
        return function (t) {
            return function (f) {
                return Prelude[">>="](__dict_Bind_4)(cond)(function (cond$prime) {
                    if (cond$prime) {
                        return t;
                    };
                    if (!cond$prime) {
                        return f;
                    };
                    throw new Error("Failed pattern match");
                });
            };
        };
    };
};
module.exports = {
    ifM: ifM, 
    join: join, 
    "<=<": $less$eq$less, 
    ">=>": $greater$eq$greater, 
    "=<<": $eq$less$less
};
