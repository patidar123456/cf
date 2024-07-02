import mongoose from "mongoose";
import connectDB from "../db";

connectDB();

const SliderSchema = new mongoose.Schema({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
}, {
    timestamps: true  // Add timestamps option to the schema
});

export default mongoose.models.Slider || mongoose.model('Slider', SliderSchema);
