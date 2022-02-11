import React from 'react';
import Home from './Home';
import About from './About';
import Extra from './Extra';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/extra' element={<Extra/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
