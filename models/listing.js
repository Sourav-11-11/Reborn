const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new mongoose.Schema({
    productName: {
        type: String, 
        required: true
    },
    category: {
        type: String,
        enum: ["Clothing", "Footwear", "Accessories", "Home", "Electronics", "Books", "Other"],
        required: true
    },
    condition: {
        type: String,
        enum: ["New", "Like New", "Used"],
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1525904097614-826675ea2c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        set: (v) => {
            if (!v || v.trim() === "") {
                return "https://images.unsplash.com/photo-1525904097614-826675ea2c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60";
            }
            return v;
        }
    },
    price: {
        type: Number,
        required: true
    },
    sold: {
        type: Boolean,
        default: false
    },
    seller: {
        type: String,
        default: "Sourav"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    contactNumber: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;