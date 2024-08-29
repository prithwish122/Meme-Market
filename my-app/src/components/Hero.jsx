import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(".hero-title", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(".hero-button", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, delay: 0.5, duration: 1 });
  }, []);

  const handleJoinNow = () => {
    navigate('/join'); // Redirect to JoinPage
  };

  const handleInvest = () => {
    navigate('/investors'); // Redirect to InvestorsPage
  };

  return (
    <div className="hero-section flex items-center justify-center h-[80vh] bg-transparent overflow-hidden">
      <div className="text-left max-w-2xl">
        <h1
          className="relative right-[130px] bottom-16 hero-title text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-500 to-purple-700"
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          Buy, Sell, and Trade Instagram Meme<br/> Pages
        </h1>
        {/* <p className="relative right-20 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-8"
           style={{ fontFamily: 'Roboto, sans-serif' }}>
          Unlock your potential and take your gaming to the next level with our funding solutions.
        </p> */}
        <div className="relative flex gap-4 top-8 right-28">
          <button
            onClick={handleJoinNow}
            className="hero-button bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Join Now
          </button>
          <button
            onClick={handleInvest}
            className="hero-button bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
