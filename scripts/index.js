'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterForm = function (_React$Component) {
    _inherits(RegisterForm, _React$Component);

    function RegisterForm(props) {
        _classCallCheck(this, RegisterForm);

        var _this = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));

        _this.state = { valuue: '' };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(RegisterForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('Form Submitted');
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'div',
                    { className: 'form-row' },
                    React.createElement('textarea', { className: 'col-12 col-md-6', value: this.state.value, onChange: this.handleChange, id: 'firstName', placeholder: 'First Name' }),
                    React.createElement('textarea', { className: 'col-12 col-md-6', value: this.state.value, onChange: this.handleChange, id: 'lastName', placeholder: 'Last Name' })
                ),
                React.createElement('input', { type: 'submit', value: 'Continue' })
            );
        }
    }]);

    return RegisterForm;
}(React.Component);

var TitleMarkup = function (_React$Component2) {
    _inherits(TitleMarkup, _React$Component2);

    function TitleMarkup(props) {
        _classCallCheck(this, TitleMarkup);

        return _possibleConstructorReturn(this, (TitleMarkup.__proto__ || Object.getPrototypeOf(TitleMarkup)).call(this, props));
    }

    _createClass(TitleMarkup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'span',
                    { className: 'h1 thin-text' },
                    '8',
                    React.createElement(
                        'sup',
                        null,
                        'th'
                    ),
                    ' Annual'
                ),
                React.createElement(
                    'h1',
                    { className: 'bold-text' },
                    'Web Developer Conference'
                )
            );
        }
    }]);

    return TitleMarkup;
}(React.Component);

var InfoMarkup = function (_React$Component3) {
    _inherits(InfoMarkup, _React$Component3);

    function InfoMarkup(props) {
        _classCallCheck(this, InfoMarkup);

        return _possibleConstructorReturn(this, (InfoMarkup.__proto__ || Object.getPrototypeOf(InfoMarkup)).call(this, props));
    }

    _createClass(InfoMarkup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'info' },
                React.createElement(
                    'p',
                    { className: 'thin-text' },
                    'Conference Dates'
                ),
                React.createElement(
                    'p',
                    { className: 'bold-text' },
                    'April 18-22, 2020',
                    React.createElement('br', null),
                    '11 am - 3 pm'
                )
            );
        }
    }]);

    return InfoMarkup;
}(React.Component);

var CTAMarkup = function (_React$Component4) {
    _inherits(CTAMarkup, _React$Component4);

    function CTAMarkup(props) {
        _classCallCheck(this, CTAMarkup);

        return _possibleConstructorReturn(this, (CTAMarkup.__proto__ || Object.getPrototypeOf(CTAMarkup)).call(this, props));
    }

    _createClass(CTAMarkup, [{
        key: 'showRegister',
        value: function showRegister() {
            ReactDOM.render(React.createElement(RegisterForm, null), document.getElementById('root'));
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'cta' },
                React.createElement(
                    'button',
                    { className: 'btn btn-xl', onClick: this.showRegister },
                    'Get my tickets'
                )
            );
        }
    }]);

    return CTAMarkup;
}(React.Component);

var IndexMarkup = function (_React$Component5) {
    _inherits(IndexMarkup, _React$Component5);

    function IndexMarkup(props) {
        _classCallCheck(this, IndexMarkup);

        var _this5 = _possibleConstructorReturn(this, (IndexMarkup.__proto__ || Object.getPrototypeOf(IndexMarkup)).call(this, props));

        _this5.state = { visible: true };
        return _this5;
    }

    _createClass(IndexMarkup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'content-container' },
                React.createElement(TitleMarkup, null),
                React.createElement(InfoMarkup, null),
                React.createElement(CTAMarkup, null)
            );
        }
    }]);

    return IndexMarkup;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(IndexMarkup, null), domContainer);