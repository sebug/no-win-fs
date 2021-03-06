// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");
var Control_Extend = require("Control.Extend");
var Control_Comonad = require("Control.Comonad");
var Data_Maybe = require("Data.Maybe");
var Data_Monoid = require("Data.Monoid");

/**
 *  | Monoid returning the first (left-most) non-Nothing value.
 *  |
 *  | ``` purescript
 *  | First (Just x) <> First (Just y) == First (Just x)
 *  | First Nothing <> First (Just y) == First (Just x)
 *  | First Nothing <> Nothing == First Nothing
 *  | mempty :: First _ == First Nothing
 *  | ```
 */
var First = function (x) {
    return x;
};
var showFirst = function (__dict_Show_0) {
    return new Prelude.Show(function (_414) {
        return "First (" + (Prelude.show(Data_Maybe.showMaybe(__dict_Show_0))(_414) + ")");
    });
};
var semigroupFirst = new Prelude.Semigroup(function (_415) {
    return function (_416) {
        if (_415 instanceof Data_Maybe.Just) {
            return _415;
        };
        return _416;
    };
});
var runFirst = function (_401) {
    return _401;
};
var monoidFirst = new Data_Monoid.Monoid(function () {
    return semigroupFirst;
}, Data_Maybe.Nothing.value);
var functorFirst = new Prelude.Functor(function (_408) {
    return function (_409) {
        return Prelude["<$>"](Data_Maybe.functorMaybe)(_408)(_409);
    };
});
var extendFirst = new Control_Extend.Extend(function (f) {
    return function (x) {
        return Control_Extend["<<="](extendFirst)(f)(x);
    };
}, function () {
    return functorFirst;
});
var eqFirst = function (__dict_Eq_2) {
    return new Prelude.Eq(function (_404) {
        return function (_405) {
            return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_2))(_404)(_405);
        };
    }, function (_402) {
        return function (_403) {
            return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_2))(_402)(_403);
        };
    });
};
var ordFirst = function (__dict_Ord_1) {
    return new Prelude.Ord(function () {
        return eqFirst(__dict_Ord_1["__superclass_Prelude.Eq_0"]());
    }, function (_406) {
        return function (_407) {
            return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_1))(_406)(_407);
        };
    });
};
var applyFirst = new Prelude.Apply(function (_410) {
    return function (_411) {
        return Prelude["<*>"](Data_Maybe.applyMaybe)(_410)(_411);
    };
}, function () {
    return functorFirst;
});
var bindFirst = new Prelude.Bind(function (_412) {
    return function (_413) {
        return Prelude[">>="](Data_Maybe.bindMaybe)(_412)(Prelude["<<<"](Prelude.semigroupoidArr)(runFirst)(_413));
    };
}, function () {
    return applyFirst;
});
var applicativeFirst = new Prelude.Applicative(function () {
    return applyFirst;
}, Prelude["<<<"](Prelude.semigroupoidArr)(First)(Prelude.pure(Data_Maybe.applicativeMaybe)));
var monadFirst = new Prelude.Monad(function () {
    return applicativeFirst;
}, function () {
    return bindFirst;
});
module.exports = {
    First: First, 
    runFirst: runFirst, 
    eqFirst: eqFirst, 
    ordFirst: ordFirst, 
    functorFirst: functorFirst, 
    applyFirst: applyFirst, 
    applicativeFirst: applicativeFirst, 
    bindFirst: bindFirst, 
    monadFirst: monadFirst, 
    extendFirst: extendFirst, 
    showFirst: showFirst, 
    semigroupFirst: semigroupFirst, 
    monoidFirst: monoidFirst
};
