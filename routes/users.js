const express = require('express');
const router = express.Router();

const Applicant = require('../models/Applicant');

router.post('/register', (req, res, next) => {

    let newApplicant = new Applicant({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        schoolCompany: req.body.schoolCompany,
        status: req.body.status,
        paymentType: req.body.paymentType
    });

    console.log('\nNew applicant recieved. Attempting to register...')
    Applicant.registerApplicant(newApplicant, (err, user) => {
        if (err) console.log(`\n\nUser registration failed: ${err}\n\n`);
        console.log('New user registered');
    })
});

module.exports = router;