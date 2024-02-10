import React from 'react';
import './Page6.css';

// Destructuring props in the functional component for better readability
const Card = ({ title, price, features }) => (
  <div className="card">
    <h2 className="card-title">{title}</h2> {/* Use semantic tags for titles */}
    <div className="card-price">{price}</div>
    <ul className="card-features">
      {/* Use feature text as key for list items if it's unique */}
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
    <button className="card-button">Get Started</button>
  </div>
);

const Page6 = () => {
  const premiumFeatures = [
    'Everything in Plus and:',
    'Best Deals on Fees & Charges.',
    'Flexible Solution’s based on your need.',
    'Priority Processing .',
    '1 Year RM Support.'
  ];

  const eliteFeatures = [
    'Everything in Premium and',
    'Priority Access to Senior Financial Experts',
    // 'Rapid Lending Processing.',
    'Regular financial consultations sessions.',
    'Lifetime F2 Membership.',
    'Resolution with lender in case of any service issues.'
  ];

  return (
    <div className="container">
      <Card
        title="Premium"
        price="₹3,369"
        features={premiumFeatures}
      />
      <Card
        title="Elite"
        price="₹5,369"
        features={eliteFeatures}
      />
    </div>
  );
};

export default Page6;
