import React from 'react';
import CartTable from './CartTable';

const Cart = ({ item, quantity, price, onQuantityChange, onPriceChange }) => {
  return (
    <div className="flex-col items-center mb-2 bg-gray-300 p-5">
      <div className='flex'>
      <div className="flex-1 mr-2">
        <select
          value={item}
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
          className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Quantity"
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
   
    <CartTable />

    <div className='max-w-md mx-auto mt-4 flex items-center'>
    <p className='text-red-500 text-2xl font-bold bg-red-200 rounded-lg p-2'>Scan RFID Card</p>
    <button
        type="button"
        className="w-[40%] bg-blue-500 text-white ml-8 py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Checkout
      </button>
    </div>
    
    </div>
  );
};

export default Cart;
