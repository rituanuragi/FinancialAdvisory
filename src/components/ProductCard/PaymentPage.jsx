import React from 'react';
import './PaymentPage.css'; 
import qrCodeImage from './qrcode.jpeg'; 

const PaymentPage = ({ upiId, onClose }) => {
  return (
    <div className="payment-page">
      <div className="payment-container">
        <span className="close-button" onClick={onClose}>&times;</span>

        <h3>Payment Details</h3>
        <div className='pay'>Scan Here To Pay</div>
        <img src={qrCodeImage} alt="QR Code" className="qr-code"/>
        <p className="upi">UPI ID: {upiId}</p>
        <button className="close-payment-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
