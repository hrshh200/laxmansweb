import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          Laxman's
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu hidden md:flex">
          {['Home', 'Paan', 'Chaat', 'Beverages', 'Hampers', 'Reviews', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="navbar-link"
            >
              {item}
            </a>
          ))}
          <div className="navbar-icons">
            <ShoppingCart className="navbar-icon" />
            <Phone className="navbar-icon" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-toggle md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile md:hidden">
          {['Home', 'Paan', 'Chaat', 'Beverages', 'Hampers', 'Reviews', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
