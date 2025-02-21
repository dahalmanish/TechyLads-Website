import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import Dashboard from './admin/Dashboard.jsx';
import PublicLayout from './publiclayout.jsx';
import ProtectedLayout from './protectedlayout.jsx';
import Productad from './admin/productad.jsx';
import Servicead from './admin/servicead.jsx';
import Product from './pages/Product.jsx';
import Carrierad from './admin/carrierad.jsx';
function App() {
   
  return (
    <>
        <Routes>
      {/* Public Routes (With Navigation) */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Protected Routes (No Navigation) */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Productad />} />
          <Route path="/service" element={<Servicead/>}/>
          <Route path="/carrier" element={<Carrierad/>} />
        </Route>
    </Routes>
    </>
  )
}

export default App
