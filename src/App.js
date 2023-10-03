import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import Contact from './pages/Contact';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Services" element={<Menu />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
