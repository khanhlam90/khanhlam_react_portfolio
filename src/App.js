import React from 'react';
import About from './components/About';
import herobg from './assets/cover/hero-bg.jpg';

function App() {

  return (
    <div>
      <img 
        src={herobg} 
        className="my-2" 
        style={{ width: "100%"}} 
        alt="hero" 
      />
      <main>
      <About></About>
      </main>
    </div>
  );
}

export default App;