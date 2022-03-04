import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Project from './components/Project';

function App() {

  return (
    <div>
      <Header>

      </Header>
      <main>
      <About></About>
      <Resume></Resume>
      <Portfolio></Portfolio>
      </main>
      <Footer />
    </div>
  );
}

export default App;