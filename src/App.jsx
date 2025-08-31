import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './components/LoginPage'
import DashboardPage from './components/DashboardPage'
import LandingPage from './components/LandingPage'
import SignUpPage from './components/SignUpPage';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
     
      </Routes>
    </BrowserRouter>
  )
}

export default App
