import { Helmet } from 'react-helmet-async';
import { useEnquiry } from '../context/EnquiryContext';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const { openModal } = useEnquiry();
  
  const strengths = [
    "Consistent food-grade quality",
    "Reliable bulk supply chain",
    "Highly competitive wholesale pricing",
    "Dedicated delivery across North Chennai"
  ];

  return (
    <>
      <Helmet>
        <title>About ASR Impex | Chennai Salt Wholesaler</title>
        <meta name="description" content="Learn about ASR Impex, a Chennai-based edible salt supplier specializing in fine salt and crystal salt for B2B customers." />
      </Helmet>

      <section className="section" style={{ background: 'var(--light-grey)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h1 style={{ marginBottom: '20px', color: 'var(--primary-blue)' }}>About ASR Impex</h1>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', lineHeight: 1.8 }}>
                ASR Impex is a Chennai-based edible salt supplier specializing in fine salt and crystal salt for wholesale and retail customers. Based in Redhills, we understand the urgent and continuous requirements of B2B buyers.
              </p>
              <p style={{ marginBottom: '30px', color: '#555' }}>
                We serve businesses across North Chennai including hotels, catering services, provision stores, and food manufacturers. Our goal is to ensure you never run out of essential salt supply for your business operations.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                {strengths.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaCheckCircle color="var(--primary-blue)" />
                    <span style={{ fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={openModal} className="btn btn-primary">Contact Us for Supply</button>
            </div>
            <div style={{ height: '108%', background: `url('https://i.ibb.co/whf3T4ZV/ASR-Logo.png') center/cover`, borderRadius: '8px' }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;