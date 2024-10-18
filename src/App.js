import React, { useState } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import Navbar from './components/NavBar';
import FilterSidebar from './components/FilterSideBar';
import ProductListing from './components/ProductListing';
import productData from './components/ProductData';
import Footer from './components/Footer';
import Wishlist from './components/Whislist';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    indoor: false,
    outdoor: false,
    petFriendly: false,
    sortBy: 'featured',
  });
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onSearch={handleSearch} />
      
      <div className="flex">
        <div className="hidden md:block w-1/4">
          <FilterSidebar onFilterChange={handleFilters} />
        </div>

        <div className="w-4/5">
          <div className="p-6">
            <ProductListing 
              products={productData} 
              searchTerm={searchTerm} 
              filters={filters} 
              onAddToWishlist={handleAddToWishlist} // Pass the wishlist function here
            />
          </div>
        </div>
      </div>
      
      <Wishlist wishlistItems={wishlistItems} onRemove={handleRemoveFromWishlist} />
      <Footer />
    </div>
  );
}

export default App;
