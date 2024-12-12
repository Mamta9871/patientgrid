import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Plans from './components/Plans';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar/>
      <Home/>
      <Plans/>
      <Footer/>
    </div>
  );
}

export default App;
