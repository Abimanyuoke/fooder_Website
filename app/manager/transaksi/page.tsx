"use client"


import { useState } from 'react';
import Image from 'next/image';

import Img from '../../../public/image/biryani1.png'
import Img2 from '../../../public/image/biryani3.png'
import Img3 from '../../../public/image/biryani2.png'

// Example menu data
const menuItems = [
  { id: 1, name: 'Biryani', price: 50000, image: Img },
  { id: 2, name: 'Chiken Biryani', price: 80000, image: Img2 },
  { id: 3, name: 'Rice Arabian', price: 20000, image: Img3 },
];
// Define cart type
type Cart = {
  [key: number]: number; // key is the menu item ID, value is the quantity
};

export default function Transaction() {
  const [cart, setCart] = useState<Cart>({}); // Explicitly set the type of cart

  // Handle adding items to the cart
  const handleAdd = (id: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  // Handle removing items from the cart
  const handleRemove = (id: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id] > 1) {
        newCart[id] -= 1;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  // Calculate total price
  const totalPrice = Object.keys(cart).reduce((total, id) => {
    const menuItem = menuItems.find((item) => item.id === parseInt(id));
    return total + (menuItem?.price || 0) * cart[parseInt(id)];
  }, 0);

  return (
    <div className="p-5 font-sans bg-slate-900 min-h-dvh text-primary">
      <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Menu</p>
          <h1 className='text-3xl font-bold text-white'>Menu</h1>
          <p className='text-xs text-gray-400'>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ullam a nisi vero qui sed consequuntur iste cum minima error.
          </p>
        </div>
      <div className="flex gap-12 justify-center">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg p-4 text-center w-40 shadow-sm hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-24 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-3">Rp {item.price.toLocaleString()}</p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                -
              </button>
              <span className="text-lg font-medium">{cart[item.id] || 0}</span>
              <button
                onClick={() => handleAdd(item.id)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-3">Keseluruhan Transaksi</h2>
        {totalPrice > 0 ? (
          <p className="text-lg font-semibold">Total: Rp {totalPrice.toLocaleString()}</p>
        ) : (
          <p className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-32 text-center font-semibold">Harus pesan dulu</p>
        )}
      </div>
    </div>
  );
}
