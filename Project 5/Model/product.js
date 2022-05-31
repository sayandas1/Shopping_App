const mongoose = require('mongoose');
const SchemaVariable = mongoose.Schema;

const ProductSchema = new SchemaVariable({
    pName: {
        type: String,
        required: true
    },
    pPrice: {
        type: Number,
        required: true,
    },
    pDesc: {
        type: String,
        required: true
    },
    pImage: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Products', ProductSchema)

//module.exports = mongoose.model(collection name, schema name)