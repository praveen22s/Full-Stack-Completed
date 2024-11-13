import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import oneBedRoom from "../../assets/kasur5.jpg";//change this
import twoBedRoom from "../../assets/kasur3.jpg";
import bestOfferRoom1 from "../../assets/best1.jpg";
import image1 from "../../assets/best2.jpg";
import image2 from "../../assets/best3.jpg";
import image3 from "../../assets/dapur3.jpg";
import image4 from "../../assets/dapur2.jpg";
import image5 from "../../assets/kamarmandi5.jpg";//change this
import image6 from "../../assets/kamarmandi2.jpg";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const staticProducts = [
      {
        id: 1,
        name: "AR HALL",
        description: "Spacious hall with a large seating capacity and a stunning city view.",
        price: 190000000,
        image: oneBedRoom,
      },
      {
        id: 2,
        name: "Kumaran Mahal",
        description: "Luxurious hall with a separate lounge area and a breathtaking ocean view.",
        price: 2000000000,
        image: twoBedRoom,
      },
      {
        id: 3,
        name: "KCP MAHAL",
        description: "The most beautiful view in the entire venue available.",
        price: 480000000,
        image: bestOfferRoom1,
      },
      {
        id: 4,
        name: "MUTHU MAHALA",
        description:
          "This elegant hall venue is ideally located on the main commercial artery of the city in the heart of New York.",
        price: 230000,
        image: image1,
      },
      {
        id: 5,
        name: "Country HALL",
        description:
          "Save up to 50% off traditional event venues. Free WiFi, great location near downtown, full catering options, AV equipment, dedicated event support, bowling alley, fitness center, and more.",
        price: 14500000,
        image: image2,
      },
      {
        id: 6,
        name: "Regal Orb Event Venue",
        description:
          "Your home away from home. Brand new fully equipped premium halls, fast WiFi, full catering options, and on-site AV equipment.",
        price: 39000000,
        image: image3,
      },
      {
        id: 7,
        name: "Winter Panorama Hall",
        description:
          "Great Deals and Royal Look",
        price: 17000000,
        image: image4,
      },
      {
        id: 8,
        name: "Historic Lion Club Hall",
        description:
          "Unmatched Luxury. ",
        price: 1500000,
        image: image5,
      },
      {
        id: 9,
        name: "Twin Vertex Hall",
        description:
          "New experience in the Making. Be the first to experience the luxury of the Twin Vertex. ",
        price: 100000,
        image: image6,
      },
      // Add more products as needed
    ];
    setProducts(staticProducts);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Halls</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">
                ₹{product.price}
                </span>
                <Link
                  to="/payment"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
