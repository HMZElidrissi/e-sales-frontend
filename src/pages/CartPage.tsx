import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../context/store';
import { removeFromCart, updateQuantity } from '../context/slices/cartSlice';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.products.items);

  const getProduct = (id: number) => {
    return products.find(p => p.id === id);
  };

  const total = cartItems.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
        Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
          <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
          <a href="/products" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => {
              const product = getProduct(item.id);
              if (!product) return null;
              
              return (
                <div key={item.id} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-32 h-32 object-cover rounded-xl"
                  />
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                    <p className="text-blue-600 font-semibold">${product.price}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl text-gray-600">Total</span>
              <span className="text-3xl font-bold text-blue-600">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage