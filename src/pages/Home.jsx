import { Helmet } from 'react-helmet-async';
import { useEnquiry } from '../context/EnquiryContext';
import { FaCheckCircle, FaUtensils, FaTruck, FaStore, FaIndustry, FaBuilding, FaPhoneAlt, FaWarehouse } from 'react-icons/fa';

const Home = () => {
  const { openModal } = useEnquiry();
  const phone = "+917010086367";

  const trustPoints = [
    "Bulk Orders Accepted",
    "Best Wholesale Pricing",
    "Regular Stock Available",
    "Fast Delivery Across Chennai"
  ];

  const industries = [
    { icon: <FaUtensils size={30} />, title: "Hotels & Restaurants", desc: "Fine salt for daily kitchen preparation." },
    { icon: <FaTruck size={30} />, title: "Catering Services", desc: "Large quantity supply for events and mass cooking." },
    { icon: <FaStore size={30} />, title: "Provision Stores", desc: "1kg to 50kg retail packing available." },
    { icon: <FaIndustry size={30} />, title: "Food Processing", desc: "Salt for pickles, snacks, and masala units." },
    { icon: <FaBuilding size={30} />, title: "Institutions", desc: "Supply for hostels, hospitals, and canteens." },
    { icon: <FaWarehouse size={30} />, title: "Distributors", desc: "Wholesale, Retail & Bulk distributors." }
  ];

  return (
    <>
      <Helmet>
        <title>Edible Salt Supplier in Chennai | ASR Impex - Fine & Crystal Salt</title>
        <meta name="description" content="ASR Impex is a leading edible salt supplier in Chennai. We supply fine salt and crystal salt for hotels, caterers, and stores. Fast delivery in North Chennai." />
      </Helmet>

      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.ibb.co/hJydBtLf/Landing-Page-Banner.png') center/cover no-repeat`,
        color: '#fff', padding: '100px 0 60px', textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', maxWidth: '800px', margin: '0 auto 20px' }}>
            Reliable Edible Salt Supplier in Chennai
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
            Fine Salt & Crystal Salt | Bulk Supply | Fast Delivery Across Chennai
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${phone}`} className="btn btn-primary" style={{ background: '#fff', color: 'var(--primary-blue)' }}>
              <FaPhoneAlt /> Call Now
            </a>
            <a href={`https://api.whatsapp.com/send/?phone=917010086367&text=Hi+ASR+Impex%2C+I+want+to+enquire+about+bulk+salt+supply.&type=phone_number&app_absent=0`} target="_blank" className="btn btn-whatsapp">
              WhatsApp Now
            </a>
            <button onClick={openModal} className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
              Get Bulk Price
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section" style={{ background: '#fff', marginTop: '-30px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
            {trustPoints.map((point, index) => (
              <div key={index} style={{ padding: '20px', background: 'var(--light-grey)', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <FaCheckCircle color="var(--primary-blue)" size={24} />
                <span style={{ fontWeight: 600, fontSize: '1rem' }}>{point}</span>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Products Section */}
      <section className="section section-grey">
        <div className="container">
          <h2 className="section-title">Our Salt Products</h2>
          <p className="section-subtitle">High-quality edible salt available in various packaging options for retail and wholesale.</p>

          <div className="grid-2">
            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee' }}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>Edible Fine Salt</h3>
              <p style={{ marginBottom: '10px', color: '#555' }}>Ideal for cooking, hotels, and daily retail use. Free-flowing and pure.</p>
              <p style={{ fontWeight: 'bold', marginBottom: '20px' }}>Packaging: 500g / 1kg / 25kg / 50kg</p>
              <button onClick={openModal} className="btn btn-primary">Enquire Now</button>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee' }}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>Edible Crystal Salt</h3>
              <p style={{ marginBottom: '10px', color: '#555' }}>Suitable for bulk cooking, pickles, and food processing<br></br>units.</p>
              <p style={{ fontWeight: 'bold', marginBottom: '20px' }}>Packaging: 500g / 1kg / 25kg / 50kg</p>
              <button onClick={openModal} className="btn btn-primary">Enquire Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="grid-3">
            {industries.map((item, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>{item.icon}</div>
                <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve (SEO) */}
      <section className="section section-grey">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Trusted Bulk Salt Supplier in North Chennai</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 30px', color: '#555' }}>
            We supply edible salt across Chennai, especially North Chennai including <strong>Redhills, Madhavaram, Manali, Minjur, Ponneri, Ennore, Thiruvottiyur, Tondiarpet, Ambattur, Puzhal, Perambur, Kolathur, Vyasarpadi, Gummidipoondi, Avadi</strong> and nearby areas.
          </p>
          <a href="/areas-we-serve" className="btn btn-outline">View All Service Areas</a>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'var(--primary-blue)', color: '#fff', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Looking for a reliable bulk salt supplier?</h2>
          <p style={{ marginBottom: '30px', opacity: 0.9 }}>Regular supply available. Get best wholesale rates today.</p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${phone}`} className="btn" style={{ background: '#fff', color: 'var(--primary-blue)' }}>Call Now</a>
            <a href={`https://api.whatsapp.com/send/?phone=917010086367&text=Hi+ASR+Impex%2C+I+want+to+enquire+about+bulk+salt+supply.&type=phone_number&app_absent=0`} target="_blank" className="btn btn-whatsapp">WhatsApp Now</a>
            <button onClick={openModal} className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>Get Quote</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;