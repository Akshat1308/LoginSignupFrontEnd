
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import LoginSignup from './pages/LoginSignup';
import ThirdPage from './pages/ThirdPage';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="profile" element={<ThirdPage />} />
      </Routes>
    </Router>
  );
}

export default App;
