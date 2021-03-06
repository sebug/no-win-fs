// Generated by psc-make version 0.6.8

/**
 *  | A data type and functions for working with ordered pairs and sequences of values.
 */
"use strict";
var Prelude = require("Prelude");
var Data_Monoid = require("Data.Monoid");
var Control_Lazy = require("Control.Lazy");
var Data_Array = require("Data.Array");
var Control_Comonad = require("Control.Comonad");
var Control_Extend = require("Control.Extend");

/**
 *  | A simple product type for wrapping a pair of component values.
 */
var Tuple = (function () {
    function Tuple(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Tuple.create = function (value0) {
        return function (value1) {
            return new Tuple(value0, value1);
        };
    };
    return Tuple;
})();

/**
 *  | Rakes two lists and returns a list of corresponding pairs.
 *  | If one input list is short, excess elements of the longer list are discarded.
 */
var zip = Data_Array.zipWith(Tuple.create);

/**
 *  | Transforms a list of pairs into a list of first components and a list of
 *  | second components.
 */
var unzip = function (_291) {
    if (_291.length >= 1) {
        var _1338 = _291.slice(1);
        var _1332 = unzip(_1338);
        return new Tuple(Prelude[":"]((_291[0]).value0)(_1332.value0), Prelude[":"]((_291[0]).value1)(_1332.value1));
    };
    if (_291.length === 0) {
        return new Tuple([  ], [  ]);
    };
    throw new Error("Failed pattern match");
};

/**
 *  | Turn a function of two arguments into a function that expects a tuple.
 */
var uncurry = function (_289) {
    return function (_290) {
        return _289(_290.value0)(_290.value1);
    };
};

/**
 *  | Exchange the first and second components of a tuple.
 */
var swap = function (_292) {
    return new Tuple(_292.value1, _292.value0);
};

/**
 *  | Returns the second component of a tuple.
 */
var snd = function (_288) {
    return _288.value1;
};

/**
 *  | Allows `Tuple`s to be rendered as a string with `show` whenever there are
 *  | `Show` instances for both component types.
 */
var showTuple = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return new Prelude.Show(function (_293) {
            return "Tuple (" + (Prelude.show(__dict_Show_0)(_293.value0) + (") (" + (Prelude.show(__dict_Show_1)(_293.value1) + ")")));
        });
    };
};
var semigroupoidTuple = new Prelude.Semigroupoid(function (_298) {
    return function (_299) {
        return new Tuple(_299.value0, _298.value1);
    };
});

/**
 *  | The `Semigroup` instance enables use of the associative operator `<>` on
 *  | `Tuple`s whenever there are `Semigroup` instances for the component
 *  | types. The `<>` operator is applied pairwise, so:
 *  | ```purescript
 *  | (Tuple a1 b1) <> (Tuple a2 b2) = Tuple (a1 <> a2) (b1 <> b2)
 *  | ```
 */
var semigroupTuple = function (__dict_Semigroup_2) {
    return function (__dict_Semigroup_3) {
        return new Prelude.Semigroup(function (_300) {
            return function (_301) {
                return new Tuple(Prelude["<>"](__dict_Semigroup_2)(_300.value0)(_301.value0), Prelude["<>"](__dict_Semigroup_3)(_300.value1)(_301.value1));
            };
        });
    };
};
var monoidTuple = function (__dict_Monoid_6) {
    return function (__dict_Monoid_7) {
        return new Data_Monoid.Monoid(function () {
            return semigroupTuple(__dict_Monoid_6["__superclass_Prelude.Semigroup_0"]())(__dict_Monoid_7["__superclass_Prelude.Semigroup_0"]());
        }, new Tuple(Data_Monoid.mempty(__dict_Monoid_6), Data_Monoid.mempty(__dict_Monoid_7)));
    };
};

/**
 *  | The `Functor` instance allows functions to transform the contents of a
 *  | `Tuple` with the `<$>` operator, applying the function to the second
 *  | component, so:
 *  | ```purescript
 *  | f <$> (Tuple x y) = Tuple x (f y)
 *  | ````
 */
var functorTuple = new Prelude.Functor(function (_302) {
    return function (_303) {
        return new Tuple(_303.value0, _302(_303.value1));
    };
});

/**
 *  | Returns the first component of a tuple.
 */
var fst = function (_287) {
    return _287.value0;
};
var lazyLazy1Tuple = function (__dict_Lazy1_9) {
    return function (__dict_Lazy1_10) {
        return new Control_Lazy.Lazy(function (f) {
            return new Tuple(Control_Lazy.defer1(__dict_Lazy1_9)(function (_283) {
                return fst(f(Prelude.unit));
            }), Control_Lazy.defer1(__dict_Lazy1_10)(function (_284) {
                return snd(f(Prelude.unit));
            }));
        });
    };
};
var lazyLazy2Tuple = function (__dict_Lazy2_11) {
    return function (__dict_Lazy2_12) {
        return new Control_Lazy.Lazy(function (f) {
            return new Tuple(Control_Lazy.defer2(__dict_Lazy2_11)(function (_285) {
                return fst(f(Prelude.unit));
            }), Control_Lazy.defer2(__dict_Lazy2_12)(function (_286) {
                return snd(f(Prelude.unit));
            }));
        });
    };
};
var lazyTuple = function (__dict_Lazy_13) {
    return function (__dict_Lazy_14) {
        return new Control_Lazy.Lazy(function (f) {
            return new Tuple(Control_Lazy.defer(__dict_Lazy_13)(function (_281) {
                return fst(f(Prelude.unit));
            }), Control_Lazy.defer(__dict_Lazy_14)(function (_282) {
                return snd(f(Prelude.unit));
            }));
        });
    };
};
var extendTuple = new Control_Extend.Extend(function (_308) {
    return function (_309) {
        return new Tuple(_309.value0, _308(_309));
    };
}, function () {
    return functorTuple;
});

/**
 *  | Allows `Tuple`s to be checked for equality with `==` and `/=` whenever
 *  | there are `Eq` instances for both component types.
 */
var eqTuple = function (__dict_Eq_15) {
    return function (__dict_Eq_16) {
        return new Prelude.Eq(function (t1) {
            return function (t2) {
                return !Prelude["=="](eqTuple(__dict_Eq_15)(__dict_Eq_16))(t1)(t2);
            };
        }, function (_294) {
            return function (_295) {
                return Prelude["=="](__dict_Eq_15)(_294.value0)(_295.value0) && Prelude["=="](__dict_Eq_16)(_294.value1)(_295.value1);
            };
        });
    };
};

/**
 *  | Allows `Tuple`s to be compared with `compare`, `>`, `>=`, `<` and `<=`
 *  | whenever there are `Ord` instances for both component types. To obtain
 *  | the result, the `fst`s are `compare`d, and if they are `EQ`ual, the
 *  | `snd`s are `compare`d.
 */
var ordTuple = function (__dict_Ord_4) {
    return function (__dict_Ord_5) {
        return new Prelude.Ord(function () {
            return eqTuple(__dict_Ord_4["__superclass_Prelude.Eq_0"]())(__dict_Ord_5["__superclass_Prelude.Eq_0"]());
        }, function (_296) {
            return function (_297) {
                var _1389 = Prelude.compare(__dict_Ord_4)(_296.value0)(_297.value0);
                if (_1389 instanceof Prelude.EQ) {
                    return Prelude.compare(__dict_Ord_5)(_296.value1)(_297.value1);
                };
                return _1389;
            };
        });
    };
};

/**
 *  | Turn a function that expects a tuple into a function of two arguments.
 */
var curry = function (f) {
    return function (a) {
        return function (b) {
            return f(new Tuple(a, b));
        };
    };
};
var comonadTuple = new Control_Comonad.Comonad(function () {
    return extendTuple;
}, snd);

/**
 *  | The `Functor` instance allows functions to transform the contents of a
 *  | `Tuple` with the `<*>` operator whenever there is a `Semigroup` instance
 *  | for the `fst` component, so:
 *  | ```purescript
 *  | (Tuple a1 f) <*> (Tuple a2 x) == Tuple (a1 <> a2) (f x)
 *  | ```
 */
var applyTuple = function (__dict_Semigroup_18) {
    return new Prelude.Apply(function (_304) {
        return function (_305) {
            return new Tuple(Prelude["<>"](__dict_Semigroup_18)(_304.value0)(_305.value0), _304.value1(_305.value1));
        };
    }, function () {
        return functorTuple;
    });
};
var bindTuple = function (__dict_Semigroup_17) {
    return new Prelude.Bind(function (_306) {
        return function (_307) {
            var _1402 = _307(_306.value1);
            return new Tuple(Prelude["<>"](__dict_Semigroup_17)(_306.value0)(_1402.value0), _1402.value1);
        };
    }, function () {
        return applyTuple(__dict_Semigroup_17);
    });
};
var applicativeTuple = function (__dict_Monoid_19) {
    return new Prelude.Applicative(function () {
        return applyTuple(__dict_Monoid_19["__superclass_Prelude.Semigroup_0"]());
    }, Tuple.create(Data_Monoid.mempty(__dict_Monoid_19)));
};
var monadTuple = function (__dict_Monoid_8) {
    return new Prelude.Monad(function () {
        return applicativeTuple(__dict_Monoid_8);
    }, function () {
        return bindTuple(__dict_Monoid_8["__superclass_Prelude.Semigroup_0"]());
    });
};
module.exports = {
    Tuple: Tuple, 
    swap: swap, 
    unzip: unzip, 
    zip: zip, 
    uncurry: uncurry, 
    curry: curry, 
    snd: snd, 
    fst: fst, 
    showTuple: showTuple, 
    eqTuple: eqTuple, 
    ordTuple: ordTuple, 
    semigroupoidTuple: semigroupoidTuple, 
    semigroupTuple: semigroupTuple, 
    monoidTuple: monoidTuple, 
    functorTuple: functorTuple, 
    applyTuple: applyTuple, 
    applicativeTuple: applicativeTuple, 
    bindTuple: bindTuple, 
    monadTuple: monadTuple, 
    extendTuple: extendTuple, 
    comonadTuple: comonadTuple, 
    lazyTuple: lazyTuple, 
    lazyLazy1Tuple: lazyLazy1Tuple, 
    lazyLazy2Tuple: lazyLazy2Tuple
};
