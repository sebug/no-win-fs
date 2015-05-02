// Generated by psc-make version 0.6.8

/**
 *  | This module defines signal functions (`SF`) and non-empty signal functions (`SF1`) and combinators
 *  | for working with them.
 */
"use strict";
var Data_Tuple = require("Data.Tuple");
var Prelude = require("Prelude");
var Data_Profunctor = require("Data.Profunctor");
var Data_Profunctor_Strong = require("Data.Profunctor.Strong");
var Data_Profunctor_Choice = require("Data.Profunctor.Choice");
var Data_Either = require("Data.Either");

/**
 *  | A `SF` represents a state machine which responds to inputs of type `i`, producing outputs of type `o`.
 */
var SF = function (x) {
    return x;
};

/**
 *  | `SF1` represents non-empty signals, i.e. signals with an initial output value.
 */
var SF1 = function (x) {
    return x;
};

/**
 *  | Convert a `SF1` to a `SF` by ignoring its initial value
 */
var tail = function (_388) {
    return _388.next;
};

/**
 *  | Creates a stateful `SF` based on a function which returns an output value
 */
var stateful$prime = function (s) {
    return function (step) {
        var go = function (s_1) {
            return function (i) {
                var _1685 = step(s_1)(i);
                return {
                    result: _1685.value0, 
                    next: go(_1685.value1)
                };
            };
        };
        return go(s);
    };
};

/**
 *  | Convert a `SF` to a `SF1` by providing an initial value
 */
var startingAt = function (s) {
    return function (o) {
        return {
            result: o, 
            next: s
        };
    };
};

/**
 *  | Creates a stateful `SF1`
 */
var stateful = function (s) {
    return function (step) {
        return startingAt(stateful$prime(s)(function (s_1) {
            return function (i) {
                var s$prime = step(s_1)(i);
                return new Data_Tuple.Tuple(s$prime, s$prime);
            };
        }))(s);
    };
};

/**
 *  | Run a `SF1` to obtain the initial value and remaining signal
 */
var runSF1 = function (_386) {
    return _386;
};

/**
 *  | Run a `SF` by providing an input
 */
var runSF = function (_385) {
    return _385;
};
var profunctorSF1 = new Data_Profunctor.Profunctor(function (_398) {
    return function (_399) {
        return function (_400) {
            return {
                result: _399(_400.result), 
                next: Data_Profunctor.dimap(profunctorSF)(_398)(_399)(_400.next)
            };
        };
    };
});
var profunctorSF = new Data_Profunctor.Profunctor(function (_395) {
    return function (_396) {
        return function (_397) {
            return function (i) {
                return Data_Profunctor.dimap(profunctorSF1)(_395)(_396)(_397(_395(i)));
            };
        };
    };
});
var strongSF = new Data_Profunctor_Strong.Strong(function () {
    return profunctorSF;
}, function (s) {
    return function (_383) {
        var _1697 = runSF(s)(_383.value0);
        return {
            result: new Data_Tuple.Tuple(_1697.result, _383.value1), 
            next: Data_Profunctor_Strong.first(strongSF)(_1697.next)
        };
    };
}, function (s) {
    return function (_384) {
        var _1701 = runSF(s)(_384.value1);
        return {
            result: new Data_Tuple.Tuple(_384.value0, _1701.result), 
            next: Data_Profunctor_Strong.second(strongSF)(_1701.next)
        };
    };
});

/**
 *  | Create a `SF` which hides a piece of internal state of type `s`.
 */
var loop = function (s) {
    return function (signal) {
        return function (i) {
            var _1704 = runSF(signal)(new Data_Tuple.Tuple(s, i));
            return {
                result: Data_Tuple.snd(_1704.result), 
                next: loop(Data_Tuple.fst(_1704.result))(_1704.next)
            };
        };
    };
};

/**
 *  | A `SF` which returns the latest input
 */
var input = function (i) {
    return {
        result: i, 
        next: input
    };
};

/**
 *  | Get the current value of a `SF1`
 */
var head = function (_387) {
    return _387.result;
};

/**
 *  | A variant of `mergeWith` which takes an additional function to destructure
 *  | its inputs.
 */
var mergeWith$prime = function (f) {
    return function (g) {
        var o = function (s1) {
            return function (s2) {
                return {
                    result: g(head(s1))(head(s2)), 
                    next: function (i) {
                        var _1706 = f(i);
                        if (_1706 instanceof Data_Either.Left) {
                            return o(runSF(tail(s1))(_1706.value0))(s2);
                        };
                        if (_1706 instanceof Data_Either.Right) {
                            return o(s1)(runSF(tail(s2))(_1706.value0));
                        };
                        throw new Error("Failed pattern match");
                    }
                };
            };
        };
        return o;
    };
};

/**
 *  | Merge two non-empty signals, outputting the latest value from both
 *  | signals at each step.
 */
var mergeWith = mergeWith$prime(Prelude.id(Prelude.categoryArr));
var semigroupoidSF1 = new Prelude.Semigroupoid(function (f) {
    return function (g) {
        return {
            result: head(f), 
            next: Prelude["<<<"](semigroupoidSF)(tail(f))(tail(g))
        };
    };
});
var semigroupoidSF = new Prelude.Semigroupoid(function (f) {
    return function (g) {
        return function (i) {
            var s1 = runSF(g)(i);
            var s2 = runSF(f)(head(s1));
            return Prelude["<<<"](semigroupoidSF1)(s2)(s1);
        };
    };
});
var functorSF1 = new Prelude.Functor(function (_391) {
    return function (_392) {
        return {
            result: _391(_392.result), 
            next: Prelude["<$>"](functorSF)(_391)(_392.next)
        };
    };
});
var functorSF = new Prelude.Functor(function (_389) {
    return function (_390) {
        return function (i) {
            return Prelude["<$>"](functorSF1)(_389)(_390(i));
        };
    };
});

/**
 *  | A `SF` which compares consecutive inputs using a helper function
 */
var differencesWith = function (f) {
    return function (initial) {
        return stateful$prime(initial)(function (last) {
            return function (next) {
                var d = f(last)(next);
                return new Data_Tuple.Tuple(d, next);
            };
        });
    };
};
var choiceSF = new Data_Profunctor_Choice.Choice(function () {
    return profunctorSF;
}, function (s) {
    return function (e) {
        if (e instanceof Data_Either.Left) {
            var _1714 = runSF(s)(e.value0);
            return {
                result: new Data_Either.Left(_1714.result), 
                next: Data_Profunctor_Choice.left(choiceSF)(_1714.next)
            };
        };
        if (e instanceof Data_Either.Right) {
            return {
                result: new Data_Either.Right(e.value0), 
                next: Data_Profunctor_Choice.left(choiceSF)(s)
            };
        };
        throw new Error("Failed pattern match");
    };
}, function (s) {
    return function (e) {
        if (e instanceof Data_Either.Left) {
            return {
                result: new Data_Either.Left(e.value0), 
                next: Data_Profunctor_Choice.right(choiceSF)(s)
            };
        };
        if (e instanceof Data_Either.Right) {
            var _1719 = runSF(s)(e.value0);
            return {
                result: new Data_Either.Right(_1719.result), 
                next: Data_Profunctor_Choice.right(choiceSF)(_1719.next)
            };
        };
        throw new Error("Failed pattern match");
    };
});
var categorySF = new Prelude.Category(function () {
    return semigroupoidSF;
}, input);
var applySF1 = new Prelude.Apply(function (_393) {
    return function (_394) {
        return {
            result: _393.result(_394.result), 
            next: Prelude["<*>"](applySF)(_393.next)(_394.next)
        };
    };
}, function () {
    return functorSF1;
});
var applySF = new Prelude.Apply(function (f) {
    return function (x) {
        return function (i) {
            return Prelude["<*>"](applySF1)(runSF(f)(i))(runSF(x)(i));
        };
    };
}, function () {
    return functorSF;
});
var applicativeSF1 = new Prelude.Applicative(function () {
    return applySF1;
}, function (a) {
    return {
        result: a, 
        next: Prelude.pure(applicativeSF)(a)
    };
});
var applicativeSF = new Prelude.Applicative(function () {
    return applySF;
}, function (a) {
    return function (_382) {
        return Prelude.pure(applicativeSF1)(a);
    };
});
module.exports = {
    "mergeWith'": mergeWith$prime, 
    mergeWith: mergeWith, 
    tail: tail, 
    head: head, 
    startingAt: startingAt, 
    loop: loop, 
    differencesWith: differencesWith, 
    "stateful'": stateful$prime, 
    stateful: stateful, 
    input: input, 
    runSF1: runSF1, 
    runSF: runSF, 
    functorSF: functorSF, 
    functorSF1: functorSF1, 
    applySF: applySF, 
    applySF1: applySF1, 
    applicativeSF: applicativeSF, 
    applicativeSF1: applicativeSF1, 
    profunctorSF: profunctorSF, 
    profunctorSF1: profunctorSF1, 
    strongSF: strongSF, 
    choiceSF: choiceSF, 
    semigroupoidSF: semigroupoidSF, 
    semigroupoidSF1: semigroupoidSF1, 
    categorySF: categorySF
};
