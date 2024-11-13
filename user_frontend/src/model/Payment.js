// src/models/Payment.js
class Payment {
  constructor(
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
  ) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
    this.amount = amount;
  }

  validateCardNumber() {
    return /^\d{16}$/.test(this.cardNumber);
  }

  validateCVV() {
    return /^\d{3,4}$/.test(this.cvv);
  }

  validateExpiryDate() {
    const [month, year] = this.expiryDate.split("/");
    if (!month || !year) return false;
    const expiry = new Date(`20${year}-${month}-01`);
    return expiry > new Date();
  }

  validateEmail() {
    // Implementasi sederhana untuk validasi email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  validate() {
    return (
      this.validateCardNumber() &&
      this.validateCVV() &&
      this.validateExpiryDate() &&
      this.validateEmail()
    );
  }
}

export default Payment;
