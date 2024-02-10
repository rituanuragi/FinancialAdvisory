import React from 'react';
import './Page8.css';
import pic4 from './pic4.png'; // Make sure this path is correct

const Card2 = ({ title, price, features }) => (
  <div className="card2">
    <h2 className="card2-title">{title}</h2>
    <div className="card2-price">{price}</div>
    <ul className="card2-features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="card2-button">Get Started</button>
  </div>
);

const Page8 = () => {
  const BasicFeatures = [
    'Eligibility Check from multiple lenders.',
    'Personalized Lending Solutions.',
    'Term Sheet for Easy Comparison.',
  ];

  return (
    <div className="page8-container">
      <div className="image-container">
        <img src={pic4} alt="Financial Advisory" />
      </div>
      <div className="card-container">
        <Card2
          title="Basic"
          price="₹639"
          features={BasicFeatures}
        />
      </div>
    </div>
  );
};

export default Page8;
