'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ProductCard from './ProductCard'

// Mock products database
const allProducts = [
  { id: 1, name: 'Gradient Graphic T-shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop', rating: 3.5, price: 145, category: 'casual' },
  { id: 2, name: 'Polo with Tipping Details', image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop', rating: 4.5, price: 180, category: 'casual' },
  { id: 3, name: 'Black Striped T-shirt', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop', rating: 5.0, price: 120, originalPrice: 160, discount: 30, category: 'casual' },
  { id: 4, name: 'Skinny Fit Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop', rating: 3.5, price: 240, originalPrice: 260, discount: 20, category: 'casual' },
  { id: 5, name: 'Checkered Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop', rating: 4.5, price: 180, category: 'casual' },
  { id: 6, name: 'Sleeve Striped T-shirt', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop', rating: 4.5, price: 130, originalPrice: 160, discount: 30, category: 'casual' },
  { id: 7, name: 'Vertical Striped Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop', rating: 5.0, price: 212, originalPrice: 232, discount: 20, category: 'casual' },
  { id: 8, name: 'Courage Graphic T-shirt', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300&h=400&fit=crop', rating: 4.0, price: 145, category: 'casual' },
  { id: 9, name: 'Loose Fit Bermuda Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=400&fit=crop', rating: 3.0, price: 80, category: 'casual' },
  { id: 10, name: 'Classic Blazer', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=400&fit=crop', rating: 4.5, price: 320, category: 'formal' },
  { id: 11, name: 'Formal Dress Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=400&fit=crop', rating: 4.0, price: 150, category: 'formal' },
  { id: 12, name: 'Slim Fit Suit Pants', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop', rating: 4.5, price: 180, category: 'formal' },
  { id: 13, name: 'Sequin Party Dress', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=300&h=400&fit=crop', rating: 5.0, price: 280, category: 'party' },
  { id: 14, name: 'Velvet Evening Top', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=300&h=400&fit=crop', rating: 4.5, price: 220, category: 'party' },
  { id: 15, name: 'Cocktail Dress', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop', rating: 4.0, price: 250, category: 'party' },
  { id: 16, name: 'Athletic Tank Top', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=400&fit=crop', rating: 4.5, price: 45, category: 'gym' },
  { id: 17, name: 'Sport Leggings', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&h=400&fit=crop', rating: 4.0, price: 65, category: 'gym' },
  { id: 18, name: 'Performance Shorts', image: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=300&h=400&fit=crop', rating: 4.5, price: 55, category: 'gym' },
  { id: 19, name: 'ONE LIFE GRAPHIC T-SHIRT', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop', rating: 4.5, price: 260, originalPrice: 300, discount: 40, category: 'casual' },
  { id: 20, name: 'Faded Skinny Jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop', rating: 4.5, price: 210, category: 'casual' },
]

interface SearchResultsProps {
  query: string
}

export default function SearchResults({ query }: SearchResultsProps) {
  const [sortBy, setSortBy] = useState('Most Popular')

  // Search logic
  const searchResults = query
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center text-sm text-gray-500 space-x-2">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span>›</span>
          <span className="text-gray-900">Search Results</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Search Results for "{query}"
          </h1>
          {searchResults.length > 0 ? (
            <p className="text-gray-600">
              Found {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'}
            </p>
          ) : query ? (
            <p className="text-gray-600">No products found matching your search.</p>
          ) : (
            <p className="text-gray-600">Enter a search term to find products.</p>
          )}
        </div>

        {/* Sort Options */}
        {searchResults.length > 0 && (
          <div className="flex justify-end items-center gap-2 mb-6">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        )}

        {/* Products Grid */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <svg
                className="mx-auto h-24 w-24 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-8">
              Try searching with different keywords or browse our categories
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/category/casual"
                className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                Browse Casual
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                Go Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-6">
              <svg
                className="mx-auto h-24 w-24 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Start searching for products
            </h3>
            <p className="text-gray-600">
              Use the search bar above to find your favorite items
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
