import { Helmet } from 'react-helmet-async';
import { useEnquiry } from '../context/EnquiryContext';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Areas = () => {
  const { openModal } = useEnquiry();
  const phone = "+917010086367";

  const areas = [
    "Redhills", "Madhavaram", "Manali", "Minjur", "Ponneri", "Ennore", 
    "Thiruvottiyur", "Tondiarpet", "Ambattur", "Puzhal", "Perambur", 
    "Kolathur", "Vyasarpadi", "Gummidipoondi", "Avadi"
  ];

  return (
    <>
      <Helmet>
        <title>Salt Supplier in North Chennai | Redhills, Madhavaram, Ennore</title>
        <meta name="description" content="ASR Impex supplies bulk edible salt across North Chennai including Redhills, Madhavaram, Manali, Minjur, Tondiarpet, and Ennore." />
      </Helmet>

      <section className="section">
        <div className="container">
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Areas We Serve in Chennai</h1>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.1rem', color: '#555' }}>
            Based in Redhills, ASR Impex is strategically located to provide fast and efficient bulk salt delivery across North Chennai. We understand the local market needs and ensure quick turnaround for your orders.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginBottom: '50px' }}>
            {areas.map((area, i) => (
              <div key={i} style={{ background: 'var(--light-grey)', padding: '15px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 500 }}>
                <FaMapMarkerAlt color="var(--primary-blue)" /> {area}
              </div>
            ))}
          </div>

          <div style={{ background: '#e9f5ff', padding: '30px', borderRadius: '8px', borderLeft: '5px solid var(--primary-blue)' }}>
            <h3 style={{ marginBottom: '15px' }}>Bulk Supply Available Daily</h3>
            <p style={{ marginBottom: '20px', color: '#555' }}>
              Whether you run a hotel in Tondiarpet, a supermarket in Madhavaram, or a food processing unit in Minjur, we can supply your salt requirements reliably. 
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href={`tel:${phone}`} className="btn btn-primary">Call for Delivery</a>
              <button onClick={openModal} className="btn btn-outline">Request Quote</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Areas;