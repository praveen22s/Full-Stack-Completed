import React from "react";
import oneBedRoom from "../../assets/kasur.jpg";
import twoBedRoom from "../../assets/kasur2.jpg";
import tv from "../../assets/tv.jpg";
import kitchen from "../../assets/dapur.jpg";
import bathroom from "../../assets/kamarmandi.jpg";
import garden from "../../assets/taman.jpg";

function Facilities() {
  return (
    <div id="facilities" className="bg-[#EDEFFD] text-[#466995]">
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center">Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={oneBedRoom}
              alt="One Bed Room"
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
              Air Conditioner
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={twoBedRoom}
              alt="Two Bed Room"
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
              Free Wi-Fi
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={tv}
              alt="TV"
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
            Catering Services
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={kitchen}
              alt="Kitchen"
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
            Stage and Lighting Setup
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={bathroom}
              alt="Bathroom"
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
              Lift Access
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={garden}
              alt="Garden"
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
              Parking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
