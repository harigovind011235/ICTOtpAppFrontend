import React,{useState} from 'react';
import OTPForm from './OTPForm';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [showOTPForm, setShowOTPForm] = useState(false);

  async function handleEmailSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:4000/send-otp', { 'email' :email});

    } catch (error) {
      console.log(error);
    }
  
    setShowOTPForm(true);
  }

  return (
    <div>
      {showOTPForm ? (
        <OTPForm email={email}/>
      ) : (
        <div>
          <h1>OTP Authentication</h1>
          <form onSubmit={handleEmailSubmit}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;