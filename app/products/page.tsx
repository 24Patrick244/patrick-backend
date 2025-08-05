s app/products/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-[#f1f5f9] p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Patrick Furnitures - Our Products
      </h1>

      {loading ? (
        <p className="text-center text-lg text-gray-700">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-red-600 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-blue-700 font-medium mt-1">RWF {product.price}</p>
                <p className="text-sm text-gray-500 mt-1">{product.slug}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
