import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useEnquiry } from '../context/EnquiryContext';

const StickyButtons = () => {
  const { openModal } = useEnquiry();
  const phone = "+917010086367";
  const waMessage = "Hi ASR Impex, I want to enquire about bulk salt supply.";

  return (
    <>
      {/* Mobile Call Button - Top sticky banner */}
      <div className="mobile-call-banner" style={{ display: 'none', position: 'fixed', top: 0, left: 0, right: 0, background: '#fff', zIndex: 999, padding: '10px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
        <a href={`tel:${phone}`} style={{ color: 'var(--primary-blue)', fontWeight: 'bold', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <FaPhoneAlt /> Call ASR Impex Now
        </a>
      </div>

      {/* Floating Bottom Buttons */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <a 
          href={`https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(waMessage)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-whatsapp" 
          style={{ borderRadius: '50px', width: '60px', height: '60px', padding: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
          title="WhatsApp Us"
        >
          <FaWhatsapp size={30} />
        </a>
        
        <button 
          onClick={openModal} 
          className="btn btn-primary" 
          style={{ borderRadius: '50px', width: '60px', height: '60px', padding: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.2)', fontSize: '1.5rem', fontWeight: 'bold' }}
          title="Get Quote"
        >
          ₹
        </button>
      </div>

      {/* Media query to show mobile banner via inline style hack or simple CSS in index.css */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-call-banner { display: block !important; }
          body { padding-top: 50px; }
        }
      `}</style>
    </>
  );
};

export default StickyButtons;