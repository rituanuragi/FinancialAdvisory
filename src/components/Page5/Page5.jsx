// Page5.jsx
import React from 'react';
import './Page5.css';

const Card = ({ title, price, features }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-price">{price}</div>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="card-button">Get Started</button>
    </div>
  );
};

const Page5 = () => {
  const starterFeatures = [
    'Get a free Consulting session',
    'Free 15 min Expert session',
    'First Call: Discuss your financial goals and share information with our advisor',
    'Second Call: Receive a customized financial advisory based on your unique needs'
  ];

  const plusFeatures = [
    'All advisory related to lending, insurance, and many more',
    'Comprehensive Loan Options',
    'Personalized Lending Solutions',
    'Term Sheet for Easy Comparison',
    '6 Month RM Support'
  ];

  return (
    <div className="container">
      <Card
        title="Starter"
        price="₹1"
        features={starterFeatures}
      />
      <Card
        title="Plus"
        price="₹1,369"
        features={plusFeatures}
      />
    </div>
  );
};

export default Page5;
