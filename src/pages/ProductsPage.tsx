import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, Link } from 'react-router-dom';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { RootState } from '../context/store';
import { fetchProducts } from '../context/slices/productSlice';
import { addToCart } from '../context/slices/cartSlice';
import type { AppDispatch } from '../context/store';

function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.items);
  const status = useSelector((state: RootState) => state.products.status);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(productId));
  };

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          {category ? `${category} Products` : 'All Products'}
        </h1>
        <p className="text-dark/70 max-w-2xl mx-auto">
          Discover our curated collection of premium {category ? category.toLowerCase() : 'tech'} products, 
          designed to enhance your digital lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link 
            key={product.id}
            to={`/products/${product.id}`}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                <StarIcon className="h-4 w-4 text-accent" />
                {product.rating}
              </div>
              {product.featured && (
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                  {product.name}
                </h2>
                <span className="text-2xl font-bold text-primary">${product.price}</span>
              </div>
              <p className="text-dark/70 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-dark/50">
                  {product.stock} units available
                </span>
                <button 
                  onClick={(e) => handleAddToCart(e, product.id)}
                  className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ShoppingBagIcon className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;