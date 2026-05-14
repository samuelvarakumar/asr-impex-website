import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer style={{ background: '#1a1a1a', color: '#ccc', padding: '50px 0 20px' }}>
      <div className="container">
        <div className="grid-3" style={{ marginBottom: '40px' }}>
          <div>
            <div style={{ marginBottom: '15px' }}>
              <img 
                src={logo} 
                alt="ASR Impex" 
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <h3 style={{ color: '#fff', display: 'none', margin: 0 }}>ASR Impex</h3>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
              Your reliable partner for bulk edible salt supply in Chennai. Quality products, competitive prices, and on-time delivery.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/products" style={{ color: '#ccc' }}>Our Products</Link>
              <Link to="/areas-we-serve" style={{ color: '#ccc' }}>Delivery Areas</Link>
              <Link to="/contact" style={{ color: '#ccc' }}>Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaMapMarkerAlt color="var(--primary-blue)" /> 
                11, Abdul Wahab St, Red Hills, Chennai 600052
              </div>
              <a href="tel:+917010086367" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc' }}>
                <FaPhoneAlt color="var(--primary-blue)" /> +91 70100 86367
              </a>
              <a href="mailto:asrimpex2022@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc' }}>
                <FaEnvelope color="var(--primary-blue)" /> asrimpex2022@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} ASR Impex. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;