const { upload } = require('./s3Service');
const Product = require('./product');
const { response } = require('express');

exports.createProduct = async (req, res) => {
    const { name, description, price } = req.body;

    if (!req.file) {
        return res.status(400).json({ error: 'Image File is required' });
    }

    try {
        const imageUrl = req.file.location;

        const product = await Product.create({
            name,
            description,
            price,
            image_url: imageUrl, // Ensure this matches your model
        });

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
};

// Define the getProducts function
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll(); // Fetch all products from the database
        res.status(200).json(products); // Return the products as JSON
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};