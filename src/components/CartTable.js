import React from 'react';

const CartTable = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="max-w-md mx-auto mt-4">
      <table className="table-auto w-full border">
        {/* Table header */}
        <thead>
          <tr>
            <th className="px-4 py-2 border">Item</th>
            <th className="px-4 py-2 border">Quantity</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
         
            <tr>
              <td className="px-4 py-2 border">item.name</td>
              <td className="px-4 py-2 border">item.quantity</td>
              <td className="px-4 py-2 border">item.price</td>
              <td className="px-4 py-2 border">
                <button
                 
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </td>
            </tr>
       
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
