import './App.css';
import Navbar from './components/Nav/Navbar';
import Home from './Pages/Home/Home';
import Inscription from './Pages/Sign/Inscription';
import Connect from './Pages/Sign/Connexion';
import PersonnalInfo from './Pages/User/Userpersonnalinfo';
import { Routes, Route } from 'react-router-dom';
import Cvdraganddrop from './Pages/CV/Cvdraganddrop';
import CvUser from './Pages/CV/CvUser';
import Footer from './components/Nav/Footer';


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connect />} /> 
        <Route path="/informationpersonnelle" element={<PersonnalInfo />} />
        <Route path="/CV" element={<Cvdraganddrop />} />  
        <Route path="/CVuser" element={<CvUser />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
