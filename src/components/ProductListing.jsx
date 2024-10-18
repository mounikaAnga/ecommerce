// import React from 'react';
// import FilterSidebar from './FilterSideBar';
// import ProductCard from './ProductCard'; // Ensure correct casing for the import

// const ProductListing = ({ products, searchTerm, filters, onAddToWishlist }) => {
//   // Filter products based on search term and filters
//   const filteredProducts = products
//     .filter((product) => {
//       // Case-insensitive search term filter for name
//       const term = searchTerm.toLowerCase(); // Convert search term to lowercase once for efficiency
//       return (
//         product.name.toLowerCase().includes(term) || // Search by name
//         product.price.toString().includes(searchTerm) || // Search by price
//         (term === 'indoor' && product.indoor) || // Search by indoor
//         (term === 'outdoor' && product.outdoor) || // Search by outdoor
//         (term === 'petFriendly' && product.petFriendly) // Search by pet friendly
//       );
//     })
//     .filter((product) => {
//       // Size filter (if applied)
//       if (filters.size && filters.size !== 'all') {
//         return product.size === filters.size;
//       }
//       return true; // If no size filter is applied, include all products
//     })
//     .filter((product) => {
//       // Type filters
//       const matchesType =
//         (!filters.indoor || product.indoor) &&
//         (!filters.outdoor || product.outdoor) &&
//         (!filters.petFriendly || product.petFriendly);

//       // Price filters
//       let matchesPrice = true;
//       if (filters.priceRange === '0-50') {
//         matchesPrice = product.price >= 0 && product.price <= 50;
//       } else if (filters.priceRange === '51-100') {
//         matchesPrice = product.price > 50 && product.price <= 100;
//       }

//       return matchesType && matchesPrice;
//     })
//     .sort((a, b) => {
//       // Sorting logic
//       if (filters.sortBy === 'priceLowHigh') {
//         return a.price - b.price;
//       } else if (filters.sortBy === 'priceHighLow') {
//         return b.price - a.price;
//       }
//       return 0; // Default sorting (featured)
//     });
  
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:w-4/4">
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((plant) => (
//           <ProductCard 
//             key={plant.id} // Use a unique key (like id) instead of index
//             plant={plant} 
//             onAddToWishlist={onAddToWishlist} // Pass the wishlist function
//           />
//         ))
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default ProductListing;
import React from 'react';
import ProductCard from './ProductCard'; // Ensure correct import path
import ProductData from './ProductData'; // Ensure correct import path

const ProductListing = ({ onAddToWishlist }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {ProductData.map((plant, index) => (
        <ProductCard 
          key={index} 
          plant={plant} 
          onAddToWishlist={onAddToWishlist} 
        />
      ))}
    </div>
  );
};

export default ProductListing;
