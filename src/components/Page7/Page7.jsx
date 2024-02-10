import React from 'react';
import './Page7.css';
import pic3 from './pic3.png'; 

function Page7() {
  return (
    <div className="loan-container">
      <div className="loan-image">
        <img src={pic3} alt="Finance Illustration" />
      </div>
      <div className="loan-body-content">
        <div className="loan-header">
          <h2>Need a loan but unsure about your eligibility?</h2>
        </div>
        <p>No need to worry, because With just a small investment, you can unlock a world of possibilities and discover your eligibility with multiple lenders in your area.</p>
        <div className="loan-more-info">
          <p>But wait, there's more! We go above by providing you with valuable insights based on your (CIBIL) and information. You'll receive a comprehensive term sheet, allowing you to effortlessly compare interest rates and lending options.</p>
        </div>
        <div className="loan-footer">
          <p>Be the savvy borrower you were meant to be – make informed decisions every time you consider a loan.</p>
        </div>
      </div>
    </div>
  );
}

export default Page7;
