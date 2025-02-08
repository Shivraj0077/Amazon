import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({ name: '', description: '', price: '' });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setError('');
    } else {
      setError('Only image files are allowed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError('Please upload an image');
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('description', formData.description);
    formDataObj.append('price', formData.price);
    formDataObj.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/api/products/create', {
        method: 'POST',
        body: formDataObj,
      });

      if (response.ok) {
        alert('Product created successfully!');
        setFormData({ name: '', description: '', price: '' });
        setImage(null);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to create product');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Add New Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleInputChange}
        required
      />
      <input type="file" name="image" onChange={handleImageChange} required />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
