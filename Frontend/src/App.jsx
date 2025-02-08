import Navbar from './Navbar';
import Home from './Home';
import ProductForm from './ProductForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add-product' element={<ProductForm/>}/>
        </Routes>
      </div>
      </Router>
  );
}

export default App;
