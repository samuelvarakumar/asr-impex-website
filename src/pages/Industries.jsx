import { Helmet } from 'react-helmet-async';
import { useEnquiry } from '../context/EnquiryContext';
import { FaUtensils, FaTruck, FaStore, FaIndustry, FaBuilding } from 'react-icons/fa';

const Industries = () => {
  const { openModal } = useEnquiry();
  const phone = "+917010086367";

  const data = [
    { icon: <FaUtensils size={40} />, title: "Hotels & Restaurants", desc: "Daily cooking requires consistent, pure salt. We ensure your kitchen never stops by providing regular fine salt delivery in 1kg or bulk 25kg/50kg packs." },
    { icon: <FaTruck size={40} />, title: "Catering Services", desc: "Handling large events requires reliable suppliers. We provide bulk crystal and fine salt on short notice for weddings, corporate events, and mass cooking." },
    { icon: <FaStore size={40} />, title: "Provision Stores & Supermarkets", desc: "Increase your margins with our competitive wholesale rates. We supply 1kg retail packs and 25kg/50kg bulk bags for resale." },
    { icon: <FaIndustry size={40} />, title: "Food Processing Units", desc: "Pickle making, snack manufacturing, and masala units need high-quality crystal salt. We provide consistent quality suited for food processing standards." },
    { icon: <FaBuilding size={40} />, title: "Hostels, Hospitals & Canteens", desc: "Institutional kitchens require hygienic, food-grade salt in large quantities. We offer credit terms and scheduled deliveries for institutions." }
  ];

  return (
    <>
      <Helmet>
        <title>B2B Salt Supply for Hotels, Caterers & Stores | ASR Impex</title>
        <meta name="description" content="We supply bulk edible salt to hotels, catering services, provision stores, and food processing units in Chennai." />
      </Helmet>

      <section className="section section-grey">
        <div className="container">
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Industries We Serve</h1>
          <p className="section-subtitle">Tailored salt supply solutions for every business type.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {data.map((item, i) => (
              <div key={i} style={{ background: '#fff', padding: '30px', borderRadius: '8px', display: 'flex', gap: '20px', alignItems: 'flex-start', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <div style={{ color: 'var(--primary-blue)', minWidth: '50px', marginTop: '5px' }}>{item.icon}</div>
                <div>
                  <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: '#555', marginBottom: '15px' }}>{item.desc}</p>
                  <button onClick={openModal} className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>Get Supply Quote</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;