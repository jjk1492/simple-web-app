import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './registerForm';
import ConferenceInfo from './conferneceInfo';
import '../styles/scss/styles.scss';

class IndexMarkup extends React.Component {

    showRegister() {
        document.getElementById('background').classList.add('form-active');


        document.getElementsByClassName('content-container')[0].classList.remove('appearing');
        document.getElementsByClassName('content-container')[0].classList.add('disappearing');
        setTimeout(() => {
            ReactDOM.render(<RegisterForm />, document.getElementById('root'));
        }, 400);
    }

    componentDidMount() {
        document.getElementsByClassName('content-container')[0].classList.add('appearing');
    }

    render() {
        return (
            <div className='content-container'>
                <div>
                    <span className='h1 thin-text'>8<sup>th</sup> Annual</span>
                    <h1 className='bold-text'>Web Developer Conference</h1>
                </div>
                <ConferenceInfo />
                <div className='cta'>
                    <button className='btn btn-xl' onClick={this.showRegister}>Get my tickets</button>
                </div>
            </div>
        );
    }
}

export default IndexMarkup;