import React from "react";
import ProductCard from "./ProductCard.tsx";
import Navbar from "../common/navbar/Navbar.tsx";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=450&q=80",
        price: 99.99,
        description:
            "High-quality sound with noise cancellation and long battery life.",
        rating: 4.6,
        reviews: 215,
        inStock: true,
    },
    {
        id: 2,
        name: "Smart Watch",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=450&q=80",
        price: 149.9,
        description: "Track your fitness and stay connected with style.",
        rating: 4.3,
        reviews: 187,
        inStock: false,
    },
    {
        id: 3,
        name: "DSLR Camera",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=450&q=80",
        price: 549.0,
        description: "Capture life's best moments in stunning detail.",
        rating: 4.9,
        reviews: 329,
        inStock: true,
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=450&q=80",
        price: 45.0,
        description: "Portable, waterproof, and perfect for everywhere.",
        rating: 4.7,
        reviews: 142,
        inStock: true,
    },
];

const Products: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
