// Generated by psc-make version 0.6.8

/**
 *  | This module defines the CPS monad transformer.
 */
"use strict";
var Prelude = require("Prelude");
var Control_Monad_Trans = require("Control.Monad.Trans");

/**
 *  | The CPS monad transformer.
 *  |
 *  | This monad transformer extends the base monad with the operation `callCC`.
 */
var ContT = function (x) {
    return x;
};

/**
 *  | Run a computation in the `ContT` monad, by providing a continuation.
 */
var runContT = function (_79) {
    return function (_80) {
        return _79(_80);
    };
};

/**
 *  | Modify the continuation in a `ContT` monad action
 */
var withContT = function (f) {
    return function (m) {
        return function (k) {
            return runContT(m)(f(k));
        };
    };
};
var monadTransContT = new Control_Monad_Trans.MonadTrans(function (__dict_Monad_0) {
    return function (m) {
        return function (k) {
            return Prelude[">>="](__dict_Monad_0["__superclass_Prelude.Bind_1"]())(m)(k);
        };
    };
});

/**
 *  | Modify the underlying action in a `ContT` monad action.
 */
var mapContT = function (f) {
    return function (m) {
        return function (k) {
            return f(runContT(m)(k));
        };
    };
};
var functorContT = function (__dict_Monad_2) {
    return new Prelude.Functor(function (f) {
        return function (m) {
            return function (k) {
                return runContT(m)(function (a) {
                    return k(f(a));
                });
            };
        };
    });
};

/**
 *  | `callCC`, or _call-with-current-continuation_.
 *  |
 *  | This action makes the current continuation available to the caller.
 *  |
 *  | For example:
 *  |
 *  | ```purescript
 *  | delay :: forall eff. Number -> ContT Unit (Eff (timeout :: Timeout | eff)) Unit
 *  | delay n = callCC \cont -> 
 *  |   lift $ setTimeout n (runContT (cont unit) (\_ -> return unit))
 *  | ```
 */
var callCC = function (f) {
    return function (k) {
        return runContT(f(function (a) {
            return function (_78) {
                return k(a);
            };
        }))(k);
    };
};
var applyContT = function (__dict_Functor_4) {
    return function (__dict_Monad_5) {
        return new Prelude.Apply(function (f) {
            return function (v) {
                return function (k) {
                    return runContT(f)(function (g) {
                        return runContT(v)(function (a) {
                            return k(g(a));
                        });
                    });
                };
            };
        }, function () {
            return functorContT(__dict_Monad_5);
        });
    };
};
var bindContT = function (__dict_Monad_3) {
    return new Prelude.Bind(function (m) {
        return function (k) {
            return function (k$prime) {
                return runContT(m)(function (a) {
                    return runContT(k(a))(k$prime);
                });
            };
        };
    }, function () {
        return applyContT(((__dict_Monad_3["__superclass_Prelude.Applicative_0"]())["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(__dict_Monad_3);
    });
};
var applicativeContT = function (__dict_Functor_6) {
    return function (__dict_Monad_7) {
        return new Prelude.Applicative(function () {
            return applyContT(__dict_Functor_6)(__dict_Monad_7);
        }, function (a) {
            return function (k) {
                return k(a);
            };
        });
    };
};
var monadContT = function (__dict_Monad_1) {
    return new Prelude.Monad(function () {
        return applicativeContT(((__dict_Monad_1["__superclass_Prelude.Applicative_0"]())["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(__dict_Monad_1);
    }, function () {
        return bindContT(__dict_Monad_1);
    });
};
module.exports = {
    ContT: ContT, 
    callCC: callCC, 
    withContT: withContT, 
    mapContT: mapContT, 
    runContT: runContT, 
    functorContT: functorContT, 
    applyContT: applyContT, 
    applicativeContT: applicativeContT, 
    bindContT: bindContT, 
    monadContT: monadContT, 
    monadTransContT: monadTransContT
};
