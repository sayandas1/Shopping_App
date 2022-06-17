const mongoose = require('mongoose');
const SchemaVariable = mongoose.Schema;

const StudentSchema = new SchemaVariable({
    sName: {
        type: String,
        required: true
    },
    sEmail: {
        type: String,
        required: true,
    },
    sPhone: {
        type: Number,
        required: true
    },
    sImage: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Students', StudentSchema)
