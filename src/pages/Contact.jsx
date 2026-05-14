import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const phone = "+917010086367";
  const waMessage = "Hi ASR Impex, I visited your website and want to enquire about salt supply.";
  const [formData, setFormData] = useState({ name: '', phone: '', business: '', requirement: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi ASR Impex, I am ${formData.name}. Phone: ${formData.phone}. Business: ${formData.business}. Need: ${formData.requirement}`;
    window.open(`https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact ASR Impex | Bulk Salt Enquiry Chennai</title>
        <meta name="description" content="Contact ASR Impex for bulk edible salt enquiries in Chennai. Call or WhatsApp us for immediate pricing." />
      </Helmet>

      <section className="section section-grey">
        <div className="container">
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Contact Us for Bulk Enquiry</h1>
          <p className="section-subtitle">Get in touch via Call, WhatsApp, or fill the form below.</p>

          <div className="grid-2">
            {/* Contact Info & Form */}
            <div>
              {/* Quick Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                <a href={`tel:${phone}`} style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#fff', padding: '15px', borderRadius: '6px', fontWeight: 'bold', color: 'var(--primary-blue)' }}>
                  <FaPhoneAlt size={24} /> +91 70100 86367
                </a>
                <a href={`https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(waMessage)}`} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#fff', padding: '15px', borderRadius: '6px', fontWeight: 'bold', color: '#25D366' }}>
                  <FaWhatsapp size={24} /> WhatsApp Now
                </a>
                <a href="mailto:asrimpex2022@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#fff', padding: '15px', borderRadius: '6px', fontWeight: 'bold', color: '#555' }}>
                  <FaEnvelope size={24} /> asrimpex2022@gmail.com
                </a>
              </div>

              {/* Enquiry Form */}
              <div style={{ background: '#fff', padding: '25px', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '20px' }}>Send Enquiry</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} style={inputStyle} />
                  <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} style={inputStyle} />
                  <select name="business" required onChange={handleChange} style={inputStyle}>
                    <option value="">Select Business Type</option>
                    <option>Hotel / Restaurant</option>
                    <option>Catering Service</option>
                    <option>Provision Store</option>
                    <option>Food Processing</option>
                    <option>Other</option>
                  </select>
                  <textarea name="requirement" placeholder="Requirement (e.g., 50 bags of 25kg Fine Salt)" required onChange={handleChange} rows="4" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                  <button type="submit" className="btn btn-whatsapp">Submit via WhatsApp</button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <FaMapMarkerAlt size={24} color="var(--primary-blue)" style={{ marginTop: '2px' }} />
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Our Location</h4>
                  <p style={{ color: '#555' }}>11, Abdul Wahab St, Red Hills, Vandimedu, Chennai, Tamil Nadu 600052</p>
                </div>
              </div>
              
              <div style={{ flex: 1, minHeight: '400px', background: '#ddd', borderRadius: '8px', overflow: 'hidden' }}>
                <iframe
                  title="ASR Impex Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.5795796890834!2d80.18904169999999!3d13.188887099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527b6274b4534f%3A0x9dc31123ee8d03b!2sASR%20Impex%20-%20Wholesale%20Salt%20Distributor!5e0!3m2!1sen!2sin!4v1778737488456!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const inputStyle = { padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem', fontFamily: 'inherit' };

export default Contact;