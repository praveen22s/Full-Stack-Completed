// src/components/Payment/PaymentForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios here
import Payment from "../../model/Payment";
import "../../App.css";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payment = new Payment(
      name,
      email,
      address,
      city,
      state,
      postalCode,
      cardNumber,
      expiryDate,
      cvv,
      amount
    );

    if (payment.validate()) {
      setError("");

      try {
        // Send the payment data to the backend
        const response = await axios.post("http://localhost:8081/api/v1/payments/submit", payment);

        // Navigate to PaymentSummary with payment data
        navigate("/payment-summary", { state: { payment: response.data } });
      } catch (error) {
        setError("Failed to submit payment. Please try again.");
      }
    } else {
      setError("Invalid payment details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="paymentForm">
      <div>
        <label>Name on Card</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div>
        <label>State/Province</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Postal Code</label>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Card Number (16)</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Expiry Date (MM/YY)</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
