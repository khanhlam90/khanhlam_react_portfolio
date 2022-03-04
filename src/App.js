import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';

function App() {

  return (
    <div>
      <Header>

      </Header>
      <main>
      <About></About>
      <Resume></Resume>
      </main>
      <Footer />
    </div>
  );
}

export default App;