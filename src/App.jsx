import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './components/LoginPage'
import DashboardPage from './components/DashboardPage'
import LandingPage from './components/LandingPage'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
     
      </Routes>
    </BrowserRouter>
  )
}

export default App
