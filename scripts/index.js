'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectField = function (_React$Component) {
    _inherits(SelectField, _React$Component);

    function SelectField(props) {
        _classCallCheck(this, SelectField);

        var _this = _possibleConstructorReturn(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).call(this, props));

        _this.state = { value: props.options[0] };

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(SelectField, [{
        key: 'handleChange',
        value: function handleChange() {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var optionElements = [];
            var i = 0;
            this.props.options.forEach(function (element) {
                optionElements.push(React.createElement(
                    'option',
                    { key: i++, value: element },
                    element
                ));
            });
            return React.createElement(
                'div',
                { className: 'form-group ' + this.props.additionalClasses },
                React.createElement(
                    'select',
                    { id: this.props.id, className: 'form-control', value: this.state.value, onChange: this.handleChange },
                    optionElements
                )
            );
        }
    }]);

    return SelectField;
}(React.Component);

var TextField = function (_React$Component2) {
    _inherits(TextField, _React$Component2);

    function TextField(props) {
        _classCallCheck(this, TextField);

        var _this2 = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

        _this2.state = { value: '' };

        _this2.handleChange = _this2.handleChange.bind(_this2);
        return _this2;
    }

    _createClass(TextField, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'form-group ' + this.props.additionalClasses },
                React.createElement('input', {
                    type: this.props.type,
                    className: 'form-control',
                    value: this.state.value,
                    onChange: this.handleChange,
                    id: this.props.id,
                    placeholder: this.props.placeholder
                })
            );
        }
    }]);

    return TextField;
}(React.Component);

var RegisterForm = function (_React$Component3) {
    _inherits(RegisterForm, _React$Component3);

    function RegisterForm(props) {
        _classCallCheck(this, RegisterForm);

        var _this3 = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));

        _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
        return _this3;
    }

    _createClass(RegisterForm, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('Form Submitted');
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'content-container' },
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement(
                        'h1',
                        { className: 'thin-text' },
                        'Tell us about yourself'
                    ),
                    React.createElement(
                        'div',
                        { className: 'form-row' },
                        React.createElement(TextField, { id: 'firstName', placeholder: 'First Name', type: 'text', additionalClasses: 'col-12 col-md-6' }),
                        React.createElement(TextField, { id: 'lastName', placeholder: 'Last Name', type: 'text', additionalClasses: 'col-12 col-md-6' })
                    ),
                    React.createElement(TextField, { id: 'email', placeholder: 'Email Address', type: 'email' }),
                    React.createElement(TextField, { id: 'address1', placeholder: 'Street Address 1', type: 'text' }),
                    React.createElement(TextField, { id: 'address2', placeholder: 'Street Address 2', type: 'text' }),
                    React.createElement(
                        'div',
                        { className: 'form-row' },
                        React.createElement(TextField, { id: 'city', placeholder: 'City', type: 'text', additionalClasses: 'col-12 col-md-6' }),
                        React.createElement(SelectField, {
                            id: 'state',
                            additionalClasses: 'col-6 col-md-3',
                            options: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
                        }),
                        React.createElement(TextField, { id: 'zip', placeholder: 'Zip Code', type: 'text', additionalClasses: 'col-6 col-md-3' })
                    ),
                    React.createElement(TextField, { id: 'schoolCompany', placeholder: 'School/Company', type: 'text' }),
                    React.createElement(SelectField, {
                        id: 'status',
                        options: ['Undergraduate Student', 'Graduate Student', 'Professor', 'Industry Employee']
                    }),
                    React.createElement(SelectField, {
                        id: 'paymentType',
                        options: ['Visa', 'Mastercard', 'American Express', 'Discover']
                    }),
                    React.createElement(
                        'button',
                        { type: 'submit', className: 'btn' },
                        'Continue'
                    )
                )
            );
        }
    }]);

    return RegisterForm;
}(React.Component);

var TitleMarkup = function (_React$Component4) {
    _inherits(TitleMarkup, _React$Component4);

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

var InfoMarkup = function (_React$Component5) {
    _inherits(InfoMarkup, _React$Component5);

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

var CTAMarkup = function (_React$Component6) {
    _inherits(CTAMarkup, _React$Component6);

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

var IndexMarkup = function (_React$Component7) {
    _inherits(IndexMarkup, _React$Component7);

    function IndexMarkup(props) {
        _classCallCheck(this, IndexMarkup);

        var _this7 = _possibleConstructorReturn(this, (IndexMarkup.__proto__ || Object.getPrototypeOf(IndexMarkup)).call(this, props));

        _this7.state = { visible: true };
        return _this7;
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