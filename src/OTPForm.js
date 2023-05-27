import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message'

const OTPForm = (props) => {
  
  const [otp, setOTP] = useState('');
  const [showMessage,setMessage] = useState('');
  const email = props.email;
  
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`email is ${email}`)
    try {
        const response = await axios.post('http://127.0.0.1:4000/verify-otp', { 'email':email,'otp': otp });
        if (response.data.message === 'OTP verification successful'){
          const responseMessage = response.data.message;
          setMessage(responseMessage);
        }
        else{
          const responseMessage = response.data.error;
          setMessage(responseMessage);
        }
      } catch (error) {
        console.log(error.response.data.error);
      }

  };

  return (
    <div>
      <h1>OTP Verification</h1>
      {showMessage ? <Message variant="danger">{showMessage}</Message> : null}
      <form onSubmit={handleSubmit}>
        <label>Enter OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OTPForm;
