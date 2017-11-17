(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './SmartOnOffSwitch.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./SmartOnOffSwitch.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.SmartOnOffSwitch);
    global.index = mod.exports;
  }
})(this, function (exports, _SmartOnOffSwitch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _SmartOnOffSwitch2 = _interopRequireDefault(_SmartOnOffSwitch);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Inputs = {
    SmartOnOffSwitch: _SmartOnOffSwitch2.default
  };

  exports.default = Inputs;
});