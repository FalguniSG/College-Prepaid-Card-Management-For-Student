import React, { useEffect, useState } from 'react';
import CartTable from './CartTable';
import { useCanteenProds } from '@/hooks/canteen_prods';
import { useReadRfid } from '@/hooks/read_rfid';
import { post } from '@/lib/axios';
import { useUserSearchContext } from '@/contexts/usersSearchContext';

const Cart = () => {
  const { data: canteen_prods } = useCanteenProds()
  const [cartItems, setCartItems] = useState([])
  const { rfidData, isScanning, scanRfid } = useReadRfid()
  const { userSearchData } = useUserSearchContext()

  const [formData, setFormData] = useState({
    student_id: userSearchData?.data?.student_id,
    rfid: rfidData,
    items_cart: cartItems
  })

  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (cartItems?.length >= 0) {
      setFormData({
        ...formData,
        items_cart: cartItems
      })
    }
  }, [cartItems])

  useEffect(() => {
    if (rfidData) {
      setFormData({ ...formData, rfid: rfidData })
    }
  }, [rfidData])

  useEffect(() => {
    if (userSearchData?.data?.student_id) {
      setFormData({ ...formData, student_id: userSearchData?.data?.student_id })
    }
  }, [userSearchData])


  const onRemoveItem = (id) => {
    console.log(id);
    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.item_id != id);
    })
  }

  const handleSubmit = async (e) => {
    if (formData?.rfid != "" && formData?.student_id != "" && formData?.items_cart?.length > 0) {
      console.log("Here")
      await post({
        postendpoint: "/canteen/sell", postData: formData, config: {
          headers: {
            "Content-Type": "application/www-x-form-urlencoded"
          }
        }
      })
        .then(res => {
          alert(res?.data?.message)
          setCartItems([])
        })
        .catch((error) => {
          console.log(error?.response?.data?.message)
        })
    }
  }


  return (
    <div className="flex-col items-center mb-2 bg-gray-300 p-5">
      <div className='flex'>
        <div className="flex-1 mr-2">
          <select
            value={item}
            name="item_id"
            onChange={e => setItem(e.currentTarget.value)}
            className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">-- Select an item --</option>
            {/* Add your list of items here */}
            {canteen_prods?.data?.map((prods, ind) => (
              <option key={"prod" + ind} value={prods?.id}>{prods?.name}</option>
            ))}
            {/* Add more items as needed */}
          </select>
        </div>

        <div className="flex-1 mr-2">
          <input
            type="number"
            name='quantity'
            value={quantity}
            onChange={e => setQuantity(e.currentTarget.value)}
            className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Quantity"
          />
        </div>

        <div className="flex-1/2 mr-2">
          <button
            type="button"
            onClick={e => {
              e.stopPropagation()
              setCartItems(cartItems => {
                return [
                  ...cartItems,
                  { item_id: item, quantity: quantity }
                ]
              })
            }}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Add
          </button>
        </div>
      </div>

      {cartItems?.length > 0 && <CartTable cartItems={cartItems} onRemoveItem={onRemoveItem} />}

      <div className='max-w-md mx-auto mt-4 flex items-center'>
        {isScanning ? "Scan Card" : <button className='text-white transition-colors duration-200 transform bg-gradient-to-b from-sky-800 to-emerald-900 rounded-md ml-5 px-5 py-2 text-xl hover:text-blue-300 focus:outline-none'
          onClick={(e) => {
            e.stopPropagation()
            setFormData({ ...formData, submit: false })
            scanRfid()
          }}
        >Scan RFID Card</button>}
        <div className="mt-1 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300">
          {rfidData ?? ""}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleSubmit(e)
          }}
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
