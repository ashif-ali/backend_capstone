
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        rating: { type: Number},
        comment: { type: String }
    }, 
    {
        timestamps: { createdAt: true, updatedAt: false } 
    }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;