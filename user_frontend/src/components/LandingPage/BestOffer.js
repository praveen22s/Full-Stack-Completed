import React from "react";
import bestOfferRoom1 from "../../assets/best1.jpg";
import bestOfferRoom2 from "../../assets/best2.jpg";
import bestOfferRoom3 from "../../assets/best3.jpg";

function BestOffer() {
  return (
    <div id="best-offer" className="bg-[#EDEFFD] text-[#4464AD]">
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center">
          Best Offer of the Month(First Come First Serve)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="relative rounded-xl overflow-hidden bg-white shadow-md border-2 border-[#F58F29]">
            <img
              src={bestOfferRoom1}
              alt="Best Offer Room 1"
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
              Hall 1
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                Experience luxury at an unbeatable price.
              </p>
              <p className="text-xl font-bold text-[#F58F29]">$699 per night</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden bg-white shadow-lg border-2 border-[#4464AD]">
            <img
              src={bestOfferRoom2}
              alt="Best Offer Room 2"
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
              Hall 2
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                Enjoy comfort and elegance with a special discount.
              </p>
              <p className="text-xl font-bold text-[#4464AD]">$799 per night</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden bg-white shadow-md border-2 border-[#F58F29]">
            <img
              src={bestOfferRoom3}
              alt="Best Offer Room 3"
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
              Hall 3
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                Special rates for a limited time only.
              </p>
              <p className="text-xl font-bold text-[#F58F29]">$599 per night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestOffer;
