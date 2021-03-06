// Generated by psc-make version 0.6.8

/**
 *  | Utilities for n-eithers: sums types with more than two terms built from nested eithers.
 *  |
 *  | Nested eithers arise naturally in sum combinators. You shouldn't 
 *  | represent sum data using nested eithers, but if combinators you're working with
 *  | create them, utilities in this module will allow to to more easily work
 *  | with them, including translating to and from more traditional sum types.
 *  | 
 *  | ```purescript
 *  | data Color = Red Number | Green Number | Blue Number
 *  |
 *  | toEither3 :: Color -> Either3 Number Number Number
 *  | toEither3 = either3 Red Green Blue
 *  |
 *  | fromEither3 :: Either3 Number Number Number -> Color
 *  | fromEither3 (Red   v) = either1of3
 *  | fromEither3 (Green v) = either2of3
 *  | fromEither3 (Blue  v) = either3of3
 *  | ```
 */
"use strict";
var Data_Either = require("Data.Either");
var Prelude = require("Prelude");
var either9of9 = function (v) {
    return new Data_Either.Right(v);
};
var either9of10 = function (v) {
    return new Data_Either.Left(new Data_Either.Right(v));
};
var either8of9 = function (v) {
    return new Data_Either.Left(new Data_Either.Right(v));
};
var either8of8 = function (v) {
    return new Data_Either.Right(v);
};
var either8of10 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)));
};
var either7of9 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)));
};
var either7of8 = function (v) {
    return new Data_Either.Left(new Data_Either.Right(v));
};
var either7of7 = function (v) {
    return new Data_Either.Right(v);
};
var either7of10 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))));
};
var either6of9 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))));
};
var either6of8 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)));
};
var either6of7 = function (v) {
    return new Data_Either.Left(new Data_Either.Right(v));
};
var either6of6 = function (v) {
    return new Data_Either.Right(v);
};
var either6of10 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)))));
};
var either5of9 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)))));
};
var either5of8 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))));
};
var either5of7 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)));
};
var either5of6 = function (v) {
    return new Data_Either.Left(new Data_Either.Right(v));
};
var either5of5 = function (v) {
    return new Data_Either.Right(v);
};
var either5of10 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))))));
};
var either4of9 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))))));
};
var either4of8 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)))));
};
var either4of7 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))));
};
var either4of6 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)));
};
var either4of5 = function (v) {
    return new Data_Either.Left(new Data_Either.Right(v));
};
var either4of4 = function (v) {
    return new Data_Either.Right(v);
};
var either4of10 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)))))));
};
var either3of9 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)))))));
};
var either3of8 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))))));
};
var either3of7 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)))));
};
var either3of6 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))));
};
var either3of5 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)));
};
var either3of4 = function (v) {
    return new Data_Either.Left(new Data_Either.Right(v));
};
var either3of3 = function (v) {
    return new Data_Either.Right(v);
};
var either3of10 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))))))));
};
var either2of9 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))))))));
};
var either2of8 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)))))));
};
var either2of7 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))))));
};
var either2of6 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)))));
};
var either2of5 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v))));
};
var either2of4 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)));
};
var either2of3 = function (v) {
    return new Data_Either.Left(new Data_Either.Right(v));
};
var either2of2 = Data_Either.Right.create;
var either2of10 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Right(v)))))))));
};
var either2 = Data_Either.either;
var either3 = function (a) {
    return function (b) {
        return function (z) {
            return Data_Either.either(either2(a)(b))(z);
        };
    };
};
var either4 = function (a) {
    return function (b) {
        return function (c) {
            return function (z) {
                return Data_Either.either(either3(a)(b)(c))(z);
            };
        };
    };
};
var either5 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (z) {
                    return Data_Either.either(either4(a)(b)(c)(d))(z);
                };
            };
        };
    };
};
var either6 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (z) {
                        return Data_Either.either(either5(a)(b)(c)(d)(e))(z);
                    };
                };
            };
        };
    };
};
var either7 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (z) {
                            return Data_Either.either(either6(a)(b)(c)(d)(e)(f))(z);
                        };
                    };
                };
            };
        };
    };
};
var either8 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return function (z) {
                                return Data_Either.either(either7(a)(b)(c)(d)(e)(f)(g))(z);
                            };
                        };
                    };
                };
            };
        };
    };
};
var either9 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return function (h) {
                                return function (z) {
                                    return Data_Either.either(either8(a)(b)(c)(d)(e)(f)(g)(h))(z);
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

/**
 *  Either9
 */
var either1of9 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(v))))))));
};

/**
 *  Either8
 */
var either1of8 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(v)))))));
};

/**
 *  Either7
 */
var either1of7 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(v))))));
};

/**
 *  Either6
 */
var either1of6 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(v)))));
};

/**
 *  Either5
 */
var either1of5 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(v))));
};

/**
 *  Either4
 */
var either1of4 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(v)));
};

/**
 *  Either3
 */
var either1of3 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(v));
};

/**
 *  Either2
 */
var either1of2 = Data_Either.Left.create;

/**
 *  Either10
 */
var either1of10 = function (v) {
    return new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(new Data_Either.Left(v)))))))));
};
var either10of10 = function (v) {
    return new Data_Either.Right(v);
};
var either10 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return function (h) {
                                return function (i) {
                                    return function (z) {
                                        return Data_Either.either(either9(a)(b)(c)(d)(e)(f)(g)(h)(i))(z);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
module.exports = {
    either10: either10, 
    either9: either9, 
    either8: either8, 
    either7: either7, 
    either6: either6, 
    either5: either5, 
    either4: either4, 
    either3: either3, 
    either2: either2, 
    either10of10: either10of10, 
    either9of10: either9of10, 
    either8of10: either8of10, 
    either7of10: either7of10, 
    either6of10: either6of10, 
    either5of10: either5of10, 
    either4of10: either4of10, 
    either3of10: either3of10, 
    either2of10: either2of10, 
    either1of10: either1of10, 
    either9of9: either9of9, 
    either8of9: either8of9, 
    either7of9: either7of9, 
    either6of9: either6of9, 
    either5of9: either5of9, 
    either4of9: either4of9, 
    either3of9: either3of9, 
    either2of9: either2of9, 
    either1of9: either1of9, 
    either8of8: either8of8, 
    either7of8: either7of8, 
    either6of8: either6of8, 
    either5of8: either5of8, 
    either4of8: either4of8, 
    either3of8: either3of8, 
    either2of8: either2of8, 
    either1of8: either1of8, 
    either7of7: either7of7, 
    either6of7: either6of7, 
    either5of7: either5of7, 
    either4of7: either4of7, 
    either3of7: either3of7, 
    either2of7: either2of7, 
    either1of7: either1of7, 
    either6of6: either6of6, 
    either5of6: either5of6, 
    either4of6: either4of6, 
    either3of6: either3of6, 
    either2of6: either2of6, 
    either1of6: either1of6, 
    either5of5: either5of5, 
    either4of5: either4of5, 
    either3of5: either3of5, 
    either2of5: either2of5, 
    either1of5: either1of5, 
    either4of4: either4of4, 
    either3of4: either3of4, 
    either2of4: either2of4, 
    either1of4: either1of4, 
    either3of3: either3of3, 
    either2of3: either2of3, 
    either1of3: either1of3, 
    either2of2: either2of2, 
    either1of2: either1of2
};
