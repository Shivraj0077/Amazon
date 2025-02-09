const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./productRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);


