const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    company: String
},{
    timesStamps: true
});

module.exports = mongoose.model('Products', ProductSchema);