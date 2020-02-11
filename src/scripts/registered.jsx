import React from 'react';
import ConferenceInfo from './conferneceInfo';


class SuccessfulRegister extends React.Component {

    componentDidMount() {
        document.getElementsByClassName('content-container')[0].classList.add('appearing');
    }

    render() {
        return (
            <div className='content-container'>
                <div className='d-flex flex-column' style={{ maxWidth: '540px' }}>
                    <span className='h1 bold-text'>Status Code: 200</span>
                    <span className='h3 thin-text'>Your ticket purchase for the 8<sup>th</sup> Annual Web Developer Conference was successful.</span>
                </div>
                <ConferenceInfo />
            </div>
        );
    }
}

export default SuccessfulRegister;