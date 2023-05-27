import React from 'react';

const VerificationStatus = ({ isVerified }) => {
  return (
    <div>
      {isVerified ? (
        <h2>OTP Verification Successful</h2>
      ) : (
        <h2>Invalid OTP. Please try again.</h2>
      )}
    </div>
  );
};

export default VerificationStatus;
