// src/InvestorsPage.js
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import memtok from '../contractInfo/memtok.json'
import {BrowserProvider, ethers} from 'ethers'


const InvestorsPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [walletInput, setWalletInput] = useState("");
  const [amount, setamountInput] = useState("");
  


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
      cost: "$25",
      walletAddress: "0xfB8ae9808D84BF601f2Ef6178Da51a612bD046D0",
    },
    {
      memePageLink: "https://example.com/meme-page2",
      followers: "2,500",
      cost: "$100",
      walletAddress: "0xFA0e1F9B7fCa4B2d0fAcd724f604c676B633424F",
    },
    {
      memePageLink: "https://example.com/meme-page3",
      followers: "3,800",
      cost: "$150",
      walletAddress: "0x789...",
    },
  ];

  const handleBuyClick = (card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
    setWalletInput("");
    setamountInput("");
  };

  const handlePay = async () => {
    // Handle the payment logic here
    const contractAddress = '0x169bd22A14C6F5b619C360a91CA8164466C6926a';
    console.log("Wallet Address:", walletInput);
    console.log("Card Info:", selectedCard);
    const provider = new BrowserProvider(window.ethereum);

    const signer = await provider.getSigner()
    const movieRev = new ethers.Contract(contractAddress, memtok.abi, signer)
    // mint();
    console.log(amount, "========inside withdraw===")

    await (await movieRev.transfer(selectedCard.walletAddress, ethers.parseUnits(amount.toString(), 18))).wait();

    alert('Transaction Complete!!');
    handleClosePopup();
  };

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
              <p className="mb-2"><strong>Cost:</strong> {card.cost}</p>
              <p className="mb-4"><strong>Wallet Address:</strong> {card.walletAddress.slice(0, 6) + "..." + card.walletAddress.slice(-4)}</p>
              <div className="flex justify-center">
                <button 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
                  onClick={() => handleBuyClick(card)}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {selectedCard && (
        <div className="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="popup-inner bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Confirm Transaction</h2>
            {/* <input 
              type="text" 
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              value={walletInput}
              onChange={(e) => setWalletInput(e.target.value)}
              placeholder="Enter your wallet address"
            /> */}

            <input 
              type="number"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              value={amount}
              onChange={(e) => setamountInput(e.target.value)}
              placeholder="Enter amount"
            />

            <div className="flex justify-end gap-4">
              <button 
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                onClick={handleClosePopup}
              >
                Cancel
              </button>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                onClick={handlePay}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorsPage;
