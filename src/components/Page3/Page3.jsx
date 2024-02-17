import React from 'react';
import './Page3.css';

function Page3() {
  return (
    <div className="Page3">
      <div className="header">
        <h2>Why F2 Financial Advisor?</h2>
        <p>Embark on a transformative financial journey where expertise meets innovation.
           Our plans aren't just services;
           <br/> they are pathways to financial empowerment.
           Understand the "why" behind our offerings and join
           <br/>  F2 Financial Advisory in
           Empowering Dreams and Enhancing Lives.
        </p>
      </div>
      <div className="features2">
        <h3>Additional Features Across All Plans:</h3>
        <div className="feature2">
          <strong>Fee charged only after a successful loan disbursal</strong>
          <p>We believe in your success – our fee structure aligns our interests with yours, we only charge fee if your loan is disbursed.</p>
        </div>
        <div className="feature2">
          <strong>No More Loan Rejections</strong>
          <p>Talk to us before you get turned down for a loan. We can spot problems early and keep your loan plans going smoothly. <span className="icon"> 🛡️</span></p>
        </div>
        <div className="feature2">
          <strong>Make Your Credit Score Higher</strong>
          <p>We give you a simple plan to make your credit score better. Our team works with you to make your credit strong. <span className="icon">📈</span></p>
        </div>
      </div>
    </div>
  );
}

export default Page3;
