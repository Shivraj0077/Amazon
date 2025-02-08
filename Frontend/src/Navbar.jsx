import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      {/* Top Navbar */}
      <nav className="navbar top-navbar">
        <div className="navbar-logo">
            <img
              src="/amazon.png"
              alt="Amazon Logo"
              className="logo"
            />
        </div>
        <div className="navbar-location">
          <span className="line-1">Deliver to</span>
          <span className="line-2">Your Location</span>
        </div>
        <div className="navbar-search">
          <select className="search-dropdown">
            <option>All</option>
            <option>Electronics</option>
            <option>Books</option>
            <option>Fashion</option>
          </select>
          <input type="text" className="search-input" placeholder="Search Amazon.in" />
          <button className="search-button"><img src="/search.png"></img></button>
        </div>
        <div className="navbar-account">
          <span className="line-1">Hello, Sign in</span>
          <span className="line-2">Account & Lists</span>
        </div>
        <div className="navbar-orders">
          <span className="line-1">Returns</span>
          <span className="line-2">& Orders</span>
        </div>
        <div className="navbar-cart">
        <span className="cart-count">0</span>
          <span className="cart-icon"><img src="/cart.png"></img></span>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="navbar bottom-navbar">
        <ul className="navbar-links">
          <li><a href="/">All</a></li>
          <li><a href="/">Mobiles</a></li>
          <li><a href="/">Fashion</a></li>
          <li><a href="/">Electronics</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Books</a></li>
          <li><a href="/">Appliances</a></li>
          <li><a href="/">More</a></li>
        </ul>
      </nav>
      <div style={{ textAlign: "center", margin: "20px 0"}}>
        <Link to='/add-product'>
        <button className="add product button">Add new product</button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar
