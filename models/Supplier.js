import mongoose from "mongoose";

const Supplier = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

export default mongoose.model('Suppliers', Supplier);