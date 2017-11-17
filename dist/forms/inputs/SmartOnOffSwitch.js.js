(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'react', 'lodash'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('react'), require('lodash'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.react, global.lodash);
        global.SmartOnOffSwitchJs = mod.exports;
    }
})(this, function (module, _react, _lodash) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _lodash2 = _interopRequireDefault(_lodash);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var OnOffSwitch = function (_React$component) {
        _inherits(OnOffSwitch, _React$component);

        function OnOffSwitch() {
            _classCallCheck(this, OnOffSwitch);

            return _possibleConstructorReturn(this, (OnOffSwitch.__proto__ || Object.getPrototypeOf(OnOffSwitch)).apply(this, arguments));
        }

        _createClass(OnOffSwitch, [{
            key: 'render',
            value: function render() {
                var props = this.props;
                var id = props.id || _lodash2.default.uniqueId('on-off-switch');
                var title = props.title;
                var onText = props.onText || 'ON';
                var offText = props.offText || 'OFF';
                return _react2.default.createElement(
                    'form',
                    { className: 'smart-form register-row' },
                    _react2.default.createElement(
                        'fieldset',
                        null,
                        _react2.default.createElement(
                            'section',
                            null,
                            _react2.default.createElement(
                                'label',
                                { className: 'toggle' },
                                title,
                                _react2.default.createElement('input', { type: 'checkbox', name: 'checkbox-toggle-{id}', id: id, checked: props.checked, readOnly: true }),
                                _react2.default.createElement('i', { 'data-swchon-text': onText, 'data-swchoff-text': offText, onClick: props.onToggle })
                            )
                        )
                    )
                );
            }
        }]);

        return OnOffSwitch;
    }(_react2.default.component);

    ;

    module.exports = OnOffSwitch;
});