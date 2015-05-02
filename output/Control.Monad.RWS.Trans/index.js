// Generated by psc-make version 0.6.8

/**
 *  | This module defines the reader-writer-state monad transformer, `RWST`.
 */
"use strict";
var Prelude = require("Prelude");
var Data_Tuple = require("Data.Tuple");
var Data_Monoid = require("Data.Monoid");
var Control_Monad_Trans = require("Control.Monad.Trans");

/**
 *  | The reader-writer-state monad transformer, which combines the operations
 *  | of `ReaderT`, `WriterT` and `StateT` into a single monad transformer.
 */
var RWST = function (x) {
    return x;
};

/**
 *  | Run a computation in the `RWST` monad.
 */
var runRWST = function (_347) {
    return _347;
};

/**
 *  | Change the context type in a `RWST` monad action.
 */
var withRWST = function (f) {
    return function (m) {
        return function (r) {
            return function (s) {
                return Data_Tuple.uncurry(runRWST(m))(f(r)(s));
            };
        };
    };
};
var mkSee = function (__dict_Monoid_2) {
    return function (s) {
        return function (a) {
            return function (w) {
                return {
                    state: s, 
                    result: a, 
                    log: w
                };
            };
        };
    };
};
var monadTransRWST = function (__dict_Monoid_3) {
    return new Control_Monad_Trans.MonadTrans(function (__dict_Monad_4) {
        return function (m) {
            return function (_346) {
                return function (s) {
                    return Prelude[">>="](__dict_Monad_4["__superclass_Prelude.Bind_1"]())(m)(function (a) {
                        return Prelude["return"](__dict_Monad_4)(mkSee(__dict_Monoid_3)(s)(a)(Data_Monoid.mempty(__dict_Monoid_3)));
                    });
                };
            };
        };
    });
};

/**
 *  | Change the result and accumulator types in a `RWST` monad action.
 */
var mapRWST = function (f) {
    return function (m) {
        return function (r) {
            return function (s) {
                return f(runRWST(m)(r)(s));
            };
        };
    };
};
var functorRWST = function (__dict_Functor_5) {
    return new Prelude.Functor(function (f) {
        return function (m) {
            return function (r) {
                return function (s) {
                    return Prelude["<$>"](__dict_Functor_5)(function (see) {
                        var _1494 = {};
                        for (var _1495 in see) {
                            if (see.hasOwnProperty(_1495)) {
                                _1494[_1495] = see[_1495];
                            };
                        };
                        _1494.result = f(see.result);
                        return _1494;
                    })(runRWST(m)(r)(s));
                };
            };
        };
    });
};

/**
 *  | Run a computation in the `RWST` monad, discarding the result.
 */
var execRWST = function (__dict_Monad_6) {
    return function (m) {
        return function (r) {
            return function (s) {
                return Prelude[">>="](__dict_Monad_6["__superclass_Prelude.Bind_1"]())(runRWST(m)(r)(s))(function (see) {
                    return Prelude["return"](__dict_Monad_6)(new Data_Tuple.Tuple(see.state, see.log));
                });
            };
        };
    };
};

/**
 *  | Run a computation in the `RWST` monad, discarding the final state.
 */
var evalRWST = function (__dict_Monad_7) {
    return function (m) {
        return function (r) {
            return function (s) {
                return Prelude[">>="](__dict_Monad_7["__superclass_Prelude.Bind_1"]())(runRWST(m)(r)(s))(function (see) {
                    return Prelude["return"](__dict_Monad_7)(new Data_Tuple.Tuple(see.result, see.log));
                });
            };
        };
    };
};
var applyRWST = function (__dict_Bind_10) {
    return function (__dict_Monoid_11) {
        return new Prelude.Apply(function (f) {
            return function (m) {
                return function (r) {
                    return function (s) {
                        return Prelude[">>="](__dict_Bind_10)(runRWST(f)(r)(s))(function (_343) {
                            return Prelude["<#>"]((__dict_Bind_10["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(runRWST(m)(r)(_343.state))(function (_342) {
                                return mkSee(__dict_Monoid_11)(_342.state)(_343.result(_342.result))(Prelude["++"](__dict_Monoid_11["__superclass_Prelude.Semigroup_0"]())(_343.log)(_342.log));
                            });
                        });
                    };
                };
            };
        }, function () {
            return functorRWST((__dict_Bind_10["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]());
        });
    };
};
var bindRWST = function (__dict_Bind_8) {
    return function (__dict_Monoid_9) {
        return new Prelude.Bind(function (m) {
            return function (f) {
                return function (r) {
                    return function (s) {
                        return Prelude[">>="](__dict_Bind_8)(runRWST(m)(r)(s))(function (_344) {
                            return Prelude["<#>"]((__dict_Bind_8["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(runRWST(f(_344.result))(r)(_344.state))(function (see$prime) {
                                var _1505 = {};
                                for (var _1506 in see$prime) {
                                    if (see$prime.hasOwnProperty(_1506)) {
                                        _1505[_1506] = see$prime[_1506];
                                    };
                                };
                                _1505.log = Prelude["++"](__dict_Monoid_9["__superclass_Prelude.Semigroup_0"]())(_344.log)(see$prime.log);
                                return _1505;
                            });
                        });
                    };
                };
            };
        }, function () {
            return applyRWST(__dict_Bind_8)(__dict_Monoid_9);
        });
    };
};
var applicativeRWST = function (__dict_Monad_12) {
    return function (__dict_Monoid_13) {
        return new Prelude.Applicative(function () {
            return applyRWST(__dict_Monad_12["__superclass_Prelude.Bind_1"]())(__dict_Monoid_13);
        }, function (a) {
            return function (_345) {
                return function (s) {
                    return Prelude.pure(__dict_Monad_12["__superclass_Prelude.Applicative_0"]())(mkSee(__dict_Monoid_13)(s)(a)(Data_Monoid.mempty(__dict_Monoid_13)));
                };
            };
        });
    };
};
var monadRWST = function (__dict_Monad_0) {
    return function (__dict_Monoid_1) {
        return new Prelude.Monad(function () {
            return applicativeRWST(__dict_Monad_0)(__dict_Monoid_1);
        }, function () {
            return bindRWST(__dict_Monad_0["__superclass_Prelude.Bind_1"]())(__dict_Monoid_1);
        });
    };
};
module.exports = {
    RWST: RWST, 
    withRWST: withRWST, 
    mapRWST: mapRWST, 
    execRWST: execRWST, 
    evalRWST: evalRWST, 
    runRWST: runRWST, 
    mkSee: mkSee, 
    functorRWST: functorRWST, 
    applyRWST: applyRWST, 
    bindRWST: bindRWST, 
    applicativeRWST: applicativeRWST, 
    monadRWST: monadRWST, 
    monadTransRWST: monadTransRWST
};
