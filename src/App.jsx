import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './components/LandingPage'
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<DashboardPage />} />
     
      </Routes>
    </BrowserRouter>
  )
}

export default App
