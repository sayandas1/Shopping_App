const mongoose = require('mongoose');
const SchemaVariable = mongoose.Schema;

const AuthSchema = new SchemaVariable({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Auth', AuthSchema)