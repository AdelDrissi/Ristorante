import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
