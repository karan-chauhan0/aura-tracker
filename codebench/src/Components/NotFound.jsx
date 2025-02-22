import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4">The page you are looking for does not exist.</p>
            <Link to="/" className="mt-6 px-4 py-2 bg-blue-600 rounded-md">
                Go to Login
            </Link>
        </div>
    );
};

export default NotFound;
