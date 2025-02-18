'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  sale: boolean;
};

const products: Product[] = [
  { id: 1, name: 'Flawless Glow BB Cream with SPF30+', price: 20, image: '/fl.jpg', sale: true },
  { id: 2, name: 'Prime & Purifier', price: 30, image: '/p1.jpg', sale: true },
  { id: 3, name: 'Blush & Glow Duo (pink desires)', price: 20, image: '/bg.jpg', sale: false },
  { id: 4, name: 'Blush & Glow Duo (peach desires)', price: 20, image: '/pe.jpg', sale: true },
  { id: 5, name: 'Liquid Blush (Rose pink)', price: 10, image: '/r.jpg', sale: true },
  { id: 6, name: 'Liquid Blush (rusty rose)', price: 10, image: '/ru.jpg', sale: true },
  { id: 7, name: 'Liquid Blush (nude)', price: 10, image: '/nu.jpg', sale: false },
  { id: 8, name: 'Multipurpose Makeup Brush', price: 20, image: '/bu.jpg', sale: true },
  { id: 9, name: 'Neon Pink', price: 10, image: '/np.jpg', sale: true },
  { id: 10, name: 'Scarlet Red', price: 20, image: '/red.jpg', sale: true },
  { id: 11, name: 'Coral Peach', price: 15, image: '/pea.jpg', sale: true },
  { id: 12, name: 'Plum Foolery', price: 10, image: '/fo.jpg', sale: true },
];

export default function Cosmetics() {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantities, setQuantities] = useState<Record<number, number>>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );
   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantities[product.id] }
            : item
        );
      }
      return [...prevCart, { product, quantity: quantities[product.id] }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, amount: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleQuantityChange = (id: number, amount: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + amount),
    }));
  };

  return (
    <div className="container mx-auto p-6 pb-12 bg-gray-300 mt-20" id="shop">
      <h1 className="text-5xl font-bold text-center mb-6 text-pink-500">Cosmetics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
          data-aos="fade-up"
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform relative h-[500px] flex flex-col justify-between mb-6"
          >
            {product.sale && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Sale
              </span>
            )}
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={250}
              className="rounded-md object-cover w-full h-64"
            />
            <div className="flex-grow">
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-700 font-bold text-xl">${product.price.toFixed(2)}</p>
              {/* Quantity Selector */}
              <div className="flex items-center mt-3">
                <button
                  className="px-2 py-1 bg-gray-300 rounded"
                  onClick={() => handleQuantityChange(product.id, -1)}
                >
                  -
                </button>
                <span className="px-4">{quantities[product.id]}</span>
                <button
                  className="px-2 py-1 bg-gray-300 rounded"
                  onClick={() => handleQuantityChange(product.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 mt-20">
          <button className="text-2xl absolute top-2 right-2" onClick={() => setIsCartOpen(false)}>
            &times;
          </button>
          <h2 className="text-xl font-bold mb-4">Cart ({cart.length})</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center border-b py-2">
                  <Image src={product.image} alt={product.name} width={50} height={50} />
                  <div className="ml-3 flex-grow">
                    <p className="text-sm font-semibold">{product.name}</p>
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() => updateQuantity(product.id, -1)}
                      >
                        -
                      </button>
                      <span className="px-4">{quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-md font-bold">${(product.price * quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="mt-4 p-3 bg-gray-100 text-lg font-semibold">
                Subtotal: ${cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}
              </div>
              <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
