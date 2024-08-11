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

function App() {
  return (
    <>
      <Header /> {/* Add the Header component here */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
