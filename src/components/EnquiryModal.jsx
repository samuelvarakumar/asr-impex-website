import { useState } from 'react';
import { useEnquiry } from '../context/EnquiryContext';
import { FaTimes } from 'react-icons/fa';

const EnquiryModal = () => {
  const { isModalOpen, closeModal } = useEnquiry();
  const [formData, setFormData] = useState({ name: '', phone: '', business: '', requirement: '' });

  if (!isModalOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to Web3Forms, EmailJS, or a backend here
    const message = `Hi ASR Impex, I am ${formData.name}. Phone: ${formData.phone}. Business: ${formData.business}. Need: ${formData.requirement}`;
    window.open(`https://wa.me/917010086367?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
  };

  return (
    <div style={modalOverlay}>
      <div style={modalContent}>
        <button onClick={closeModal} style={closeBtn}><FaTimes /></button>
        <h3>Get Bulk Quote Now</h3>
        <p style={{ marginBottom: '20px', color: '#666' }}>Fill this form or message us directly on WhatsApp.</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} style={inputStyle} />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} style={inputStyle} />
          <select name="business" required onChange={handleChange} style={inputStyle}>
            <option value="">Select Business Type</option>
            <option>Hotel / Restaurant</option>
            <option>Catering Service</option>
            <option>Provision Store / Supermarket</option>
            <option>Food Processing Unit</option>
            <option>Hostel / Hospital</option>
            <option>Other</option>
          </select>
          <input type="text" name="requirement" placeholder="Requirement (e.g., 50 bags Fine Salt)" required onChange={handleChange} style={inputStyle} />
          <button type="submit" className="btn btn-whatsapp">Send via WhatsApp</button>
        </form>
      </div>
    </div>
  );
};

const modalOverlay = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' };
const modalContent = { background: '#fff', padding: '30px', borderRadius: '8px', width: '100%', maxWidth: '450px', position: 'relative' };
const closeBtn = { position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' };
const inputStyle = { padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem', fontFamily: 'inherit' };

export default EnquiryModal;