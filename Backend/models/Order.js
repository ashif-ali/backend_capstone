const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderDate: { type: Date},
    totalAmount: { type: Number },
    status: { 
        
    },
    // type: String, 
    // enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    // default: 'pending'
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Order', orderSchema);
