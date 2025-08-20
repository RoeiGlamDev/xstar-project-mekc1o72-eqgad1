import { ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address?: string;
}

export interface Order {
  id: string;
  user: User;
  items: CartItem[];
  totalAmount: number;
  orderDate: Date;
}

export interface AppContext {
  cart: CartItem[];
  user: User | null;
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export type ChildrenProps = {
  children: ReactNode;
};

export default {}; // Default export for module completeness