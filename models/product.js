import mongoose, { ObjectId } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sale_price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: Number,
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    }
}, { timestamps: true });
export default mongoose.model('Product', productSchema);
