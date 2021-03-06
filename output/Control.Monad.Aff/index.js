// Generated by psc-make version 0.6.8
"use strict";
var Data_Function = require("Data.Function");
var Prelude = require("Prelude");
var Data_Monoid = require("Data.Monoid");
var Data_Either = require("Data.Either");
var Control_Monad_Error_Class = require("Control.Monad.Error.Class");
var Control_Monad_Eff_Exception = require("Control.Monad.Eff.Exception");
var Control_Apply = require("Control.Apply");
var Control_Alt = require("Control.Alt");
var Control_Plus = require("Control.Plus");
var Control_Alternative = require("Control.Alternative");
var Control_MonadPlus = require("Control.MonadPlus");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Control_Monad_Eff_Unsafe = require("Control.Monad.Eff.Unsafe");
var Control_Monad_Eff_Class = require("Control.Monad.Eff.Class");

    function _cancelWith(nonCanceler, aff, canceler1) {
      return function(success, error) {
        var canceler2 = aff(success, error);

        return function(e) {
          return function(success, error) {
            var cancellations = 0;
            var result        = false;
            var errored       = false;

            var s = function(bool) {
              cancellations = cancellations + 1;
              result        = result || bool;

              if (cancellations === 2 && !errored) {
                try {
                  success(result);
                } catch (e) {
                  error(e);
                }
              }
            };

            var f = function(err) {
              if (!errored) {
                errored = true;

                error(err);
              }
            };

            canceler2(e)(s, f);
            canceler1(e)(s, f);            

            return nonCanceler;
          };
        };
      };
    }
  ;

    function _setTimeout(nonCanceler, millis, aff) {
      return function(success, error) {
        var canceler;

        var timeout = setTimeout(function() {
          canceler = aff(success, error);
        }, millis);

        return function(e) {
          return function(s, f) {
            if (canceler !== undefined) {
              return canceler(e)(s, f);
            } else {
              clearTimeout(timeout);

              try {
                s(true);
              } catch (e) {
                f(e);
              }

              return nonCanceler;
            }
          };
        };
      };
    }
  ;

    function _unsafeInterleaveAff(aff) {
      return aff;
    }
  ;

    function _forkAff(nonCanceler, aff) {
      var voidF = function(){};

      return function(success, error) {
        var canceler = aff(voidF, voidF);

        try {
          success(canceler);
        } catch (e) {
          error(e);
        }

        return nonCanceler;
      };
    }
  ;

    function _makeAff(cb) {
      return function(success, error) {
        return cb(function(e) {
          return function() {
            error(e);
          };
        })(function(v) {
          return function() {
            try {
              success(v);
            } catch (e) {
              error(e);
            }
          };
        })();
      }
    }
    ;

    function _pure(canceler, v) {
      return function(success, error) {
        try {
          success(v);
        } catch (e) {
          error(e);
        }

        return canceler;
      }
    };

    function _throwError(canceler, e) {
      return function(success, error) {
        error(e);

        return canceler;
      };
    };

    function _fmap(f, aff) {
      return function(success, error) {
        return aff(function(v) {
          try {
            success(f(v));
          } catch (e) {
            error(e);
          }
        }, error);
      };
    };

    function _bind(alwaysCanceler, aff, f) {
      return function(success, error) {
        var canceler1, canceler2;

        var isCanceled    = false;
        var requestCancel = false;

        var onCanceler = function(){};

        canceler1 = aff(function(v) {
          if (requestCancel) {
            isCanceled = true;

            return alwaysCanceler;
          } else {
            canceler2 = f(v)(success, error);

            onCanceler(canceler2);

            return canceler2;
          }
        }, error);

        return function(e) {
          return function(s, f) {
            requestCancel = true;

            if (canceler2 !== undefined) {
              return canceler2(e)(s, f);
            } else {
              return canceler1(e)(function(bool) {
                if (bool || isCanceled) {
                  try {
                    s(true);
                  } catch (e) {
                    f(e);
                  }
                } else {
                  onCanceler = function(canceler) {
                    canceler(e)(s, f);
                  };
                }
              }, f);
            }
          };
        };
      };
    };

    function _attempt(Left, Right, aff) {
      return function(success, error) {
        return aff(function(v) {
          try {
            success(Right(v));
          } catch (e) {
            error(e);
          }
        }, function(e) {
          try {
            success(Left(e));
          } catch (e) {
            error(e);
          }
        });
      };
    };

    function _runAff(errorT, successT, aff) {
      return function() {
        return aff(function(v) {
          try {
            successT(v)();
          } catch (e) {
            errorT(e)();
          }
        }, function(e) {
          errorT(e)();
        });
      };
    };

    function _liftEff(canceler, e) {
      return function(success, error) {
        try {
          success(e());
        } catch (e) {
          error(e);
        }

        return canceler;
      };
    };

/**
 *  | A canceler is asynchronous function that can be used to attempt the 
 *  | cancelation of a computation. Returns a boolean flag indicating whether
 *  | or not the cancellation was successful.
 */
var Canceler = function (x) {
    return x;
};

/**
 *  | Runs the asynchronous computation. You must supply an error callback and a
 *  | success callback.
 */
var runAff = function (ex) {
    return function (f) {
        return function (aff) {
            return _runAff(ex, f, aff);
        };
    };
};

/**
 *  | Creates an asynchronous effect from a function that accepts error and
 *  | success callbacks, and returns a canceler for the computation. This
 *  | function can be used for asynchronous computations that can be canceled.
 */
var makeAff$prime = function (h) {
    return _makeAff(h);
};

/**
 *  | Converts the asynchronous computation into a synchronous one. All values
 *  | and errors are ignored.
 */
var launchAff = runAff(Prelude["const"](Prelude.pure(Control_Monad_Eff.applicativeEff)(Prelude.unit)))(Prelude["const"](Prelude.pure(Control_Monad_Eff.applicativeEff)(Prelude.unit)));
var functorAff = new Prelude.Functor(function (f) {
    return function (fa) {
        return _fmap(f, fa);
    };
});

/**
 *  | Unwraps the canceler function from the newtype that wraps it.
 */
var cancel = function (_361) {
    return _361;
};

/**
 *  | Promotes any error to the value level of the asynchronous monad.
 */
var attempt = function (aff) {
    return _attempt(Data_Either.Left.create, Data_Either.Right.create, aff);
};

/**
 *  | Ignores any errors.
 */
var apathize = function (a) {
    return Prelude["<$>"](functorAff)(Prelude["const"](Prelude.unit))(attempt(a));
};
var applyAff = new Prelude.Apply(function (ff) {
    return function (fa) {
        return _bind(alwaysCanceler, ff, function (f) {
            return Prelude["<$>"](functorAff)(f)(fa);
        });
    };
}, function () {
    return functorAff;
});
var applicativeAff = new Prelude.Applicative(function () {
    return applyAff;
}, function (v) {
    return _pure(nonCanceler, v);
});
var nonCanceler = Prelude["const"](Prelude.pure(applicativeAff)(false));
var alwaysCanceler = Prelude["const"](Prelude.pure(applicativeAff)(true));

/**
 *  | This function allows you to attach a custom canceler to an asynchronous
 *  | computation. If the computation is canceled, then the custom canceler 
 *  | will be run along side the computation's own canceler.
 */
var cancelWith = function (aff) {
    return function (c) {
        return _cancelWith(nonCanceler, aff, c);
    };
};

/**
 *  | Forks the specified asynchronous computation so subsequent monadic binds
 *  | will not block on the result of the computation.
 */
var forkAff = function (aff) {
    return _forkAff(nonCanceler, aff);
};

/**
 *  | Runs the asynchronous computation later (off the current execution context).
 */
var later$prime = function (n) {
    return function (aff) {
        return _setTimeout(nonCanceler, n, aff);
    };
};

/**
 *  | Runs the asynchronous computation off the current execution context.
 */
var later = later$prime(0);

/**
 *  | Lifts a synchronous computation and makes explicit any failure from exceptions.
 */
var liftEff$prime = function (eff) {
    return attempt(_unsafeInterleaveAff(_liftEff(nonCanceler, eff)));
};

/**
 *  | Creates an asynchronous effect from a function that accepts error and
 *  | success callbacks. This function can be used for asynchronous computations
 *  | that cannot be canceled.
 */
var makeAff = function (h) {
    return makeAff$prime(function (e) {
        return function (a) {
            return Prelude["<$>"](Control_Monad_Eff.functorEff)(Prelude["const"](nonCanceler))(h(e)(a));
        };
    });
};
var semigroupAff = function (__dict_Semigroup_0) {
    return new Prelude.Semigroup(function (a) {
        return function (b) {
            return Prelude["<*>"](applyAff)(Prelude["<$>"](functorAff)(Prelude["<>"](__dict_Semigroup_0))(a))(b);
        };
    });
};
var monoidAff = function (__dict_Monoid_1) {
    return new Data_Monoid.Monoid(function () {
        return semigroupAff(__dict_Monoid_1["__superclass_Prelude.Semigroup_0"]());
    }, Prelude.pure(applicativeAff)(Data_Monoid.mempty(__dict_Monoid_1)));
};
var semigroupCanceler = new Prelude.Semigroup(function (_362) {
    return function (_363) {
        return function (e) {
            return Prelude["<*>"](applyAff)(Prelude["<$>"](functorAff)(Prelude["||"](Prelude.boolLikeBoolean))(_362(e)))(_363(e));
        };
    };
});
var monoidCanceler = new Data_Monoid.Monoid(function () {
    return semigroupCanceler;
}, Prelude["const"](Prelude.pure(applicativeAff)(true)));
var bindAff = new Prelude.Bind(function (fa) {
    return function (f) {
        return _bind(alwaysCanceler, fa, f);
    };
}, function () {
    return applyAff;
});
var monadAff = new Prelude.Monad(function () {
    return applicativeAff;
}, function () {
    return bindAff;
});
var monadEffAff = new Control_Monad_Eff_Class.MonadEff(function () {
    return monadAff;
}, function (eff) {
    return _liftEff(nonCanceler, eff);
});

/**
 *  | Allows users to catch and throw errors on the error channel of the
 *  | asynchronous computation. See documentation in `purescript-transformers`.
 */
var monadErrorAff = new Control_Monad_Error_Class.MonadError(function (aff) {
    return function (ex) {
        return Prelude[">>="](bindAff)(attempt(aff))(Data_Either.either(ex)(Prelude.pure(applicativeAff)));
    };
}, function (e) {
    return _throwError(nonCanceler, e);
});
var altAff = new Control_Alt.Alt(function (a1) {
    return function (a2) {
        return Prelude[">>="](bindAff)(attempt(a1))(Data_Either.either(Prelude["const"](a2))(Prelude.pure(applicativeAff)));
    };
}, function () {
    return functorAff;
});
var plusAff = new Control_Plus.Plus(function () {
    return altAff;
}, Control_Monad_Error_Class.throwError(monadErrorAff)(Control_Monad_Eff_Exception.error("Always fails")));
var alternativeAff = new Control_Alternative.Alternative(function () {
    return plusAff;
}, function () {
    return applicativeAff;
});
var monadPlusAff = new Control_MonadPlus.MonadPlus(function () {
    return alternativeAff;
}, function () {
    return monadAff;
});
module.exports = {
    Canceler: Canceler, 
    runAff: runAff, 
    nonCanceler: nonCanceler, 
    "makeAff'": makeAff$prime, 
    makeAff: makeAff, 
    "liftEff'": liftEff$prime, 
    launchAff: launchAff, 
    "later'": later$prime, 
    later: later, 
    forkAff: forkAff, 
    cancelWith: cancelWith, 
    cancel: cancel, 
    attempt: attempt, 
    apathize: apathize, 
    semigroupAff: semigroupAff, 
    monoidAff: monoidAff, 
    functorAff: functorAff, 
    applyAff: applyAff, 
    applicativeAff: applicativeAff, 
    bindAff: bindAff, 
    monadAff: monadAff, 
    monadEffAff: monadEffAff, 
    monadErrorAff: monadErrorAff, 
    altAff: altAff, 
    plusAff: plusAff, 
    alternativeAff: alternativeAff, 
    monadPlusAff: monadPlusAff, 
    semigroupCanceler: semigroupCanceler, 
    monoidCanceler: monoidCanceler
};
