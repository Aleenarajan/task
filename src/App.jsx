import { useState } from 'react'
import './global.css' 

import './App.css'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import About from './components/About';
import Services from './components/Services';
import WhatWeDo from './components/WhatWeDo';
import NewsInsights from './components/NewsInsights';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <div className="bg-white min-h-screen">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <WhatWeDo />
      <NewsInsights />
      <SocialMedia />
    </>
  );
}

function Users() {
  return <h2 className="text-center text-2xl mt-10">Users Page</h2>;
}

export default App;
