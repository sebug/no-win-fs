// Generated by psc-make version 0.6.8

/**
 *  | This module defines the writer monad transformer, `WriterT`.
 */
"use strict";
var Prelude = require("Prelude");
var Data_Tuple = require("Data.Tuple");
var Data_Monoid = require("Data.Monoid");
var Control_Alt = require("Control.Alt");
var Control_Plus = require("Control.Plus");
var Control_Alternative = require("Control.Alternative");
var Control_Monad_Trans = require("Control.Monad.Trans");
var Control_MonadPlus = require("Control.MonadPlus");

/**
 *  | The writer monad transformer.
 *  |
 *  | This monad transformer extends the base monad with a monoidal accumulator of
 *  | type `w`.
 *  |
 *  | The `MonadWriter` type class describes the operations supported by this monad.
 */
var WriterT = function (x) {
    return x;
};

/**
 *  | Run a computation in the `WriterT` monad.
 */
var runWriterT = function (_354) {
    return _354;
};
var monadTransWriterT = function (__dict_Monoid_4) {
    return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_5) {
        return function (m) {
            return WriterT(Prelude[">>="](__dict_Monad_5["__superclass_Prelude.Bind_1"]())(m)(function (_25) {
                return Prelude["return"](__dict_Monad_5)(new Data_Tuple.Tuple(_25, Data_Monoid.mempty(__dict_Monoid_4)));
            }));
        };
    });
};

/**
 *  | Change the accumulator and base monad types in a `WriterT` monad action.
 */
var mapWriterT = function (f) {
    return function (m) {
        return WriterT(f(runWriterT(m)));
    };
};
var liftCatchWriter = function ($$catch) {
    return function (m) {
        return function (h) {
            return WriterT($$catch(runWriterT(m))(function (e) {
                return runWriterT(h(e));
            }));
        };
    };
};
var liftCallCCWriter = function (__dict_Monoid_8) {
    return function (callCC) {
        return function (f) {
            return WriterT(callCC(function (c) {
                return runWriterT(f(function (a) {
                    return WriterT(c(new Data_Tuple.Tuple(a, Data_Monoid.mempty(__dict_Monoid_8))));
                }));
            }));
        };
    };
};
var functorWriterT = function (__dict_Functor_9) {
    return new Prelude.Functor(function (f) {
        return mapWriterT(Prelude["<$>"](__dict_Functor_9)(function (_353) {
            return new Data_Tuple.Tuple(f(_353.value0), _353.value1);
        }));
    });
};

/**
 *  | Run a computation in the `WriterT` monad, discarding the result.
 */
var execWriterT = function (__dict_Apply_10) {
    return function (m) {
        return Prelude["<$>"](__dict_Apply_10["__superclass_Prelude.Functor_0"]())(Data_Tuple.snd)(runWriterT(m));
    };
};
var applyWriterT = function (__dict_Monoid_13) {
    return function (__dict_Apply_14) {
        return new Prelude.Apply(function (f) {
            return function (v) {
                return WriterT((function () {
                    var k = function (_355) {
                        return function (_356) {
                            return new Data_Tuple.Tuple(_355.value0(_356.value0), Prelude["<>"](__dict_Monoid_13["__superclass_Prelude.Semigroup_0"]())(_355.value1)(_356.value1));
                        };
                    };
                    return Prelude["<*>"](__dict_Apply_14)(Prelude["<$>"](__dict_Apply_14["__superclass_Prelude.Functor_0"]())(k)(runWriterT(f)))(runWriterT(v));
                })());
            };
        }, function () {
            return functorWriterT(__dict_Apply_14["__superclass_Prelude.Functor_0"]());
        });
    };
};
var bindWriterT = function (__dict_Monoid_11) {
    return function (__dict_Monad_12) {
        return new Prelude.Bind(function (m) {
            return function (k) {
                return WriterT(Prelude[">>="](__dict_Monad_12["__superclass_Prelude.Bind_1"]())(runWriterT(m))(function (_24) {
                    return Prelude[">>="](__dict_Monad_12["__superclass_Prelude.Bind_1"]())(runWriterT(k(_24.value0)))(function (_23) {
                        return Prelude["return"](__dict_Monad_12)(new Data_Tuple.Tuple(_23.value0, Prelude["<>"](__dict_Monoid_11["__superclass_Prelude.Semigroup_0"]())(_24.value1)(_23.value1)));
                    });
                }));
            };
        }, function () {
            return applyWriterT(__dict_Monoid_11)((__dict_Monad_12["__superclass_Prelude.Applicative_0"]())["__superclass_Prelude.Apply_0"]());
        });
    };
};
var applicativeWriterT = function (__dict_Monoid_15) {
    return function (__dict_Applicative_16) {
        return new Prelude.Applicative(function () {
            return applyWriterT(__dict_Monoid_15)(__dict_Applicative_16["__superclass_Prelude.Apply_0"]());
        }, function (a) {
            return WriterT(Prelude.pure(__dict_Applicative_16)(new Data_Tuple.Tuple(a, Data_Monoid.mempty(__dict_Monoid_15))));
        });
    };
};
var monadWriterT = function (__dict_Monoid_2) {
    return function (__dict_Monad_3) {
        return new Prelude.Monad(function () {
            return applicativeWriterT(__dict_Monoid_2)(__dict_Monad_3["__superclass_Prelude.Applicative_0"]());
        }, function () {
            return bindWriterT(__dict_Monoid_2)(__dict_Monad_3);
        });
    };
};
var altWriterT = function (__dict_Monoid_19) {
    return function (__dict_Alt_20) {
        return new Control_Alt.Alt(function (m) {
            return function (n) {
                return WriterT(Control_Alt["<|>"](__dict_Alt_20)(runWriterT(m))(runWriterT(n)));
            };
        }, function () {
            return functorWriterT(__dict_Alt_20["__superclass_Prelude.Functor_0"]());
        });
    };
};
var plusWriterT = function (__dict_Monoid_0) {
    return function (__dict_Plus_1) {
        return new Control_Plus.Plus(function () {
            return altWriterT(__dict_Monoid_0)(__dict_Plus_1["__superclass_Control.Alt.Alt_0"]());
        }, Control_Plus.empty(__dict_Plus_1));
    };
};
var alternativeWriterT = function (__dict_Monoid_17) {
    return function (__dict_Alternative_18) {
        return new Control_Alternative.Alternative(function () {
            return plusWriterT(__dict_Monoid_17)(__dict_Alternative_18["__superclass_Control.Plus.Plus_1"]());
        }, function () {
            return applicativeWriterT(__dict_Monoid_17)(__dict_Alternative_18["__superclass_Prelude.Applicative_0"]());
        });
    };
};
var monadPlusWriterT = function (__dict_Monoid_6) {
    return function (__dict_MonadPlus_7) {
        return new Control_MonadPlus.MonadPlus(function () {
            return alternativeWriterT(__dict_Monoid_6)(__dict_MonadPlus_7["__superclass_Control.Alternative.Alternative_1"]());
        }, function () {
            return monadWriterT(__dict_Monoid_6)(__dict_MonadPlus_7["__superclass_Prelude.Monad_0"]());
        });
    };
};
module.exports = {
    WriterT: WriterT, 
    liftCallCCWriter: liftCallCCWriter, 
    liftCatchWriter: liftCatchWriter, 
    mapWriterT: mapWriterT, 
    execWriterT: execWriterT, 
    runWriterT: runWriterT, 
    functorWriterT: functorWriterT, 
    applyWriterT: applyWriterT, 
    applicativeWriterT: applicativeWriterT, 
    altWriterT: altWriterT, 
    plusWriterT: plusWriterT, 
    alternativeWriterT: alternativeWriterT, 
    bindWriterT: bindWriterT, 
    monadWriterT: monadWriterT, 
    monadPlusWriterT: monadPlusWriterT, 
    monadTransWriterT: monadTransWriterT
};