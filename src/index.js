'use strict';

class SelectField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.options[0] };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({ value: event.target.value });
    }

    render(){
        const optionElements = [];
        let i = 0;
        this.props.options.forEach(element => {
            optionElements.push(
                <option key={i++} value={element}>{element}</option>
            )
        });
        return (
            <div className={'form-group ' + this.props.additionalClasses}>
                <select id={this.props.id} className='form-control' value={this.state.value} onChange={this.handleChange}>
                    {optionElements}
                </select>
            </div>
        );
    }
}

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className={'form-group ' + this.props.additionalClasses}>
                <input
                    type={this.props.type}
                    className='form-control'
                    value={this.state.value}
                    onChange={this.handleChange}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }

}
class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert('Form Submitted');
        event.preventDefault();
    }

    render() {
        return (
            <div className='content-container'>

                <form onSubmit={this.handleSubmit}>
                    <h1 className='thin-text'>Tell us about yourself</h1>

                    <div className='form-row'>
                        <TextField id='firstName' placeholder='First Name' type='text' additionalClasses='col-12 col-md-6' />
                        <TextField id='lastName' placeholder='Last Name' type='text' additionalClasses='col-12 col-md-6' />
                    </div>

                    <TextField id='email' placeholder='Email Address' type='email' />
                    <TextField id='address1' placeholder='Street Address 1' type='text' />
                    <TextField id='address2' placeholder='Street Address 2' type='text' />
                    
                    <div className='form-row'>
                        <TextField id='city' placeholder='City' type='text' additionalClasses='col-12 col-md-6'/>
                        <SelectField 
                        id='state' 
                        additionalClasses='col-6 col-md-3'
                        options={['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']}
                        />
                        <TextField id='zip' placeholder='Zip Code' type='text' additionalClasses='col-6 col-md-3'/>
                    </div>
                    <TextField id='schoolCompany' placeholder='School/Company' type='text' />
                    <SelectField
                    id='status'
                    options={['Undergraduate Student', 'Graduate Student', 'Professor', 'Industry Employee']}
                    />
                    <SelectField
                    id='paymentType'
                    options={['Visa', 'Mastercard', 'American Express', 'Discover']}
                    />
                    
                    <button type='submit' className='btn'>Continue</button>

                </form>
            </div>
        );
    }
}


class TitleMarkup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span className='h1 thin-text'>8<sup>th</sup> Annual</span>
                <h1 className='bold-text'>Web Developer Conference</h1>
            </div>
        );
    }
}

class InfoMarkup extends React.Component {
    s
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='info'>
                <p className='thin-text'>Conference Dates</p>
                <p className='bold-text'>
                    April 18-22, 2020<br />
                    11 am - 3 pm
                    </p>
            </div>
        );
    }
}

class CTAMarkup extends React.Component {
    constructor(props) {
        super(props);
    }

    showRegister() {
        ReactDOM.render(<RegisterForm />, document.getElementById('root'));
    }

    render() {
        return (
            <div className='cta'>
                <button className='btn btn-xl' onClick={this.showRegister}>Get my tickets</button>
            </div>
        );
    }
}

class IndexMarkup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    render() {
        return (
            <div className='content-container'>
                <TitleMarkup />
                <InfoMarkup />
                <CTAMarkup />
            </div>
        );
    }
}


let domContainer = document.querySelector('#root');
ReactDOM.render(<IndexMarkup />, domContainer);