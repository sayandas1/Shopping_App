const mongoose = require('mongoose');
const SchemaVariable = mongoose.Schema;

const ItemSchema = new SchemaVariable({
    iName: {
        type: String,
        required: true
    },
    iCategory: {
        type: String,
        required: true,
    },
    iImage: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Items', ItemSchema)