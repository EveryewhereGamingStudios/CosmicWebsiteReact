import React, { useState } from 'react';

const InputForm = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter your information here" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
