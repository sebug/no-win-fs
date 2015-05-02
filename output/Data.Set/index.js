// Generated by psc-make version 0.6.8

/**
 *  | This module defines a type of sets as balanced 2-3 trees, based on
 *  | <http://www.cs.princeton.edu/~dpw/courses/cos326-12/ass/2-3-trees.pdf>
 *  |
 *  | Qualified import is encouraged, so as to avoid name clashes with other modules.
 */
"use strict";
var Prelude = require("Prelude");
var Data_Map = require("Data.Map");
var Data_Array = require("Data.Array");
var Data_Tuple = require("Data.Tuple");
var Data_Foldable = require("Data.Foldable");
var Data_Maybe = require("Data.Maybe");

/**
 *  | `Set a` represents a set of values of type `a`
 */
var Set = (function () {
    function Set(value0) {
        this.value0 = value0;
    };
    Set.create = function (value0) {
        return new Set(value0);
    };
    return Set;
})();

/**
 *  | Form the union of two sets
 *  | 
 *  | Running time: `O(n * log(m))`
 */
var union = function (__dict_Ord_0) {
    return function (_792) {
        return function (_793) {
            return new Set(Data_Map.union(__dict_Ord_0)(_792.value0)(_793.value0));
        };
    };
};

/**
 *  | Convert a set to an array
 */
var toList = function (_791) {
    return Data_Array.map(Data_Tuple.fst)(Data_Map.toList(_791.value0));
};

/**
 *  | Create a set with one element
 */
var singleton = function (a) {
    return new Set(Data_Map.singleton(a)(Prelude.unit));
};
var showSet = function (__dict_Show_1) {
    return new Prelude.Show(function (s) {
        return "fromList " + Prelude.show(Prelude.showArray(__dict_Show_1))(toList(s));
    });
};

/**
 *  | Test if a value is a member of a set
 */
var member = function (__dict_Ord_3) {
    return function (_785) {
        return function (_786) {
            return Data_Map.member(__dict_Ord_3)(_785)(_786.value0);
        };
    };
};

/**
 *  | Test if a set is empty
 */
var isEmpty = function (_783) {
    return Data_Map.isEmpty(_783.value0);
};

/**
 *  | Insert a value into a set
 */
var insert = function (__dict_Ord_4) {
    return function (_787) {
        return function (_788) {
            return new Set(Data_Map.insert(__dict_Ord_4)(_787)(Prelude.unit)(_788.value0));
        };
    };
};
var eqSet = function (__dict_Eq_5) {
    return new Prelude.Eq(function (_796) {
        return function (_797) {
            return Prelude["/="](Data_Map.eqMap(__dict_Eq_5)(Prelude.eqUnit))(_796.value0)(_797.value0);
        };
    }, function (_794) {
        return function (_795) {
            return Prelude["=="](Data_Map.eqMap(__dict_Eq_5)(Prelude.eqUnit))(_794.value0)(_795.value0);
        };
    });
};
var ordSet = function (__dict_Ord_2) {
    return new Prelude.Ord(function () {
        return eqSet(__dict_Ord_2["__superclass_Prelude.Eq_0"]());
    }, function (s1) {
        return function (s2) {
            return Prelude.compare(Prelude.ordArray(__dict_Ord_2))(toList(s1))(toList(s2));
        };
    });
};

/**
 *  | An empty set
 */
var empty = new Set(Data_Map.empty);

/**
 *  | Create a set from an array of elements
 */
var fromList = function (__dict_Ord_6) {
    return Data_Foldable.foldl(Data_Foldable.foldableArray)(function (m) {
        return function (a) {
            return insert(__dict_Ord_6)(a)(m);
        };
    })(empty);
};

/**
 *  | Form the union of a collection of sets
 */
var unions = function (__dict_Ord_7) {
    return Data_Foldable.foldl(Data_Foldable.foldableArray)(union(__dict_Ord_7))(empty);
};

/**
 *  | Delete a value from a set
 */
var $$delete = function (__dict_Ord_8) {
    return function (_789) {
        return function (_790) {
            return new Set(Data_Map["delete"](__dict_Ord_8)(_789)(_790.value0));
        };
    };
};

/**
 *  | Form the set difference
 */
var difference = function (__dict_Ord_9) {
    return function (s1) {
        return function (s2) {
            return Data_Foldable.foldl(Data_Foldable.foldableArray)(Prelude.flip($$delete(__dict_Ord_9)))(s1)(toList(s2));
        };
    };
};

/**
 *  | Check whether the underlying tree satisfies the 2-3 invariant
 *  | 
 *  | This function is provided for internal use.
 */
var checkValid = function (_784) {
    return Data_Map.checkValid(_784.value0);
};
module.exports = {
    difference: difference, 
    unions: unions, 
    union: union, 
    fromList: fromList, 
    toList: toList, 
    "delete": $$delete, 
    member: member, 
    insert: insert, 
    checkValid: checkValid, 
    singleton: singleton, 
    isEmpty: isEmpty, 
    empty: empty, 
    eqSet: eqSet, 
    showSet: showSet, 
    ordSet: ordSet
};
