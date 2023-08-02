import { post } from '@/lib/axios';
import React, { useState } from 'react';

const AddItem = ({ onAddItem }) => {
  const [items, setItems] = useState({
    name: "",
    price: "",
    quantity: "",
    submit: false
  });

  const handleInputChange = (e) => {
    setItems({
      ...items,
      submit: false,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }


  const clearForm = () => {
    setItems({
      name: "",
      price: "",
      quantity: "",
      submit: false,
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    await post({
      postendpoint: "canteen/add_item", postData: items, config: {
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded'
        }
      }
    })
      .then(res => {
        alert(res?.data?.message);
        clearForm()
      })
      .catch((err) => {
        alert(err?.response?.data?.message)
      })
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Item Name</label>
          <input
            type="text"
            name='name'
            value={items?.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter item name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name='price'
            value={items?.price}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter item price"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            name='quantity'
            value={items?.quantity}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter item quantity"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={(e) => {
            e.stopPropagation()
            setItems({ ...items, submit: true })
          }}
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
