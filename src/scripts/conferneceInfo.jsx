import React, { useEffect } from 'react';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

const ConferenceInfo = () => {

    const conferenceAddress = '429 11th Ave, New York, NY 10001';

    const updateTooltip = (text) => {
        $('#address-info')
            .attr('title', text)
            .attr('data-original-title', text)
            .tooltip('show');
    }

    /**
     * Copies text using the document.execCommand method.
     * 
     * execCommand('copy') copies the content of the currently selected element
     * to the clipboard. Inorder to copy our text must create a textarea input
     * and set its value to the desired value to be copied. Then select the element
     * and run the execCommand. Remove the markup after copy.
     */
    const copyText = () => {
        const el = document.createElement('textarea');
        el.value = conferenceAddress;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    useEffect(() => {
        // Activate tooltips whenever this element is mounted
        $(() => {
            $('[data-toggle="tooltip"]').tooltip();
        });

        // Add a click event listener to the conference locations name
        // that copies the locations address to the clipboard and
        // updates the tooltip to tell the user the string was copied.
        const addressInfo = document.getElementById('address-info');
        addressInfo.addEventListener('click', (event) => {
            event.preventDefault();
            copyText();
            updateTooltip('Copied!');

        });
    }, []);

    return (
        <div className='info'>
            <p className='thin-text'>Info</p>
            <div className='bold-text'>
                April 18-22, 2020<br />
                11 am - 3 pm<br />
                <div id='address-info' class='btn btn-secondary mt-2' data-toggle='tooltip' data-placement='left' data-html="true" title='Click to copy<br/><b>429 11th Ave, New York, NY 10001</b>' onClick={copyText} tabIndex='0'>Jarvis Center</div>
            </div>
            <div className='sr-only'>{conferenceAddress}</div>
        </div>
    );
}

export default ConferenceInfo;