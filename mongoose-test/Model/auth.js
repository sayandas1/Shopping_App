const res = require('express/lib/response');
const mongoose = require('mongoose');
const SchemaVariable = mongoose.Schema;

const AuthSchema = new SchemaVariable({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Auth', AuthSchema)