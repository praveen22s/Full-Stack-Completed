import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/LandingPage/Hero";
import Facilities from "./components/LandingPage/Facilities";
import BestOffer from "./components/LandingPage/BestOffer";
import Footer from "./components/Footer/Footer";
import PaymentPage from "./pages/PaymentPage";
import AboutPage from "./pages/AboutPage";
import ListPage from "./pages/ListPage";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import PaymentSummary from "./components/Payment/PaymentSummary";

const App = () => {
  const [payment, setPayment] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handlePaymentSubmit = (paymentData) => {
    setPayment(paymentData);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <>
                  <Hero />
                  <Facilities />
                  <BestOffer />
                  <Footer />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/payment"
            element={
              <PaymentPage
                payment={payment}
                handlePaymentSubmit={handlePaymentSubmit}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/payment-summary" element={<PaymentSummary />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
