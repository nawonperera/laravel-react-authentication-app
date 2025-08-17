import React from "react";
import type Products from "./Products";
const ProductCard: React.FC<{ product: (typeof Products)[0] }> = ({
    product,
}) => (
    <div className="group bg-white/70 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-2xl rounded-2xl p-4 transition-all flex flex-col relative overflow-hidden">
        <div className="relative rounded-xl overflow-hidden h-44 bg-gradient-to-tr from-indigo-100 to-purple-100 flex items-center justify-center mb-4">
            <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform"
            />
            {product.inStock ? (
                <span className="absolute top-2 left-2 bg-green-500 text-xs text-white px-2 py-0.5 rounded-lg shadow">
                    In Stock
                </span>
            ) : (
                <span className="absolute top-2 left-2 bg-red-400 text-xs text-white px-2 py-0.5 rounded-lg shadow">
                    Out of Stock
                </span>
            )}
        </div>
        <h3 className="font-bold text-lg text-gray-800 mb-1">{product.name}</h3>
        <div className="flex items-center mb-2">
            <span className="text-yellow-400 text-base">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
            </span>
            <span className="ml-2 text-sm text-gray-400">
                {product.reviews} reviews
            </span>
        </div>
        <p className="text-gray-500 text-base mb-4 line-clamp-2">
            {product.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
            <div className="text-xl font-semibold text-indigo-700">
                ${product.price}
            </div>
            <button
                disabled={!product.inStock}
                className={`inline-block px-4 py-2 rounded-xl font-semibold text-sm transition-all shadow ${
                    product.inStock
                        ? "bg-gradient-to-tr from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
        </div>
        <span className="absolute right-4 top-4 text-indigo-100 text-6xl opacity-10 pointer-events-none select-none">
            {product.name.charAt(0)}
        </span>
    </div>
);

export default ProductCard;
