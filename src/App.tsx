import './App.css';
import Navbar from './components/Nav/Navbar';
import Home from './Pages/Home/Home';
import Inscription from './Pages/Sign/inscription';
import Connect from './Pages/Sign/Connexion';
import PersonnalInfo from './Pages/User/Userpersonnalinfo';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connect />} /> 
        <Route path="/informationpersonnelle" element={<PersonnalInfo />} /> 
      </Routes>
    </>
  );
};

export default App;
