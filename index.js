'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var TitleMarkup = function (_React$component) {
    _inherits(TitleMarkup, _React$component);

    function TitleMarkup(props) {
        _classCallCheck(this, TitleMarkup);

        var _this = _possibleConstructorReturn(this, (TitleMarkup.__proto__ || Object.getPrototypeOf(TitleMarkup)).call(this, props));

        _this.state = { visible: true };
        return _this;
    }

    _createClass(TitleMarkup, [{
        key: 'render',
        value: function render() {
            if (this.state.visible) {
                return e('div', {}, e('span', { class: 'h1 thin-text' }, '8th Annual'), e('h1', { class: 'bold-text' }, 'Web Developer Conference'));
            }
        }
    }]);

    return TitleMarkup;
}(React.component);

var rootContainer = document.querySelector('#root');
ReactDOM.render(e(TitleMarkup), rootContainer);