import React from 'react';
import Navbar from './componets/navbar';
import BelieverQuote from './componets/quote';
import CardComponent from './componets/landing.jsx';
import Footer from './componets/footer.jsx';
import About from './componets/about.jsx';
import ScrollButtons from './componets/scrollButton';
import OurMission from './componets/ourmission.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <BelieverQuote />
      <CardComponent />
      <About />
      <OurMission />
      <Footer />
      <ScrollButtons />
      </div>
  );
}

export default App;