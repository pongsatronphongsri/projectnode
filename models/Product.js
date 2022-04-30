const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    imge: {
        type: String,
        required: true,
    },
    nameProduct: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    details: {
        type: String,
        required: true,
    }
});

const productModel = mongoose.model("productModel", productSchema);
module.exports = productModel;