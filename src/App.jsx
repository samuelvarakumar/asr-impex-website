import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyButtons from './components/StickyButtons';
import EnquiryModal from './components/EnquiryModal';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Areas from './pages/Areas';
import Contact from './pages/Contact';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/areas-we-serve" element={<Areas />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Global Conversion Elements */}
      <StickyButtons />
      <EnquiryModal />
    </div>
  );
}

export default App;