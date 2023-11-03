const mongoose = require('mongoose');

// Define a schema for the Product model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

//Product model based on the productSchema
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
