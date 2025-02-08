import { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');  // Ensure this URL matches your backend
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {products.map((product) => (
        <div key={product.id} className="product-card" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
