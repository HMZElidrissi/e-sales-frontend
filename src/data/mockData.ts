export const mockProducts = [
  {
    id: 1,
    name: 'MacBook Pro M2',
    price: 1499.99,
    description: 'Latest MacBook Pro with M2 chip, 14-inch Liquid Retina XDR display, and up to 18 hours of battery life',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=500',
    featured: true,
    rating: 4.9,
    stock: 15,
    specs: {
      processor: 'Apple M2 Pro',
      memory: '16GB unified memory',
      storage: '512GB SSD',
      display: '14-inch Liquid Retina XDR',
      battery: 'Up to 18 hours',
      ports: ['Thunderbolt 4', 'HDMI', 'MagSafe 3']
    }
  },
  {
    id: 2, 
    name: 'Sony WH-1000XM5',
    price: 399.99,
    description: 'Industry-leading noise canceling headphones with exceptional sound quality and up to 30 hours of battery life',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    featured: true,
    rating: 4.8,
    stock: 25,
    specs: {
      battery: 'Up to 30 hours',
      noiseCanceling: 'Adaptive Sound Control',
      connectivity: 'Bluetooth 5.2',
      charging: 'USB-C',
      weight: '250g'
    }
  },
  {
    id: 3,
    name: 'Apple Watch Series 9',
    price: 399.99,
    description: 'Advanced health features, Always-On Retina display, and powerful performance in a stunning design',
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    featured: true,
    rating: 4.7,
    stock: 20,
    specs: {
      display: 'Always-On Retina',
      processor: 'S9 chip',
      sensors: ['Heart Rate', 'ECG', 'Blood Oxygen'],
      battery: 'Up to 18 hours',
      waterResistant: '50 meters'
    }
  },
  {
    id: 4,
    name: 'iPad Air',
    price: 599.99,
    description: 'Powerful A15 Bionic chip, 10.9-inch Liquid Retina display, and Apple Pencil support',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
    featured: false,
    rating: 4.8,
    stock: 12,
    specs: {
      display: '10.9-inch Liquid Retina',
      processor: 'A15 Bionic',
      storage: ['64GB', '256GB'],
      camera: '12MP Ultra Wide',
      battery: 'Up to 10 hours'
    }
  },
  {
    id: 5,
    name: 'Bose QuietComfort Ultra',
    price: 329.99,
    description: 'Premium noise canceling earbuds with immersive audio and comfortable fit',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500',
    featured: false,
    rating: 4.6,
    stock: 18,
    specs: {
      battery: 'Up to 24 hours',
      connectivity: 'Bluetooth 5.3',
      noiseCanceling: 'CustomTune technology',
      waterResistant: 'IPX4',
      charging: 'Wireless & USB-C'
    }
  },
  {
    id: 6,
    name: 'Samsung Galaxy Watch 6',
    price: 299.99,
    description: 'Advanced health tracking, sleek design, and long battery life',
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500',
    featured: false,
    rating: 4.5,
    stock: 22,
    specs: {
      display: 'Super AMOLED',
      processor: 'Exynos W930',
      sensors: ['Heart Rate', 'ECG', 'Body Composition'],
      battery: 'Up to 40 hours',
      durability: 'IP68 & 5ATM'
    }
  }
];

export const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  }
];

export const mockOrders = [
  {
    id: 1,
    userId: 1,
    products: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 }
    ],
    total: 2299.97,
    status: 'completed',
    date: '2024-02-20',
    shippingAddress: {
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105'
    }
  },
  {
    id: 2,
    userId: 2,
    products: [
      { productId: 3, quantity: 1 }
    ],
    total: 399.99,
    status: 'pending',
    date: '2024-02-21',
    shippingAddress: {
      street: '456 Market St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    }
  }
];