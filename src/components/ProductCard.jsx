import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

const ProductCard = ({ plant, onAddToWishlist }) => {
  const [liked, setLiked] = useState(false);

  // const handleLike = () => {
  //   setLiked(!liked);
  //   if (!liked) {
  //     console.log("adding",plant);
  //     onAddToWishlist(plant);
  

  //     alert(`${plant.name} has been added to your wishlist!`); // Add plant to wishlist if liked
  //   }
  // };
  const handleAddToWishlist = () => {
    onAddToWishlist(plant);
   
    alert(`${plant.name} has been added to your wishlist!`);  // Pass the correct plant data to the wishlist
  };

  return (
    <div className="flex flex-col mb-10 ml-16">
      <div className="h-72 w-60 overflow-hidden rounded-3xl relative">
        <img src={plant.image} alt={plant.name} className="w-full h-full object-cover rounded-xl" />
        <div className="absolute top-3 right-2">
          {/* Add other components or icons as necessary */}
        </div>
      </div>

      <div className="w-full mt-4 space-y-2 text-left">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="flex items-center text-yellow-500 mr-2">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="text-gray-500">{plant.rating}</span>
            <span>
              <p className="text-gray-500 pl-2">Reviews</p>
            </span>
          </div>
          <button onClick={handleAddToWishlist}  className={`text-xl focus:outline-none ${liked ? 'text-red-500' : 'text-gray-500'}`}>
            <FontAwesomeIcon icon={liked ? faSolidHeart : faRegularHeart} />
          </button>
        </div>
        <h2 className="text-xl font-semibold">{plant.name}</h2>
        <p className="text-xl text-black-900 font-bold">${plant.price}</p>
        <button className="text-white px-4 py-2 w-full mt-4 hover:bg-green-600 transition-colors" style={{ borderRadius: '30px', backgroundColor: '#7AA262' }}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
