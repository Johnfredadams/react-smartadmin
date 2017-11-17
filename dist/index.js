(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './forms/inputs/index.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./forms/inputs/index.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.index);
    global.index = mod.exports;
  }
})(this, function (exports, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var components = {
    forms: {
      inputs: _index2.default
    }
  }; // Demo component
  // this is only example component
  // you can find tests in __test__ folder

  exports.default = Components;
});