const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Create product endpoint (POST request)
router.post('/', async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = new Product({ name, price });
    await product.save();
    res.status(201).json({ message: 'Product Created Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all products endpoint (GET request)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update product endpoint (PUT request)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, { name, price }, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete product endpoint (DELETE request)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
