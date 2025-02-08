const express = require('express');
const { createProduct } = require('./productController')
const { upload } = require('./s3Service');
const { getProducts } = require('./productController');


const router = express.Router();

router.post('/create', upload.single('image'), createProduct);
router.get('/', getProducts);

module.exports = router;