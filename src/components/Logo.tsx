import React from 'react';
import { ShoppingBagIcon, BoltIcon } from '@heroicons/react/24/solid';

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <ShoppingBagIcon className="h-8 w-8 text-secondary" />
        <BoltIcon className="h-4 w-4 text-accent absolute -right-1 -bottom-1 transform rotate-12" />
      </div>
      <span className="text-2xl font-bold tracking-tight text-white">E-Sales</span>
    </div>
  );
}

export default Logo;