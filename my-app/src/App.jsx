import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JoinPage from './components/JoinPage';
import InvestorsPage from './components/InvestorsPage'; 

function App() {
  return (
    <Router>
      <div
      className="h-[110vh] bg-cover bg-center"
      style={{ backgroundImage: 'url(https://elementor.com/blog/wp-content/uploads/2021/12/2021_11_Herding_Cats_for_animation.gif)' }}
    >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/investors" element={<InvestorsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
