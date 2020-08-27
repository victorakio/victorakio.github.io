import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
