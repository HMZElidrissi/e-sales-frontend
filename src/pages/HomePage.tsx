import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { RootState } from '../context/store';

function HomePage() {
  const products = useSelector((state: RootState) => state.products.items);
  const categories = ['Electronics', 'Audio', 'Wearables'];

  const getFeaturedProduct = (category: string) => {
    return products.find(p => p.category === category && p.featured);
  };

  return (
    <div className="space-y-16">
      <div className="text-center py-20 bg-gradient-to-b from-secondary to-white rounded-3xl px-4">
        <h1 className="text-5xl font-bold mb-6 text-primary">
          Welcome to E-Sales
        </h1>
        <p className="text-xl text-dark mb-12 max-w-2xl mx-auto">
          Discover our curated collection of premium tech products, designed to enhance your digital lifestyle
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Explore All Products
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => {
          const product = getFeaturedProduct(category);
          if (!product) return null;

          return (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform group-hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={category}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    <StarIcon className="h-4 w-4 text-accent" />
                    {product.rating}
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">
                    {category}
                  </h2>
                  <p className="text-dark/70 mb-4">
                    Explore our premium {category.toLowerCase()} collection
                  </p>
                  <div className="flex items-center text-primary">
                    <span className="font-medium">Shop Now</span>
                    <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;