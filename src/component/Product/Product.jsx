import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCart from "./ProductCart";

const Product = ({ h, info }) => {
  const [card, setC] = useState([]);
  const [loading, setL] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setL(true);
        const res = await axios.get("Card.json");
        setC(res.data);
      } finally {
        setL(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="loading loading-infinity loading-lg text-blue-600 my-10 font-bold"></span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-16">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {card.map((v) => (
          <ProductCart key={v.id} p={v} h={h} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Product;
