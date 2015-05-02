// Generated by psc-make version 0.6.8

/**
 *  | A newtype over `Aff` that provides `Applicative` instances that run in 
 *  | parallel. This is useful, for example, if you want to run a whole bunch 
 *  | of AJAX requests at the same time, rather than sequentially.
 */
"use strict";
var Prelude = require("Prelude");
var Data_Monoid = require("Data.Monoid");
var Control_Monad_Aff_AVar = require("Control.Monad.Aff.AVar");
var Control_Monad_Aff = require("Control.Monad.Aff");
var Data_Either = require("Data.Either");
var Control_Plus = require("Control.Plus");
var Control_Apply = require("Control.Apply");
var Control_Alt = require("Control.Alt");
var Control_Alternative = require("Control.Alternative");
var Control_Monad_Error_Class = require("Control.Monad.Error.Class");
var Par = function (x) {
    return x;
};

/**
 *  | Extracts the `Aff` from the `Par`.
 */
var runPar = function (_364) {
    return _364;
};
var functorPar = new Prelude.Functor(function (_365) {
    return function (_366) {
        return Prelude["<$>"](Control_Monad_Aff.functorAff)(_365)(_366);
    };
});
var applyPar = new Prelude.Apply(function (_367) {
    return function (_368) {
        return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_AVar.makeVar)(function (_31) {
            return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_AVar.makeVar)(function (_30) {
                return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Prelude[">>="](Control_Monad_Aff.bindAff)(_367)(Control_Monad_Aff_AVar.putVar(_31))))(function (_29) {
                    return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Prelude[">>="](Control_Monad_Aff.bindAff)(_368)(Control_Monad_Aff_AVar.putVar(_30))))(function (_28) {
                        return Control_Monad_Aff.cancelWith(Prelude["<*>"](Control_Monad_Aff.applyAff)(Control_Monad_Aff_AVar.takeVar(_31))(Control_Monad_Aff_AVar.takeVar(_30)))(Prelude["<>"](Control_Monad_Aff.semigroupCanceler)(_29)(_28));
                    });
                });
            });
        });
    };
}, function () {
    return functorPar;
});
var semigroupPar = function (__dict_Semigroup_0) {
    return new Prelude.Semigroup(function (a) {
        return function (b) {
            return Prelude["<*>"](applyPar)(Prelude["<$>"](functorPar)(Prelude["<>"](__dict_Semigroup_0))(a))(b);
        };
    });
};
var applicativePar = new Prelude.Applicative(function () {
    return applyPar;
}, function (v) {
    return Prelude.pure(Control_Monad_Aff.applicativeAff)(v);
});
var monoidPar = function (__dict_Monoid_1) {
    return new Data_Monoid.Monoid(function () {
        return semigroupPar(__dict_Monoid_1["__superclass_Prelude.Semigroup_0"]());
    }, Prelude.pure(applicativePar)(Data_Monoid.mempty(__dict_Monoid_1)));
};

/**
 *  | Returns the first value, or the first error if both error.
 */
var altPar = new Control_Alt.Alt(function (_369) {
    return function (_370) {
        var maybeKill = function (va) {
            return function (ve) {
                return function (err) {
                    return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_AVar.takeVar(ve))(function (_32) {
                        return Prelude[">>="](Control_Monad_Aff.bindAff)((function () {
                            var _1576 = _32 === 1;
                            if (_1576) {
                                return Control_Monad_Aff_AVar.killVar(va)(err);
                            };
                            if (!_1576) {
                                return Prelude["return"](Control_Monad_Aff.monadAff)(Prelude.unit);
                            };
                            throw new Error("Failed pattern match");
                        })())(function () {
                            return Control_Monad_Aff_AVar.putVar(ve)(_32 + 1);
                        });
                    });
                };
            };
        };
        return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_AVar.makeVar)(function (_36) {
            return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_AVar["makeVar'"](0))(function (_35) {
                return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.attempt(_369))(Data_Either.either(maybeKill(_36)(_35))(Control_Monad_Aff_AVar.putVar(_36)))))(function (_34) {
                    return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.attempt(_370))(Data_Either.either(maybeKill(_36)(_35))(Control_Monad_Aff_AVar.putVar(_36)))))(function (_33) {
                        return Control_Monad_Aff.cancelWith(Control_Monad_Aff_AVar.takeVar(_36))(Prelude["<>"](Control_Monad_Aff.semigroupCanceler)(_34)(_33));
                    });
                });
            });
        });
    };
}, function () {
    return functorPar;
});
var plusPar = new Control_Plus.Plus(function () {
    return altPar;
}, Control_Plus.empty(Control_Monad_Aff.plusAff));
var alternativePar = new Control_Alternative.Alternative(function () {
    return plusPar;
}, function () {
    return applicativePar;
});
module.exports = {
    Par: Par, 
    runPar: runPar, 
    semigroupPar: semigroupPar, 
    monoidPar: monoidPar, 
    functorPar: functorPar, 
    applyPar: applyPar, 
    applicativePar: applicativePar, 
    altPar: altPar, 
    plusPar: plusPar, 
    alternativePar: alternativePar
};