import { useCanteenProds } from '@/hooks/canteen_prods';
import { fetcher } from '@/lib/axios';
import React, { useEffect, useState } from 'react';

const CartTable = ({ cartItems, onRemoveItem }) => {
  const { data } = useCanteenProds()
  const [productsData, setProductsData] = useState([]);

  const fetchProds = async (id) => {
    return await fetcher({ url: "/canteen/get_items", params: { id: id } })
  }

  useEffect(() => {
    cartItems.forEach(element => {
      fetchProds(element?.item_id)
        .then(res => {
          setProductsData(productsData => [...productsData, res?.data[0]])
        })
    });

    return () => {
      setProductsData([])
    }
  }, [cartItems])


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
          {
            productsData?.map((prod, ind) => (
              <tr key={"prod" + ind}>
                <td className="px-4 py-2 border">{prod?.name}</td>
                <td className="px-4 py-2 border">{cartItems[ind]?.quantity}</td>
                <td className="px-4 py-2 border">{prod?.price}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => {
                      onRemoveItem(prod?.id)
                    }}
                    className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
