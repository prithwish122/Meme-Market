// src/InvestorsPage.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const InvestorsPage = () => {
  useEffect(() => {
    gsap.fromTo(".card", 
      { rotationY: 0, scale: 0.9, opacity: 0.5 }, 
      { rotationY: 360, scale: 1, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  const cards = [
    {
      memePageLink: "https://example.com/meme-page1",
      followers: "1,200",
      cost: "$50",
    },
    {
      memePageLink: "https://example.com/meme-page2",
      followers: "2,500",
      cost: "$100",
    },
    {
      memePageLink: "https://example.com/meme-page3",
      followers: "3,800",
      cost: "$150",
    },
  ];

  return (
    <div className="investors-page flex flex-wrap gap-6 justify-center min-h-screen p-10 bg-gradient-to-r from-violet-200 via-indigo-250 to-blue-300">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="card w-80 h-96 perspective-1000 flex items-center justify-center"
        >
          <div className="inner-card w-full h-full bg-gradient-to-r from-violet-600 via-indigo-700 to-blue-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="p-6 flex flex-col items-center text-white">
              <h3 className="text-xl font-semibold mb-2">{card.memePageLink}</h3>
              <p className="mb-2"><strong>Followers:</strong> {card.followers}</p>
              <p className="mb-4"><strong>Cost:</strong> {card.cost}</p>
              <div className="flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvestorsPage;
