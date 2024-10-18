import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Send search term to parent App component
  };

  return (
    <nav className="bg-white px-4 py-2 shadow-md">
      <div className="flex justify-between items-center">
        {/* Left Navigation Items */}
        <div className="flex space-x-4">
          <a href="/shop" className="text-gray-700 hover:text-blue-500">Shop Plants</a>
          <a href="/care" className="text-gray-700 hover:text-blue-500">Plant Care</a>
          <a href="/blog" className="text-gray-700 hover:text-blue-500">Blog</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>

        {/* Center Title */}
        <div className="text-2xl font-bold mx-auto">ShopYouNursery</div>

        {/* Right Search and Profile Buttons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by name, price, or type..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border rounded-md px-2 py-1"
          />
          <button className="text-gray-700 hover:text-green-500">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button className="text-gray-700 hover:text-green-500">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <button className="text-gray-700 hover:text-green-500">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
