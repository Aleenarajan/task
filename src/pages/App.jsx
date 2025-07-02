import { useState } from 'react';
import '../global.css';
import '../responsive.css';
import '../index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import About from '../components/About';
import OurWork from '../components/OurWork';
import WhatWeDo from '../components/WhatWeDo';
import NewsInsights from '../components/NewsInsights';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <div className="bg-white min-h-screen">
        <Header />
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
      <OurWork />
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
