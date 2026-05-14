import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/products', name: 'Products' },
    { path: '/industries', name: 'Industries' },
    { path: '/areas-we-serve', name: 'Areas' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid #eee', position: 'sticky', top: 0, zIndex: 998 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="ASR Impex" 
            style={{ height: '50px', width: 'auto', objectFit: 'contain' }} 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span style={{ fontWeight: '800', fontSize: '1.5rem', color: 'var(--primary-blue)', display: 'none' }}>
            ASR Impex
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '25px' }} className="desktop-nav">
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              style={{ color: location.pathname === link.path ? 'var(--primary-blue)' : '#555', fontWeight: 500, transition: 'color 0.3s' }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', display: 'block' }} className="mobile-menu-btn">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ background: '#fff', padding: '20px', borderTop: '1px solid #eee' }} className="mobile-menu">
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: location.pathname === link.path ? 'var(--primary-blue)' : '#333', fontWeight: 500, borderBottom: '1px solid #f0f0f0' }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;