import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="*" element={<Accueil />} />
        <Route path="Reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
