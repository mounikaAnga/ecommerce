import React from 'react';
import { FiTrash2 } from "react-icons/fi";

const Wishlist = ({ wishlist = [] }) => {
  console.log(wishlist);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-black text-center font-poppins font-bold text-2xl mb-8">
        My Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        wishlist.map((plant, index) => (
          <div key={index} className="flex items-center gap-4 p-4 rounded-md w-[1128px] justify-center">
            <FiTrash2 size={28} className="text-black cursor-pointer" />
            <div 
              className="w-32 h-[170px] bg-lightgray bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url(${plant.image})` }}
            ></div>
            <div className="flex flex-col items-start gap-[20px] flex-shrink-0 w-[327px]">
              <div className="text-black font-poppins font-semibold text-lg leading-normal">
                {plant.name}
              </div>
              <div className="flex gap-2">
                <div className="text-black font-poppins font-medium text-base">
                  ${plant.price}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
