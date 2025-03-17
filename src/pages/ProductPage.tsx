import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StarIcon, ShoppingBagIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { RootState } from '../context/store';
import { addToCart } from '../context/slices/cartSlice';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
        <button
          onClick={() => navigate('/products')}
          className="text-primary hover:text-primary-dark transition-colors"
        >
          Return to products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <StarIcon className="h-5 w-5 text-accent" />
              {product.rating}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-dark mb-4">Product Specifications</h3>
            <dl className="space-y-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="grid grid-cols-3 gap-4">
                  <dt className="font-medium text-gray-600 capitalize">{key}</dt>
                  <dd className="col-span-2 text-dark">
                    {Array.isArray(value) ? value.join(', ') : value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-dark mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">${product.price}</span>
              <span className="text-sm text-gray-500">
                {product.stock} units available
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-8">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              Add to Cart
            </button>
          </div>

          <div className="bg-secondary/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-dark mb-4">Shipping Information</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Free shipping on orders over $50</li>
              <li>Express delivery available</li>
              <li>30-day return policy</li>
              <li>2-year warranty included</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;