import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './registerForm';
import SuccessfulRegister from './registered';

class RegistrationVerification extends React.Component {

    componentDidMount() {
        // Do a fancy enter animation
        document.getElementsByClassName('content-container')[0].classList.add('slide-in-right');

        const values = { ...this.props.values }

        // User needs to change a value, transition back to the registration form with prefilled data
        document.getElementById('makeChange').addEventListener('click', () => {

            // Do a fancy exit animation
            document.getElementsByClassName('content-container')[0].classList.remove('slide-in-right');
            document.getElementsByClassName('content-container')[0].classList.add('slide-out-right');
            setTimeout(() => {
                ReactDOM.render(<RegisterForm values={values} />, document.getElementById('root'));
            }, 600);
        });

        // User confirms they've entered the correct info. Send the form and load the success page
        document.getElementById('verified').addEventListener('click', () => {
            this.sendForm(values);
            this.renderSuccess();
        });

        window.addEventListener('keydown', (event) => {
            if (event.keyCode === 13) {
                this.sendForm(values);
                this.renderSuccess();
            }
        })

    }

    sendForm(newApplicaant) {
        const xhr = new XMLHttpRequest();

        xhr.open('POST', '/users/register', true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = () => {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log('Sent');
            }
        }

        xhr.send(JSON.stringify(newApplicaant));
    }

    renderSuccess() {
        document.getElementById('background').classList.remove('form-active');

        // Do a fancy exit animation
        document.getElementsByClassName('content-container')[0].classList.remove('slide-in-right');
        document.getElementsByClassName('content-container')[0].classList.add('slide-out-left');
        setTimeout(() => {
            ReactDOM.render(<SuccessfulRegister />, document.getElementById('root'));
        }, 600);
    }

    render() {

        // Extract our form values from the prop into variables for easier access
        const { firstName, lastName, email, address1, address2, city, state, zip, schoolCompany, status, paymentType } = this.props.values;

        let address = '';
        if (address2) {
            address = (<p className='field-value text-capitalize'>
                {address1}<br />
                {address2}<br />
                {city}, {state} {zip}
            </p>);
        } else {
            address = (<p className='field-value text-capitalize'>
                {address1}<br />
                {city}, {state} {zip}
            </p>);
        }

        return (
            <div className='content-container d-inline-flex'>
                <h1 className='thin-text mt-2 mb-5'>Is everything correct?</h1>

                <div className='d-flex flex-column verification-container mb-3'>

                    <div className='field-collection'>
                        <p className='field-label'>Full Name</p>
                        <p className='field-value'>{firstName + ' ' + lastName}</p>
                    </div>

                    <div className='field-collection'>
                        <p className='field-label'>Email Address</p>
                        <p className='field-value'>{email}</p>
                    </div>

                    <div className='field-collection'>
                        <p className='field-label'>Street Address</p>
                        {address}
                    </div>

                    <div className='field-collection'>
                        <p className='field-label'>School or Company</p>
                        <p className='field-value'>{schoolCompany === '' ? 'N/A' : schoolCompany}</p>
                    </div>


                    <div className='field-collection'>
                        <p className='field-label'>Status</p>
                        <p className='field-value'>{status}</p>
                    </div>


                    <div className='field-collection'>
                        <p className='field-label'>Payment Type</p>
                        <p className='field-value'>{paymentType}</p>
                    </div>
                </div>


                <div className='d-flex w-100 mt-2'>
                    <button className='btn btn-secondary' id="makeChange">Make a change</button>
                    <button className='btn ml-auto' id='verified'>That's me</button>
                </div>
            </div>
        );
    }
}

export default RegistrationVerification;