import { useEffect, useState } from 'react';

// Function to format currency for luxury products
export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Formats number to currency
};

// Custom hook to fetch product data
export const useFetchProducts = (url: string) => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [url]);

    return { products, loading, error }; // Returns products, loading state, and error
};

// Function to filter products by category
export const filterProductsByCategory = (products: any[], category: string) => {
    return products.filter(product => product.category === category); // Filters products
};

// Default export for utility functions
export default { formatCurrency, useFetchProducts, filterProductsByCategory };