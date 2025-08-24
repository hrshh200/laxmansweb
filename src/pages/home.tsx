import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Star, ShoppingBag, Heart, Award, Truck, Phone, ArrowRight, ChefHat, Coffee, Gift, Mail, MapPin } from 'lucide-react';
import '../styles/home.css';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  const reviews = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      review:
        "The best paan I've ever had! The Banarasi special reminds me of my grandmother's recipe. Absolutely authentic and delicious.",
      image:
        'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      verified: true,
    },
    {
      name: 'Rahul Gupta',
      location: 'Delhi',
      rating: 5,
      review:
        'Amazing chaat varieties! The pani puri was perfectly spicy and the bhel puri was incredibly fresh. Fast delivery too!',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      verified: true,
    },
    {
      name: 'Anjali Patel',
      location: 'Ahmedabad',
      rating: 5,
      review:
        'Ordered the festival hamper for Diwali. Everyone loved it! Beautiful packaging and authentic taste. Will definitely order again.',
      image:
        'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      verified: true,
    },
    {
      name: 'Vikash Kumar',
      location: 'Bangalore',
      rating: 4,
      review:
        'Great variety of beverages! The masala chai was perfect and the mango lassi was refreshing. Quality service.',
      image:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      verified: true,
    },
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '10K+', label: 'Orders Delivered' },
    { number: '99%', label: 'Customer Satisfaction' },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const isVisible = (sectionId: any) => visibleSections.has(sectionId);

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Authentic Indian Street Food Experience</h1>
          <p>
            From traditional paan to spicy chaat and refreshing beverages - taste the real flavors of India
          </p>
          <div className="hero-buttons">
            <button className="btn-order">
              Order Now <ShoppingBag size={20} />
            </button>
            <button className="btn-menu">
              View Menu <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="float-icon float-1">🌶️</div>
        <div className="float-icon float-2">🥘</div>
        <div className="float-icon float-3">🍃</div>
      </section>


      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-grid">
            {[
              { icon: <Award size={40} />, title: 'Premium Quality', desc: 'Finest ingredients sourced directly from authentic suppliers' },
              { icon: <Truck size={40} />, title: 'Fast Delivery', desc: 'Fresh food delivered hot to your doorstep within 30 minutes' },
              { icon: <Heart size={40} />, title: 'Made with Love', desc: 'Traditional recipes passed down through generations' },
              { icon: <Star size={40} />, title: '5-Star Rated', desc: 'Loved by thousands of customers across the city' }
            ].map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${isVisible(`feature-${index}`) ? 'visible' : ''}`}
                ref={addToRefs}
                data-section={`feature-${index}`}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Paan Section */}
      <section id="paan" ref={addToRefs} data-section="paan" className="paan-section">
        <div className="paan-container">
          <div
            className="paan-header"
            style={{
              transform: isVisible('paan') ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible('paan') ? 1 : 0
            }}
          >
            <h2>🌿 Premium Paan Collection</h2>
            <p>
              Experience the rich tradition of authentic Indian paan with our carefully
              crafted varieties
            </p>
          </div>

          <div className="paan-grid">
            {[
              {
                name: 'Banarasi Special',
                price: '₹45',
                image:
                  'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600',
                description:
                  'Traditional Banarasi paan with gulkand, coconut, and special spices',
                popular: true
              },
              {
                name: 'Chocolate Paan',
                price: '₹65',
                image:
                  'https://images.pexels.com/photos/8844342/pexels-photo-8844342.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Modern twist with premium chocolate and dry fruits',
                popular: false
              },
              {
                name: 'Silver Paan',
                price: '₹85',
                image:
                  'https://images.pexels.com/photos/5560756/pexels-photo-5560756.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Luxurious paan with silver leaf and exotic ingredients',
                popular: true
              }
            ].map((paan, index) => (
              <div key={index} className="paan-card">
                {paan.popular && <div className="paan-popular-badge">POPULAR</div>}
                <div
                  className="paan-image"
                  style={{ backgroundImage: `url(${paan.image})` }}
                ></div>
                <div className="paan-content">
                  <div className="paan-title-price">
                    <h3>{paan.name}</h3>
                    <span className="paan-price">{paan.price}</span>
                  </div>
                  <p className="paan-description">{paan.description}</p>
                  <button className="paan-btn">
                    Add to Cart <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chaat Section */}
      <section id="chaat" ref={addToRefs} data-section="chaat" className="chaat-section">
        <div className="chaat-container">
          <div
            className="chaat-header"
            style={{
              transform: isVisible('chaat') ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible('chaat') ? 1 : 0
            }}
          >
            <h2>🥘 Spicy Chaat Varieties</h2>
            <p>
              Tangy, spicy, and absolutely irresistible street food favorites
            </p>
          </div>

          <div className="chaat-grid">
            {[
              {
                name: 'Bhel Puri',
                price: '₹35',
                image: 'https://images.pexels.com/photos/5560758/pexels-photo-5560758.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Crispy puffed rice with tangy chutneys and fresh vegetables',
                spiceLevel: 2
              },
              {
                name: 'Pani Puri',
                price: '₹30',
                image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Crispy hollow puris filled with spicy flavored water',
                spiceLevel: 3
              },
              {
                name: 'Aloo Tikki',
                price: '₹40',
                image: 'https://images.pexels.com/photos/5560759/pexels-photo-5560759.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Golden fried potato patties with chickpea curry',
                spiceLevel: 2
              },
              {
                name: 'Dahi Puri',
                price: '₹45',
                image: 'https://images.pexels.com/photos/8844391/pexels-photo-8844391.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Crispy puris topped with yogurt and sweet chutneys',
                spiceLevel: 1
              }
            ].map((chaat, index) => (
              <div
                key={index}
                className="chaat-card"
                style={{
                  transform: isVisible('chaat')
                    ? 'translateY(0) scale(1)'
                    : index % 2 === 0
                      ? 'translateX(-120px) scale(0.9)'
                      : 'translateX(120px) scale(0.9)',
                  opacity: isVisible('chaat') ? 1 : 0,
                  transitionDelay: `${index * 0.15}s`
                }}
              >
                <div
                  className="chaat-image"
                  style={{ backgroundImage: `url(${chaat.image})` }}
                >
                  <div className="chaat-spice-level">
                    {[1, 2, 3].map((level) => (
                      <div
                        key={level}
                        className={`chaat-spice-dot ${level <= chaat.spiceLevel ? 'active' : ''
                          }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="chaat-content">
                  <div className="chaat-title-price">
                    <h3>{chaat.name}</h3>
                    <span className="chaat-price">{chaat.price}</span>
                  </div>
                  <p className="chaat-description">{chaat.description}</p>
                  <button className="chaat-btn">
                    Order Now <ChefHat size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beverages Section */}
      <section id="beverages" ref={addToRefs} data-section="beverages" className="beverages-section">
        <div className="beverages-container">
          <div
            className="beverages-header"
            style={{
              transform: isVisible('beverages') ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible('beverages') ? 1 : 0
            }}
          >
            <h2>🥤 Refreshing Beverages</h2>
            <p>Cool down with our traditional and modern drink selections</p>
          </div>

          <div className="beverages-grid">
            {[
              {
                name: 'Masala Chai',
                price: '₹25',
                image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Traditional spiced tea with aromatic herbs',
                category: 'Hot'
              },
              {
                name: 'Fresh Lime Soda',
                price: '₹30',
                image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Refreshing lime soda with mint and spices',
                category: 'Cold'
              },
              {
                name: 'Mango Lassi',
                price: '₹45',
                image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Creamy yogurt drink with fresh mango pulp',
                category: 'Cold'
              },
              {
                name: 'Kulhad Coffee',
                price: '₹35',
                image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Strong filter coffee served in traditional clay cup',
                category: 'Hot'
              }
            ].map((drink, index) => (
              <div
                key={index}
                className="beverage-card"
                style={{
                  transform: isVisible('beverages')
                    ? 'translateX(0) rotateX(0deg)'
                    : index % 2 === 0
                      ? 'translateX(-100px) rotateX(-5deg)'
                      : 'translateX(100px) rotateX(5deg)',
                  opacity: isVisible('beverages') ? 1 : 0,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div
                  className={`beverage-category ${drink.category === 'Hot' ? 'hot' : 'cold'}`}
                >
                  {drink.category}
                </div>
                <div
                  className="beverage-image"
                  style={{ backgroundImage: `url(${drink.image})` }}
                />
                <div className="beverage-content">
                  <div className="beverage-title-price">
                    <h3>{drink.name}</h3>
                    <span className="beverage-price">{drink.price}</span>
                  </div>
                  <p className="beverage-description">{drink.description}</p>
                  <button className="beverage-btn">
                    Add to Cart <Coffee size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paan Hampers Section */}
      <section id="hampers" ref={addToRefs} data-section="hampers" className="hampers-section">
        <div className="hampers-container">
          <div
            className="hampers-header"
            style={{
              transform: isVisible('hampers') ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible('hampers') ? 1 : 0
            }}
          >
            <h2>🎁 Special Paan Hampers</h2>
            <p>Perfect gift hampers for festivals, celebrations, and special occasions</p>
          </div>

          <div className="hampers-grid">
            {[
              {
                name: 'Festival Special',
                price: '₹299',
                originalPrice: '₹399',
                image: 'https://images.pexels.com/photos/8844373/pexels-photo-8844373.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: '12 assorted paans with traditional sweets and dry fruits',
                items: ['6 Banarasi Paans', '3 Chocolate Paans', '3 Silver Paans', 'Premium Packaging'],
                bestSeller: true
              },
              {
                name: 'Premium Gift Box',
                price: '₹599',
                originalPrice: '₹799',
                image: 'https://images.pexels.com/photos/5560757/pexels-photo-5560757.jpeg?auto=compress&cs=tinysrgb&w=600',
                description: 'Luxury hamper with exotic paan varieties and traditional sweets',
                items: ['10 Premium Paans', '5 Silver Leaf Paans', 'Assorted Sweets', 'Elegant Gift Box'],
                bestSeller: false
              }
            ].map((hamper, index) => (
              <div
                key={index}
                className="hampers-card"
                style={{
                  transform: isVisible('hampers')
                    ? 'translateX(0) scale(1)'
                    : index % 2 === 0
                      ? 'translateX(-150px) scale(0.9)'
                      : 'translateX(150px) scale(0.9)',
                  opacity: isVisible('hampers') ? 1 : 0,
                  transitionDelay: `${index * 0.3}s`
                }}
              >
                {hamper.bestSeller && <div className="best-seller-badge">BEST SELLER</div>}
                <div className="hampers-image" style={{ backgroundImage: `url(${hamper.image})` }}>
                  <div className="hampers-image-overlay" />
                </div>
                <div className="hampers-content">
                  <div className="hampers-title-price">
                    <h3>{hamper.name}</h3>
                    <div className="hampers-price">
                      <span className="hampers-price-current">{hamper.price}</span>
                      <div className="hampers-price-original">{hamper.originalPrice}</div>
                    </div>
                  </div>
                  <p className="hampers-description">{hamper.description}</p>
                  <div className="hampers-included">
                    <h4>What's Included:</h4>
                    <ul>
                      {hamper.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="hampers-btn">
                    Order Hamper <Gift size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        ref={addToRefs}
        data-section="reviews"
        className={`reviews-section ${isVisible('reviews') ? 'visible' : ''}`}
      >
        <div className="reviews-container">
          <div className="reviews-header">
            <h2>⭐ What Our Customers Say</h2>
            <p>
              Join thousands of happy customers who love our authentic flavors
            </p>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`review-card ${isVisible('reviews') ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="review-user">
                  <img src={review.image} alt={review.name} />
                  <div>
                    <h4>
                      {review.name}
                      {review.verified && <span className="verified">✓</span>}
                    </h4>
                    <p>{review.location}</p>
                  </div>
                </div>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      style={{
                        color: star <= review.rating ? '#FCD34D' : '#E5E7EB',
                        fill: star <= review.rating ? '#FCD34D' : '#E5E7EB',
                      }}
                    />
                  ))}
                </div>
                <p className="review-text">"{review.review}"</p>
              </div>
            ))}
          </div>

          <div className={`reviews-stats ${isVisible('reviews') ? 'visible' : ''}`}>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-item"
                  style={{ transitionDelay: `${0.7 + index * 0.1}s` }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={addToRefs} data-section="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header" style={{
            transform: isVisible('contact') ? 'translateY(0)' : 'translateY(50px)',
            opacity: isVisible('contact') ? 1 : 0
          }}>
            <h2>📞 Get in Touch</h2>
            <p>
              Ready to experience authentic flavors? Contact us for orders, catering, or any queries
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info" style={{
              transform: isVisible('contact') ? 'translateX(0)' : 'translateX(-100px)',
              opacity: isVisible('contact') ? 1 : 0
            }}>
              <h3>Contact Information</h3>
              <div className="contact-info-list">
                {[
                  { icon: <Phone size={24} />, title: 'Call Us', info: '+91 98765 43210', subtitle: 'Mon-Sun, 10 AM - 11 PM' },
                  { icon: <Mail size={24} />, title: 'Email Us', info: 'info@spicepalace.com', subtitle: 'We reply within 2 hours' },
                  { icon: <MapPin size={24} />, title: 'Visit Us', info: '123 Street Food Lane', subtitle: 'Spice Market, Mumbai 400001' }
                ].map((contact, index) => (
                  <div className="contact-item" key={index}>
                    <div style={{ color: '#F97316' }}>{contact.icon}</div>
                    <div>
                      <h4>{contact.title}</h4>
                      <p>{contact.info}</p>
                      <p>{contact.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="contact-cta" style={{
              transform: isVisible('contact') ? 'translateX(0)' : 'translateX(100px)',
              opacity: isVisible('contact') ? 1 : 0
            }}>
              <h3>Ready to Order?</h3>
              <p>
                Experience the authentic taste of India with our premium paan, delicious chaat, and refreshing beverages.
              </p>
              <div className="contact-buttons">
                <button className="contact-btn-primary">
                  Call Now to Order <Phone size={20} />
                </button>
                <button className="contact-btn-secondary">
                  View Full Menu
                </button>
              </div>

              <div className="contact-offer">
                <h4>🎉 Special Offer</h4>
                <p>Get 20% off on orders above ₹500. Use code: SPICE20</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS Animations */}
      <style>
        {`
          @keyframes heroFadeIn {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;