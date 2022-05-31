const mongoose = require('mongoose');
const SchemaVariable = mongoose.Schema;

const CartSchema = new SchemaVariable({
    productId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    cart: [{
        type: Object,
        required: true
    }],
})

module.exports = mongoose.model('Cart', CartSchema)