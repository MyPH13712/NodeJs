import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        trype: Number,
    }
}, { timestamps: true });
export default mongoose.model('Category', categorySchema);
