// Generated by psc-make version 0.6.8
"use strict";
var Prelude = require("Prelude");

  function fromNumber(n) {
    return n|0;
  }
  ;

  function intAdd(x) {
    return function(y) {
      return (x + y)|0;
    };
  }
  ;

  function intMul(x) {
    return function(y) {
      return (x * y)|0;
    };
  }
  ;

  function intDiv(x) {
    return function(y) {
      return (x / y)|0;
    };
  }
  ;

  function intMod(x) {
    return function(y) {
      return x % y;
    };
  }
  ;

  function intSub(x) {
    return function(y) {
      return (x - y)|0;
    };
  }
  ;
var Int = function (x) {
    return x;
};
var toNumber = function (_60) {
    return _60;
};
var showInt = new Prelude.Show(function (_61) {
    return "fromNumber " + Prelude.show(Prelude.showNumber)(_61);
});
var semiringInt = new Prelude.Semiring(intMul, intAdd, 1, 0);
var ringInt = new Prelude.Ring(intSub, function () {
    return semiringInt;
});
var moduloSemiringInt = new Prelude.ModuloSemiring(intDiv, function () {
    return semiringInt;
}, intMod);
var eqInt = new Prelude.Eq(function (_64) {
    return function (_65) {
        return _64 !== _65;
    };
}, function (_62) {
    return function (_63) {
        return _62 === _63;
    };
});
var ordInt = new Prelude.Ord(function () {
    return eqInt;
}, function (_66) {
    return function (_67) {
        return Prelude.compare(Prelude.ordNumber)(_66)(_67);
    };
});
module.exports = {
    toNumber: toNumber, 
    fromNumber: fromNumber, 
    showInt: showInt, 
    eqInt: eqInt, 
    ordInt: ordInt, 
    semiringInt: semiringInt, 
    moduloSemiringInt: moduloSemiringInt, 
    ringInt: ringInt
};