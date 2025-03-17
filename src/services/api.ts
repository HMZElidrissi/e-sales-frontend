import { mockProducts, mockUsers, mockOrders } from '../data/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Products API
export const getProducts = async () => {
  await delay(500);
  return mockProducts;
};

export const getProductById = async (id: number) => {
  await delay(300);
  return mockProducts.find(p => p.id === id);
};

// Users API
export const getUsers = async () => {
  await delay(500);
  return mockUsers;
};

export const getUserById = async (id: number) => {
  await delay(300);
  return mockUsers.find(u => u.id === id);
};

// Orders API
export const getOrders = async () => {
  await delay(500);
  return mockOrders;
};

export const getOrderById = async (id: number) => {
  await delay(300);
  return mockOrders.find(o => o.id === id);
};

export const getUserOrders = async (userId: number) => {
  await delay(400);
  return mockOrders.filter(o => o.userId === userId);
};