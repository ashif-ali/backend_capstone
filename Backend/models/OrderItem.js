// models/OrderItem.js
const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
    {
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }
);

const orderItem = mongoose.model('OrderItem', orderItemSchema);
module.exports = orderItem;