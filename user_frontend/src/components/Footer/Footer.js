import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="bg-[#466995] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Bagian Newsletter */}
        <div className="container mx-auto py-10 px-4">
          <div className="mb-8 md:mb-0 md:flex-1">
            <h3 className="text-xl font-bold">Newsletter & Special Promo</h3>
            <form className="mt-4 flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 rounded-l bg-white text-black" 
              />
              <button className="p-2 bg-[#F58F29] text-white rounded-r">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bagian About Us */}
        <div className="container mx-auto py-10 px-4">
          <div className="mb-8 md:mb-0 md:flex-1 md:text-center">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>We are a leading venue booking company providing the best services to our guests. Our goal is to ensure a comfortable and memorable stay for all our customers.</p>
          </div>
        </div>

        {/* Bagian Informasi Kontak */}
        <div className="container mx-auto py-10 px-4">
          <div id="contact" className="mb-8 md:mb-0 md:flex-1 md:text-right">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>123 muja Avenue, Cityville, Country</p>
            <p>Phone: +123 456 789</p>
            <p>Email: info@EventEase.com</p>
          </div>
        </div>
        
      </div>

      {/* Bagian Hak Cipta */}
      <div className="w-full flex justify-center items-center mt-8">
        <p className="text-center">&copy; 2024 HotelGo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
