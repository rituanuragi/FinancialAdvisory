import React from 'react';
import './Page4.css';
import pic2 from './pic2.png'
function Page4() {
  return (
    <div className="page4">
      <div className="content">
        <h1>Are you seeking financial advice but concerned about the Cost?</h1>
        <p className="highlight">
          No worries! <span className="f2-fintech">F2 Fintech</span> proudly presents a financial advisory plan, a mere <span className="investment">Rs 01 investment</span>, opening the doors to expert guidance.
        </p>
        <h2>Why ₹1?</h2>
        <p>
          More than a fee, it's a commitment to value. Charging ₹1 for our financial advisory symbolizes its importance. This token amount signifies your investment in informed decision-making and reminds you that our affordable advice is backed by dedicated expertise.
        </p>
        <div className="illustration1">
         <img src={pic2} alt="Finance Illustration" style={{ maxWidth: '300px', width: '100%', height: 'auto', marginTop: '2rem', marginBottom: '1rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
</div>

        </div>
      </div>
   
  );
}

export default Page4;
