import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-60"
        onClick={onClose}
      ></div>
      <div className="relative bg-white bg-opacity-80 p-8 rounded-lg shadow-xl z-10 w-full max-w-md mx-4 sm:mx-8">
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Form Submitted</h3>
        <p className="text-gray-700 mb-4">Here are the details you submitted:</p>
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          <li><strong>Instagram Page Link:</strong> {formData.instagramLink}</li>
          <li><strong>Followers:</strong> {formData.followers}</li>
          <li><strong>Amount:</strong> {formData.amount}</li>
        </ul>
        <p className="text-gray-700 mb-4">Your request will be processed shortly.</p>
        <button
          onClick={onClose}
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-lg w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const JoinPage = () => {
  const [formData, setFormData] = useState({
    instagramLink: '',
    followers: '',
    amount: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Show the modal
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      instagramLink: '',
      followers: '',
      amount: ''
    });
    setCurrentStep(1); // Reset step to 1 after closing modal
  };

  return (
    <div className="relative top-[100px] join-page flex items-center justify-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
      <div className={`w-full max-w-lg p-8 bg-opacity-10 shadow-lg rounded-lg backdrop-blur-md ${isModalOpen ? 'opacity-30' : 'opacity-100'}`}>
        <h2 className="text-5xl font-bold mb-8 text-center text-gradient bg-gradient-to-r from-violet-600 via-violet-700 to-violet-800 bg-clip-text text-transparent">
          Join Now
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && (
            <div>
              <label className="block text-sm font-medium text-white">Instagram Page Link</label>
              <input
                type="url"
                name="instagramLink"
                value={formData.instagramLink}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-transparent text-white"
              />
              <label className="block text-sm font-medium text-white mt-4">Followers</label>
              <input
                type="number"
                name="followers"
                value={formData.followers}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-transparent text-white"
              />
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <label className="block text-sm font-medium text-white">Amount</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-transparent text-white"
              />
            </div>
          )}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
              >
                Previous
              </button>
            )}
            {currentStep < 2 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:from-violet-500 hover:via-violet-600 hover:to-violet-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} formData={formData} />
    </div>
  );
};

export default JoinPage;
