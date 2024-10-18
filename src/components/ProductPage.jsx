import React, { useState } from 'react';
import ProductListing from './ProductListing';
import Wishlist from './Wishlist';

const ProductPage = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      // Add the product if it's not already in the wishlist
      if (!prevWishlist.some((item) => item.name === product.name)) {
        const updatedWishlist = [...prevWishlist, product];
        console.log("Updated wishlist:", updatedWishlist); // Log the updated wishlist
        return updatedWishlist;
      }
      console.log("Product already in wishlist:", product.name); // Log if it's a duplicate
      return prevWishlist; // No duplicates
    });
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Plants for Sale</h1>
      <ProductListing onAddToWishlist={addToWishlist} />
      <Wishlist wishlist={wishlist} /> {/* Display the wishlist */}
    </div>
  );
};

export default ProductPage;
