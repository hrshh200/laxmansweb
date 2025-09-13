import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, Star } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section animate-left">
            <div className="footer-logo">Laxman's</div>
            <p className="footer-description">
              Experience the authentic taste of traditional Indian street food with our premium paan, delicious chaat, and refreshing beverages.
            </p>
            <div className="footer-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="footer-star" />
              ))}
              <span className="footer-rating-text">4.9/5 (2,847 reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section animate-right">
            <h3 className="footer-heading">Quick Links</h3>
            {['Home', 'Our Menu', 'Paan Collection', 'Chaat Varieties', 'Fresh Beverages', 'Gift Hampers'].map((link) => (
              <a key={link} href="/" className="footer-link">
                {link}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="footer-section animate-left delay-1">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={18} className="footer-icon" />
                <span>+91 8017644259</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} className="footer-icon" />
                <span>info@laxmans.com</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-icon" />
                <span>15 C, Sarat Bose Road, Elgin<br />Elgin, Kolkata 700020</span>
              </div>
              <div className="footer-contact-item">
                <Clock size={18} className="footer-icon" />
                <span>7:00 AM - 1:00 AM(Night)</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-section animate-right delay-2">
            <h3 className="footer-heading">Follow Us</h3>
            <p className="footer-social-text">
              Stay connected for latest updates, special offers, and mouth-watering food photos!
            </p>
            <div className="footer-social-icons">
              {[
                { Icon: Facebook, color: '#1877F2' },
                { Icon: Instagram, color: '#E4405F' },
                { Icon: Twitter, color: '#1DA1F2' }
              ].map(({ Icon, color }, index) => (
                <a key={index} href="#" className="footer-social-link" style={{ '--hover-color': color }}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2025 Laxmans. All rights reserved.</p>
          <div className="footer-bottom-links">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
              <a key={link} href="#" className="footer-bottom-link">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
