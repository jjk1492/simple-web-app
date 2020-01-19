'use strict';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { valuue: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Form Submitted');
        event.preventDefault();
    }

    render() {
        return (
            <div className="content-container">
                <h1 className="thin-text">Tell us about yourself</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col-12 col-md-6">
                            <textarea className="form-control" value={this.state.value} onChange={this.handleChange} id="firstName" placeholder="First Name" />
                        </div>

                        <div className="col-12 col-md-6">
                            <textarea className="form-control" value={this.state.value} onChange={this.handleChange} id="lastName" placeholder="Last Name" />
                        </div>

                    </div>
                    <input type="submit" className="btn" value="Continue" />
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
                <h1 className="bold-text">Web Developer Conference</h1>
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