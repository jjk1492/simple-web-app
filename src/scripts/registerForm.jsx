import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationVerification from './verifyRegistration';


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        if (props.values) {
            this.state = props.values;
            this.state.animation = {
                enter: 'slide-in-left',
                exit: 'slide-out-left'
            };

        }
        else {
            this.state = {
                firstName: '',
                lastName: '',
                email: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: '',
                schoolCompany: '',
                status: '',
                paymentType: '',
                valid: true
            };
            this.state.animation = {
                enter: 'slide-in-right',
                exit: 'slide-out-left'
            };
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.id;

        this.setState({
            [name]: value
        });
    }

    markValid(field) {
        if (field.classList.contains('invalid')) {
            field.classList.remove('invalid')
        }
        field.classList.add('valid');
    }

    markInvalid(field) {

        if (field.classList.contains('valid')) {
            field.classList.remove('valid')
        }
        field.classList.add('invalid');

        return false;
    }

    handleSubmit(event) {
        event.preventDefault();

        let valid = true

        // Validation Regex
        const firstNameValidation = /^[a-zA-Z][^ #&<>"~;$^%{}?0-9]{1,20}$/;
        const lastNameValidation = /^[a-zA-Z][^#&<>"~;$^%{}?]{1,20}$/;
        const emailVerification = /^[^@]+@[^.]+\..+$/;
        const addressVerification = /^^\d+\s[A-z]+\s[A-z]+\s*[A-z]*$/;
        const cityVerification = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
        const zipVerificatiom = /^[0-9]{5}$/;

        // form elements for verification and applying styles
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const address1 = document.getElementById('address1');
        const address2 = document.getElementById('address2');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const zip = document.getElementById('zip');
        const schoolCompany = document.getElementById('schoolCompany');
        const status = document.getElementById('status');
        const paymentType = document.getElementById('paymentType');



        // Match each value with its validation string. if value is valid, the field gets the valid class, else it gets the invalid class.
        (firstName.value.match(firstNameValidation) !== null) ? this.markValid(firstName) : valid = this.markInvalid(firstName);
        (lastName.value.match(lastNameValidation) !== null) ? this.markValid(lastName) : valid = this.markInvalid(lastName);
        (email.value.match(emailVerification) !== null) ? this.markValid(email) : valid = this.markInvalid(email);
        (address1.value.match(addressVerification) !== null) ? this.markValid(address1) : valid = this.markInvalid(address1);
        (city.value.match(cityVerification) !== null) ? this.markValid(city) : valid = this.markInvalid(city);
        (zip.value.match(zipVerificatiom) !== null) ? this.markValid(zip) : valid = this.markInvalid(zip);

        // The drop downs just need to be checked for a non-empty value
        (state.value !== '') ? this.markValid(state) : valid = this.markInvalid(state);
        (status.value !== '') ? this.markValid(status) : valid = this.markInvalid(status);
        (paymentType.value !== '') ? this.markValid(paymentType) : valid = this.markInvalid(paymentType);

        // These fields are not required so they're always valid
        this.markValid(schoolCompany);
        this.markValid(address2);

        if (valid) {
            const values = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                address1: address1.value,
                address2: address2.value,
                city: city.value,
                state: state.value,
                zip: zip.value,
                schoolCompany: schoolCompany.value,
                status: status.value,
                paymentType: paymentType.value
            }


            // Janky way of allowing my exit animation to run before the component dismounts and is 
            // removed from the DOM.
            document.getElementsByTagName('form')[0].classList.add(this.state.animation.exit);
            setTimeout(() => {
                ReactDOM.render(<RegistrationVerification values={values} />, document.getElementById('root'));
            }, 600);

        } else {
            valid = true;
        }


    }

    // Handle the loading animations
    componentDidMount() {
        document.getElementsByTagName('form')[0].classList.add(this.state.animation.enter);
        setTimeout(() => {
            document.getElementsByTagName('form')[0].classList.remove(this.state.animation.enter);
            document.getElementsByTagName('form')[0].classList.add('arrived');
        }, 600)
    }

    render() {
        return (
            <div className='content-container d-inline-flex'>

                <form className='needs-validation' noValidate={true} onSubmit={this.handleSubmit}>

                    <h3 className='thin-text mb-2'>Contact Details</h3>
                    <div className='form-row'>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label for='firstName'>First Name</label>
                                <input type='text' id='firstName' className='form-control' placeholder='Tony' onChange={this.handleChange} value={this.state.firstName} required={true} />

                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='form-group'>
                                <label for='lastName'>Last Name</label>
                                <input type='text' id='lastName' className='form-control' placeholder='Stark' onChange={this.handleChange} value={this.state.lastName} required={true} />
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label for='email'>Email</label>
                        <input type='email' id='email' className='form-control' placeholder='Tony@StarkIndustries.com' onChange={this.handleChange} value={this.state.email} required={true} />
                    </div>


                    <h3 className='thin-text mt-4 mb-2'>Mailing Details</h3>
                    <div className='form-group'>
                        <label for='address1'>Street Address 1</label>
                        <input type='text' id='address1' className='form-control' placeholder='10880 Malibu Point' onChange={this.handleChange} value={this.state.address1} required={true} />
                    </div>

                    <div className='form-group'>
                        <label for='address2'>Street Address 2</label>
                        <input type='text' id='address2' className='form-control' placeholder='Address Line 2' onChange={this.handleChange} value={this.state.address2} />
                    </div>

                    <div className='form-row'>
                        <div className='form-group col-12 col-md-6'>
                            <label for='city'>City</label>
                            <input type='text' id='city' className='form-control' placeholder='Malibu' onChange={this.handleChange} value={this.state.city} required={true} />
                        </div>



                        <div className='form-group col-6 col-md-3'>
                            <label for='state'>State</label>
                            <select id='state' className='custom-select' value={this.state.state} onChange={this.handleChange} required>
                                <option disabled value=''>State*</option>
                                <option>AL</option>
                                <option>AK</option>
                                <option>AZ</option>
                                <option>AR</option>
                                <option>CA</option>
                                <option>CO</option>
                                <option>CT</option>
                                <option>DE</option>
                                <option>FL</option>
                                <option>GA</option>
                                <option>HI</option>
                                <option>ID</option>
                                <option>IL</option>
                                <option>IN</option>
                                <option>IA</option>
                                <option>KS</option>
                                <option>KY</option>
                                <option>LA</option>
                                <option>ME</option>
                                <option>MD</option>
                                <option>MA</option>
                                <option>MI</option>
                                <option>MN</option>
                                <option>MS</option>
                                <option>MO</option>
                                <option>MT</option>
                                <option>NE</option>
                                <option>NV</option>
                                <option>NH</option>
                                <option>NJ</option>
                                <option>NM</option>
                                <option>NY</option>
                                <option>NC</option>
                                <option>ND</option>
                                <option>OH</option>
                                <option>OK</option>
                                <option>OR</option>
                                <option>PA</option>
                                <option>RI</option>
                                <option>SC</option>
                                <option>SD</option>
                                <option>TN</option>
                                <option>TX</option>
                                <option>UT</option>
                                <option>VT</option>
                                <option>VA</option>
                                <option>WA</option>
                                <option>WV</option>
                                <option>WI</option>
                                <option>WY</option>
                            </select>
                        </div>

                        <div className='form-group col-6 col-md-3'>
                            <label for='zip'>Zip</label>
                            <input type='text' id='zip' className='form-control' placeholder='90265' onChange={this.handleChange} value={this.state.zip} required={true} />
                        </div>
                    </div>


                    <h3 className='thin-text mt-4 mb-2'>Conference Details</h3>

                    <div className='form-group'>
                        <label for='schoolCompany'>School or Company</label>
                        <input type='text' id='schoolCompany' className='form-control' placeholder='Stark Industries' onChange={this.handleChange} value={this.state.schoolCompany} />
                    </div>


                    <div className='form-group'>
                        <label for='status'>Status</label>
                        <select id='status' name='status' className='custom-select' value={this.state.status} onChange={this.handleChange} required>
                            <option disabled value=''>Status*</option>
                            <option>Undergraduate Student</option>
                            <option>Graduate Student</option>
                            <option>Professor</option>
                            <option>Industry Employee</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label for='paymentType'>Payment Type</label>
                        <select id='paymentType' name='paymentType' className='custom-select' value={this.state.paymentType} onChange={this.handleChange} required>
                            <option disabled value=''>Payment Type*</option>
                            <option>Visa</option>
                            <option>Mastercard</option>
                            <option>American Express</option>
                            <option>Discover</option>
                        </select>
                    </div>
                    <div className='d-flex'>
                        <button type='submit' className='btn ml-auto mt-3'>Continue</button>
                    </div>


                </form>
            </div>
        );
    }
}

export default RegisterForm;