import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/Details/DetailsPage';
import Auth from './pages/auth';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header /> {/* Add the Header component here */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
      <Footer /> {/* Add the Footer component here */}
    </>
  );
}

export default App;
