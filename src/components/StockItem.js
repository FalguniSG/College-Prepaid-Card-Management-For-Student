import React from 'react';

const StockUpdate = ({ item, quantity, price, onQuantityChange, onPriceChange }) => {
  return (
    <div className="flex items-center mb-2 bg-gray-300 p-5">
      <div className="flex-1 mr-2">
        <select
          value={item}
          onChange={(e) => onQuantityChange(e.target.value)}
          className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">-- Select an item --</option>
          {/* Add your list of items here */}
          <option value="Coffee">Coffee</option>
          <option value="Tea">Tea</option>
          <option value="Pastries">Pastries</option>
          {/* Add more items as needed */}
        </select>
      </div>
      <div className="flex-1 mr-2">
        <input
          type="number"
          value={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
          className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Quantity"
        />
      </div>
      <div className="flex-1 mr-2">
        <input
          type="number"
          value={price}
          onChange={(e) => onPriceChange(e.target.value)}
          className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Price"
        />
      </div>
      <div className="flex-1/2 mr-2">
      <button
        type="button"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add
      </button>
      </div>
    
    </div>
  );
};

export default StockUpdate;
