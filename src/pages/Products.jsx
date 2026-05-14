import { Helmet } from 'react-helmet-async';
import { useEnquiry } from '../context/EnquiryContext';
import { FaBoxOpen } from 'react-icons/fa';
import fineSaltImg from '../assets/fine_salt.png';
import crystalSaltImg from '../assets/crystal_salt.png';

const Products = () => {
  const { openModal } = useEnquiry();

  return (
    <>
      <Helmet>
        <title>Fine Salt & Crystal Salt Supplier in Chennai | ASR Impex</title>
        <meta name="description" content="Buy edible fine salt and crystal salt in bulk. Packaging: 1kg, 25kg, 50kg. Best prices for hotels and stores in Chennai." />
      </Helmet>

      <section className="section">
        <div className="container">
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Our Products</h1>
          <p className="section-subtitle">Bulk Orders Accepted | Regular Stock Available</p>

          <div className="grid-2" style={{ marginTop: '40px' }}>
            {/* Fine Salt */}
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ height: '250px', background: `url(${fineSaltImg}) center/cover no-repeat`, backgroundColor: '#eee' }}></div>
              <div style={{ padding: '30px' }}>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>Edible Fine Salt</h2>
                <p style={{ marginBottom: '15px', color: '#555' }}>
                  Our fine salt is clean, food-grade, and free-flowing. It is the preferred choice for hotels, restaurants, and retail provision stores. Dissolves quickly, making it ideal for daily cooking.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#666' }}>
                  <FaBoxOpen /> Packaging Options: <strong>500g, 1kg, 25kg, 50kg Bags</strong>
                </div>
                <button onClick={openModal} className="btn btn-primary">Enquire About Fine Salt</button>
              </div>
            </div>

            {/* Crystal Salt */}
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ height: '250px', background: `url(${crystalSaltImg}) center/cover no-repeat`, backgroundColor: '#eee' }}></div>
              <div style={{ padding: '30px' }}>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>Edible Crystal Salt</h2>
                <p style={{ marginBottom: '15px', color: '#555' }}>
                  High-quality crystal salt suitable for bulk cooking requirements. Widely used in pickle manufacturing, snack units, and masala grinding units where specific crystal texture is required.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#666' }}>
                  <FaBoxOpen /> Packaging Options: <strong>500g, 1kg, 25kg, 50kg Bags</strong>
                </div>
                <button onClick={openModal} className="btn btn-primary">Enquire About Crystal Salt</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;