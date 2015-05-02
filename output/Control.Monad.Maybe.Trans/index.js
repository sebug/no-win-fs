// Generated by psc-make version 0.6.8

/**
 *  | This module defines the `MaybeT` monad transformer.
 */
"use strict";
var Prelude = require("Prelude");
var Control_Alt = require("Control.Alt");
var Control_Plus = require("Control.Plus");
var Control_Alternative = require("Control.Alternative");
var Control_Monad = require("Control.Monad");
var Control_Monad_Trans = require("Control.Monad.Trans");
var Control_MonadPlus = require("Control.MonadPlus");
var Data_Either = require("Data.Either");
var Data_Maybe = require("Data.Maybe");
var Data_Tuple = require("Data.Tuple");

/**
 *  | The `MaybeT` monad transformer.
 *  |
 *  | This monad transformer extends the base monad, supporting failure and alternation via
 *  | the `MonadPlus` type class.
 */
var MaybeT = function (x) {
    return x;
};

/**
 *  | Run a computation in the `MaybeT` monad.
 */
var runMaybeT = function (_341) {
    return _341;
};
var monadTransMaybeT = new Control_Monad_Trans.MonadTrans(function (__dict_Monad_1) {
    return Prelude["<<<"](Prelude.semigroupoidArr)(MaybeT)(Prelude.liftM1(__dict_Monad_1)(Data_Maybe.Just.create));
});

/**
 *  | Change the result type of a `MaybeT` monad action.
 */
var mapMaybeT = function (f) {
    return Prelude["<<<"](Prelude.semigroupoidArr)(MaybeT)(Prelude["<<<"](Prelude.semigroupoidArr)(f)(runMaybeT));
};
var liftPassMaybe = function (__dict_Monad_4) {
    return function (pass) {
        return mapMaybeT(function (m) {
            return pass(Prelude[">>="](__dict_Monad_4["__superclass_Prelude.Bind_1"]())(m)(function (_18) {
                return Prelude["return"](__dict_Monad_4)((function () {
                    if (_18 instanceof Data_Maybe.Nothing) {
                        return new Data_Tuple.Tuple(Data_Maybe.Nothing.value, Prelude.id(Prelude.categoryArr));
                    };
                    if (_18 instanceof Data_Maybe.Just) {
                        return new Data_Tuple.Tuple(new Data_Maybe.Just(_18.value0.value0), _18.value0.value1);
                    };
                    throw new Error("Failed pattern match");
                })());
            }));
        });
    };
};
var liftListenMaybe = function (__dict_Monad_5) {
    return function (listen) {
        return mapMaybeT(function (m) {
            return Prelude[">>="](__dict_Monad_5["__superclass_Prelude.Bind_1"]())(listen(m))(function (_17) {
                return Prelude["return"](__dict_Monad_5)(Prelude["<$>"](Data_Maybe.functorMaybe)(function (r) {
                    return new Data_Tuple.Tuple(r, _17.value1);
                })(_17.value0));
            });
        });
    };
};
var liftCatchMaybe = function ($$catch) {
    return function (m) {
        return function (h) {
            return MaybeT($$catch(runMaybeT(m))(Prelude["<<<"](Prelude.semigroupoidArr)(runMaybeT)(h)));
        };
    };
};
var liftCallCCMaybe = function (callCC) {
    return function (f) {
        return MaybeT(callCC(function (c) {
            return runMaybeT(f(function (a) {
                return MaybeT(c(new Data_Maybe.Just(a)));
            }));
        }));
    };
};
var monadMaybeT = function (__dict_Monad_3) {
    return new Prelude.Monad(function () {
        return applicativeMaybeT(__dict_Monad_3);
    }, function () {
        return bindMaybeT(__dict_Monad_3);
    });
};
var functorMaybeT = function (__dict_Monad_6) {
    return new Prelude.Functor(Prelude.liftA1(applicativeMaybeT(__dict_Monad_6)));
};
var bindMaybeT = function (__dict_Monad_7) {
    return new Prelude.Bind(function (x) {
        return function (f) {
            return MaybeT(Prelude[">>="](__dict_Monad_7["__superclass_Prelude.Bind_1"]())(runMaybeT(x))(function (_15) {
                if (_15 instanceof Data_Maybe.Nothing) {
                    return Prelude["return"](__dict_Monad_7)(Data_Maybe.Nothing.value);
                };
                if (_15 instanceof Data_Maybe.Just) {
                    return runMaybeT(f(_15.value0));
                };
                throw new Error("Failed pattern match");
            }));
        };
    }, function () {
        return applyMaybeT(__dict_Monad_7);
    });
};
var applyMaybeT = function (__dict_Monad_8) {
    return new Prelude.Apply(Prelude.ap(monadMaybeT(__dict_Monad_8)), function () {
        return functorMaybeT(__dict_Monad_8);
    });
};
var applicativeMaybeT = function (__dict_Monad_9) {
    return new Prelude.Applicative(function () {
        return applyMaybeT(__dict_Monad_9);
    }, Prelude["<<<"](Prelude.semigroupoidArr)(MaybeT)(Prelude["<<<"](Prelude.semigroupoidArr)(Prelude.pure(__dict_Monad_9["__superclass_Prelude.Applicative_0"]()))(Data_Maybe.Just.create)));
};
var altMaybeT = function (__dict_Monad_11) {
    return new Control_Alt.Alt(function (m1) {
        return function (m2) {
            return Prelude[">>="](__dict_Monad_11["__superclass_Prelude.Bind_1"]())(runMaybeT(m1))(function (_16) {
                if (_16 instanceof Data_Maybe.Nothing) {
                    return runMaybeT(m2);
                };
                return Prelude["return"](__dict_Monad_11)(_16);
            });
        };
    }, function () {
        return functorMaybeT(__dict_Monad_11);
    });
};
var plusMaybeT = function (__dict_Monad_0) {
    return new Control_Plus.Plus(function () {
        return altMaybeT(__dict_Monad_0);
    }, Prelude.pure(__dict_Monad_0["__superclass_Prelude.Applicative_0"]())(Data_Maybe.Nothing.value));
};
var alternativeMaybeT = function (__dict_Monad_10) {
    return new Control_Alternative.Alternative(function () {
        return plusMaybeT(__dict_Monad_10);
    }, function () {
        return applicativeMaybeT(__dict_Monad_10);
    });
};
var monadPlusMaybeT = function (__dict_Monad_2) {
    return new Control_MonadPlus.MonadPlus(function () {
        return alternativeMaybeT(__dict_Monad_2);
    }, function () {
        return monadMaybeT(__dict_Monad_2);
    });
};
module.exports = {
    MaybeT: MaybeT, 
    liftCallCCMaybe: liftCallCCMaybe, 
    liftPassMaybe: liftPassMaybe, 
    liftListenMaybe: liftListenMaybe, 
    liftCatchMaybe: liftCatchMaybe, 
    mapMaybeT: mapMaybeT, 
    runMaybeT: runMaybeT, 
    functorMaybeT: functorMaybeT, 
    applyMaybeT: applyMaybeT, 
    applicativeMaybeT: applicativeMaybeT, 
    bindMaybeT: bindMaybeT, 
    monadMaybeT: monadMaybeT, 
    monadTransMaybeT: monadTransMaybeT, 
    altMaybeT: altMaybeT, 
    plusMaybeT: plusMaybeT, 
    alternativeMaybeT: alternativeMaybeT, 
    monadPlusMaybeT: monadPlusMaybeT
};
