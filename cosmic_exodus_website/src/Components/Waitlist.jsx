import React, { useState } from 'react';
import Modal from 'react-modal';

const Waitlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="waitlist text-center py-2 bg-purple-500 w-full">
      <p className="text-white text-lg font-medium cursor-pointer  inline-flex align-middle" onClick={openModal}>
        <span className="underline">Join our waitlist to be the first to know when we launch </span>🚀
      </p>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black-gradient z-10 "  
        appElement={document.getElementById('root')}
      >
        <div className="rounded-md p-4 h-auto flex flex-col items-center justify-center z-20" style={{ backgroundColor: 'rgba(255, 255, 255, 1)'}}>
          <p className="text-black text-lg font-medium inline-flex align-middle">
            Hello, subscribe here  
          </p>
          <form className="waitlist-form mt-4 flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="waitlist-input p-2 rounded-md text-black bg-gray-200 mx-auto mr-2"
            />
            <button className="waitlist-button rounded-md p-2 text-white bg-indigo-600 hover:bg-indigo-500 mx-auto" onClick={closeModal}>
              Join Waitlist
            </button>
          </form>
        </div>
      </Modal>


{/* <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black-gradient opacity-75 z-10"
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center rounded-md p-4 h-auto flex flex-col items-center justify-center z-20 bg-white"
        appElement={document.getElementById('root')}
      >
          <p className="text-black text-lg font-medium inline-flex align-middle mb-4">
            Hello, subscribe here  
          </p>
          <form className="waitlist-form flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="waitlist-input p-2 rounded-md text-black bg-gray-200 mx-auto mr-2"
            />
            <button className="waitlist-button rounded-md p-2 text-white bg-indigo-600 hover:bg-indigo-500 mx-auto" onClick={closeModal}>
              Join Waitlist
            </button>
          </form>
      </Modal> */}


    </div>
  );
};

export default Waitlist;
