import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="backdrop-blur-md bg-white/80 shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-indigo-700 tracking-wider bg-indigo-100 px-4 py-1 rounded-2xl shadow">
                    ModernShop
                </span>
                <div className="flex gap-6 items-center">
                    <a
                        href="#"
                        className="text-gray-700 text-base font-medium hover:text-indigo-600 transition-all"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 text-base font-medium hover:text-indigo-600 transition-all"
                    >
                        Products
                    </a>
                    <a href="#" className="relative group">
                        <span className="text-gray-700 text-base font-medium hover:text-indigo-600 transition-all">
                            Cart
                        </span>
                        <span className="bg-indigo-500 text-xs text-white rounded-full px-2 py-0.5 absolute -top-2 -right-4 opacity-75 group-hover:opacity-100">
                            2
                        </span>
                    </a>
                    <a
                        href="#"
                        className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 shadow-md"
                    >
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
