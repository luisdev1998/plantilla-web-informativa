import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import Inicio from './pages/Inicio/Inicio';
import Nosotros from './pages/Nosotros/Nosotros';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <div className='main'>
          <Routes>
            <Route path="/" element={<Inicio/> } />
            <Route path="/nosotros" element={<Nosotros/> } />
          </Routes>
        </div>
      <Footer></Footer>
    </Router>
  )
}

export default App
