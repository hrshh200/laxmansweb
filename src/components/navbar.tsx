import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, icons } from 'lucide-react';
import SearchInput from './SearchInput';
import Icon from '../assets/icon2.png';
import '../styles/navbar.css'; // Import the external CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleAuthToggle = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon" onClick={() => window.location.href = '/'}> 
           <img src={Icon} alt="Logo" className="logo-image" width={68} height={68}/>
          </div>
        </div>

        <div className="navbar-search desktop-only">
          <form onSubmit={handleSearch} className="search-form">
            {/* <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            /> */}
            <SearchInput />
            <button type="submit" className="search-btn">
              <Search size={18} />
            </button>
          </form>
        </div>

        <div className="action-buttons">
          {/* Profile Button */}
          <button className="profile-btn">
            <User size={24} />
            {/* <span className="btn-label">Profile</span> */}
          </button>

          {/* Cart Button */}
          <button className="cart-btn">
            <ShoppingCart size={24} />
            <span className="cart-count">3</span>
          </button>
        </div>

        {/* <div className="navbar-actions desktop-only">
          <button className="cart-btn">
            <ShoppingCart size={24} />
            <span className="cart-count">2</span>
          </button>

          <button
            onClick={handleAuthToggle}
            className="auth-btn"
          >
            <User size={20} />
            <span>{isSignedIn ? 'Sign Out' : 'Sign In'}</span>
          </button>
        </div> */}

        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      <div className="mobile-search mobile-only">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <Search size={18} />
          </button>
        </form>
      </div>

      {/* <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <button className="mobile-cart">
            <div className="cart-content">
              <ShoppingCart size={24} />
              <span>Cart</span>
            </div>
            <span className="cart-count">2</span>
          </button>

          <button
            onClick={handleAuthToggle}
            className="mobile-auth-btn"
          >
            <User size={24} />
            <span>{isSignedIn ? 'Sign Out' : 'Sign In'}</span>
          </button>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
