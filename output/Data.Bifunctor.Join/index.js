// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");
var Data_Bifunctor = require("Data.Bifunctor");
var Control_Biapply = require("Control.Biapply");
var Control_Biapplicative = require("Control.Biapplicative");
var Data_Bifoldable = require("Data.Bifoldable");
var Data_Bitraversable = require("Data.Bitraversable");
var Data_Traversable = require("Data.Traversable");
var Data_Foldable = require("Data.Foldable");
var Data_Monoid = require("Data.Monoid");
var Control_Apply = require("Control.Apply");

/**
 *  | `Join` turns a `Bifunctor` into a `Functor` by equating the
 *  | two type arguments.
 */
var Join = (function () {
    function Join(value0) {
        this.value0 = value0;
    };
    Join.create = function (value0) {
        return new Join(value0);
    };
    return Join;
})();

/**
 *  | Remove the `Join` constructor.
 */
var runJoin = function (_665) {
    return _665.value0;
};
var joinFunctor = function (__dict_Bifunctor_3) {
    return new Prelude.Functor(function (f) {
        return Prelude["<$>"](Prelude.functorArr)(Join.create)(Prelude["<<<"](Prelude.semigroupoidArr)(Data_Bifunctor.bimap(__dict_Bifunctor_3)(f)(f))(runJoin));
    });
};
var joinFoldable = function (__dict_Bifoldable_4) {
    return new Data_Foldable.Foldable(function (__dict_Monoid_5) {
        return function (f) {
            return Prelude["<<<"](Prelude.semigroupoidArr)(Data_Bifoldable.bifoldMap(__dict_Bifoldable_4)(__dict_Monoid_5)(f)(f))(runJoin);
        };
    }, function (f) {
        return function (z) {
            return Prelude["<<<"](Prelude.semigroupoidArr)(Data_Bifoldable.bifoldl(__dict_Bifoldable_4)(f)(f)(z))(runJoin);
        };
    }, function (f) {
        return function (z) {
            return Prelude["<<<"](Prelude.semigroupoidArr)(Data_Bifoldable.bifoldr(__dict_Bifoldable_4)(f)(f)(z))(runJoin);
        };
    });
};
var joinTraversable = function (__dict_Bitraversable_0) {
    return new Data_Traversable.Traversable(function () {
        return joinFoldable(__dict_Bitraversable_0["__superclass_Data.Bifoldable.Bifoldable_1"]());
    }, function () {
        return joinFunctor(__dict_Bitraversable_0["__superclass_Data.Bifunctor.Bifunctor_0"]());
    }, function (__dict_Applicative_2) {
        return Data_Traversable.traverse(joinTraversable(__dict_Bitraversable_0))(__dict_Applicative_2)(Prelude.id(Prelude.categoryArr));
    }, function (__dict_Applicative_1) {
        return function (_668) {
            return function (_669) {
                return Prelude["<$>"]((__dict_Applicative_1["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(Join.create)(Data_Bitraversable.bitraverse(__dict_Bitraversable_0)(__dict_Applicative_1)(_668)(_668)(_669.value0));
            };
        };
    });
};
var joinApply = function (__dict_Biapply_6) {
    return new Prelude.Apply(function (_666) {
        return function (_667) {
            return new Join(Control_Biapply["<<*>>"](__dict_Biapply_6)(_666.value0)(_667.value0));
        };
    }, function () {
        return joinFunctor(__dict_Biapply_6["__superclass_Data.Bifunctor.Bifunctor_0"]());
    });
};
var joinApplicative = function (__dict_Biapplicative_7) {
    return new Prelude.Applicative(function () {
        return joinApply(__dict_Biapplicative_7["__superclass_Control.Biapply.Biapply_0"]());
    }, function (a) {
        return new Join(Control_Biapplicative.bipure(__dict_Biapplicative_7)(a)(a));
    });
};
module.exports = {
    Join: Join, 
    runJoin: runJoin, 
    joinFunctor: joinFunctor, 
    joinApply: joinApply, 
    joinApplicative: joinApplicative, 
    joinFoldable: joinFoldable, 
    joinTraversable: joinTraversable
};
