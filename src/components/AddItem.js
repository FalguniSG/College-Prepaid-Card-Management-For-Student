import React, { useState } from 'react';

const AddItem = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemExpire, setItemExpire] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item object with the input data
    const newItem = {
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity,
      expire: itemExpire,
    };

    // Pass the new item to the parent component (e.g., CafeMenu) through the onAddItem callback
    onAddItem(newItem);

    // Reset the input fields after adding the item
    setItemName('');
    setItemPrice('');
    setItemQuantity('');
    setItemExpire('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Item Name</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter item name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter item price"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter item quantity"
            required
          />
        </div>
     
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
