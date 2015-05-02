// Generated by psc-make version 0.6.8

/**
 *  | This module defines the `Alt` type class.
 */
"use strict";
var Prelude = require("Prelude");

/**
 *  | The `Alt` type class identifies an associative operation on a type
 *  | constructor.  It is similar to `Semigroup`, except that it applies to
 *  | types of kind `* -> *`, like `Array` or `List`, rather than concrete types
 *  | `String` or `Number`.
 *  |
 *  | `Alt` instances are required to satisfy the following laws:
 *  |
 *  | - Associativity: `(x <|> y) <|> z == x <|> (y <|> z)`
 *  | - Distributivity: `f <$> (x <|> y) == (f <$> x) <|> (f <$> y)`
 *  |
 *  | For example, the `Array` (`[]`) type is an instance of `Alt`, where
 *  | `(<|>)` is defined to be concatenation.
 */
var Alt = function ($less$bar$greater, __superclass_Prelude$dotFunctor_0) {
    this["<|>"] = $less$bar$greater;
    this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
};

/**
 *  | The `Alt` type class identifies an associative operation on a type
 *  | constructor.  It is similar to `Semigroup`, except that it applies to
 *  | types of kind `* -> *`, like `Array` or `List`, rather than concrete types
 *  | `String` or `Number`.
 *  |
 *  | `Alt` instances are required to satisfy the following laws:
 *  |
 *  | - Associativity: `(x <|> y) <|> z == x <|> (y <|> z)`
 *  | - Distributivity: `f <$> (x <|> y) == (f <$> x) <|> (f <$> y)`
 *  |
 *  | For example, the `Array` (`[]`) type is an instance of `Alt`, where
 *  | `(<|>)` is defined to be concatenation.
 */
var $less$bar$greater = function (dict) {
    return dict["<|>"];
};
module.exports = {
    Alt: Alt, 
    "<|>": $less$bar$greater
};
