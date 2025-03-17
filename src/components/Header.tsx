import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCartIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { RootState } from '../context/store';
import Logo from './Logo';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const categories = ['All', 'Electronics', 'Audio', 'Wearables'];

  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>
          <nav className="flex items-center gap-8">
            <div className="relative group">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 py-2 hover:text-secondary transition-colors"
              >
                Products <ChevronDownIcon className="h-5 w-5 group-hover:transform group-hover:-rotate-180 transition-transform duration-200" />
              </button>
              {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/products${category === 'All' ? '' : `?category=${category}`}`}
                      className="block px-4 py-2 text-dark hover:bg-secondary hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link 
              to="/cart" 
              className="flex items-center gap-2 hover:text-secondary transition-colors relative"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header