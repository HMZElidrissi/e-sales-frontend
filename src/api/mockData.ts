// Mock data for APIs
export const mockProducts = [
  {
    id: 1,
    name: 'Laptop Pro',
    price: 1299.99,
    description: 'High-performance laptop for professionals',
    category: 'Electronics'
  },
  {
    id: 2, 
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'Premium wireless headphones with noise cancellation',
    category: 'Audio'
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 299.99,
    description: 'Feature-rich smartwatch with health tracking',
    category: 'Wearables'
  }
];

export const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'admin'
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
    total: 1699.97,
    status: 'completed',
    date: '2024-02-20'
  },
  {
    id: 2,
    userId: 2,
    products: [
      { productId: 3, quantity: 1 }
    ],
    total: 299.99,
    status: 'pending',
    date: '2024-02-21'
  }
];