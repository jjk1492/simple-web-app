const mongoose = require('mongoose');


// User Schema
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    schoolCompany: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.registerApplicant = function (newUser, callback) {

    const query = { email: newUser.email }
    User.find(query, (err, found) => {
        if (err) console.log(err);

        if (found.length === 0) {
            newUser.save(callback);
        } else {
            const existingUser = found[0];
            console.log(`A user with the email ${existingUser.email} already exists`);
        }

    });
}