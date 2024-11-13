import React from "react";
import PaymentForm from "../components/Payment/PaymentForm"; // Ganti dengan path yang sesuai
import PaymentSummary from "../components/Payment/PaymentSummary"; // Ganti dengan path yang sesuai
import Footer from "../components/Footer/Footer";

const PaymentPage = ({ payment, handlePaymentSubmit }) => {
  return (
    <div>
      <h1>Payment Form</h1>
      {!payment ? (
        <PaymentForm onSubmit={handlePaymentSubmit} />
      ) : (
        <PaymentSummary payment={payment} />
      )}
      <Footer />
    </div>
  );
};

export default PaymentPage;
