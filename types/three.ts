import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

interface Collection {
  id: number;
  name: string;
  categories: Category[];
}

const exampleProduct: Product = {
  id: 1,
  name: 'Luxury Lipstick',
  description: 'A high-end lipstick with a smooth finish.',
  price: 35.00,
  imageUrl: 'path/to/luxury-lipstick.jpg',
};

const exampleCategory: Category = {
  id: 1,
  name: 'Lip Products',
  products: [exampleProduct],
};

const exampleCollection: Collection = {
  id: 1,
  name: 'Spring Collection',
  categories: [exampleCategory],
};

export type { Product, Category, Collection }; // Exporting types for use in other components