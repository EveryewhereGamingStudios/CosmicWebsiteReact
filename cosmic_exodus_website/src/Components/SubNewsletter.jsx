import React from 'react';

const SubNewsletter = () => {
  return (

    <div className="flex">
      <form className="waitlist-form mt-4 flex items-center justify-center">
        <input 
          type="email"
          placeholder="Enter your email"
          className="waitlist-input p-2 rounded-md outline outline-offset-1 outline-violet-500	 text-white bg-transparent mx-auto mr-2"
        />
        <button className="waitlist-button rounded-md p-2 text-white bg-yellow-500 mx-auto">
          Join Waitlist
        </button>
      </form>
    </div>
  );
};

export default SubNewsletter;

