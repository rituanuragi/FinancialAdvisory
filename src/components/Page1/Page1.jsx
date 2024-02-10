import React from 'react';
import './Page1.css';
import pic1 from './pic1.png';

const Page1 = () => {
  return (
    <div className="container">
      <div className="textSection">
        <h1>F2 Fintech: Our Purpose</h1>
        <br/>
        <div className='text'>
        <span className="highlight3">At F2 Fintech,</span> we're not just financial advisors – 
        
       <span className="highlight2">we're your <br/> partners on a journey towards </span>
      <span className="prosperity">prosperity</span>.
      </div>
        
        <ul className="bulletPoints">
          <li className="listItem">
            <span className="listItemBefore">✔</span>
            We <span className="highlight1">Educate</span> & Spread financial literacy (manage money on their own)
          </li>
          <li className="listItem">
            <span className="listItemBefore">✔</span>
            We <span className="highlight1">Assist</span> in achieving FIRE for young/middle aged to follow their passion.
          </li>
          <li className="listItem">
            <span className="listItemBefore">✔</span>
            We <span className="highlight1">Make</span> you part of India's Bull run.
          </li>
        </ul>
       
      <div className="imageSection"> 
      <img className="image" src={pic1} alt="Financial Planning" />
      </div>
      <div className='card1'>
        <h2>Invest For Your Plans</h2>
        <p>Invest for your life goals across different timeframes.</p>
      </div>
      </div>
    </div>
  );
};

export default Page1;