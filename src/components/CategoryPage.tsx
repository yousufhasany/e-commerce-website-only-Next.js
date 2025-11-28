'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SlidersHorizontal, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'
import ProductCard from './ProductCard'

// Mock products data
const staticProducts = [
  { id: 1, name: 'Gradient Graphic T-shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop', rating: 3.5, price: 145, category: 'casual', style: 'casual' },
  { id: 2, name: 'Polo with Tipping Details', image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop', rating: 4.5, price: 180, category: 'casual', style: 'casual' },
  { id: 3, name: 'Black Striped T-shirt', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop', rating: 5.0, price: 120, originalPrice: 160, discount: 30, category: 'casual', style: 'casual' },
  { id: 4, name: 'Skinny Fit Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop', rating: 3.5, price: 240, originalPrice: 260, discount: 20, category: 'casual', style: 'casual' },
  { id: 5, name: 'Checkered Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop', rating: 4.5, price: 180, category: 'casual', style: 'casual' },
  { id: 6, name: 'Sleeve Striped T-shirt', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop', rating: 4.5, price: 130, originalPrice: 160, discount: 30, category: 'casual', style: 'casual' },
  { id: 7, name: 'Vertical Striped Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop', rating: 5.0, price: 212, originalPrice: 232, discount: 20, category: 'casual', style: 'casual' },
  { id: 8, name: 'Courage Graphic T-shirt', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300&h=400&fit=crop', rating: 4.0, price: 145, category: 'casual', style: 'casual' },
  { id: 9, name: 'Loose Fit Bermuda Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=400&fit=crop', rating: 3.0, price: 80, category: 'casual', style: 'casual' },
  
  { id: 10, name: 'Classic Blazer', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=400&fit=crop', rating: 4.5, price: 320, category: 'formal', style: 'formal' },
  { id: 11, name: 'Formal Dress Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=400&fit=crop', rating: 4.0, price: 150, category: 'formal', style: 'formal' },
  { id: 12, name: 'Slim Fit Suit Pants', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop', rating: 4.5, price: 180, category: 'formal', style: 'formal' },
  
  { id: 13, name: 'Sequin Party Dress', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=300&h=400&fit=crop', rating: 5.0, price: 280, category: 'party', style: 'party' },
  { id: 14, name: 'Velvet Evening Top', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=300&h=400&fit=crop', rating: 4.5, price: 220, category: 'party', style: 'party' },
  { id: 15, name: 'Cocktail Dress', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop', rating: 4.0, price: 250, category: 'party', style: 'party' },
  
  { id: 16, name: 'Athletic Tank Top', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=400&fit=crop', rating: 4.5, price: 45, category: 'gym', style: 'gym' },
  { id: 17, name: 'Sport Leggings', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&h=400&fit=crop', rating: 4.0, price: 65, category: 'gym', style: 'gym' },
  { id: 18, name: 'Performance Shorts', image: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=300&h=400&fit=crop', rating: 4.5, price: 55, category: 'gym', style: 'gym' },
]

const categoryTitles: { [key: string]: string } = {
  casual: 'Casual',
  formal: 'Formal',
  party: 'Party',
  gym: 'Gym',
  'on-sale': 'On Sale',
  'new-arrivals': 'New Arrivals',
  brands: 'Brands',
}

interface CategoryPageProps {
  category: string
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const [allProducts, setAllProducts] = useState(staticProducts)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedStyles, setSelectedStyles] = useState<string[]>([category])
  const [priceRange, setPriceRange] = useState([0, 500])
  const [sortBy, setSortBy] = useState('Most Popular')
  const [showFilters, setShowFilters] = useState(true)

  // Load products from localStorage on mount
  useEffect(() => {
    try {
      const storedProducts = localStorage.getItem('products')
      if (storedProducts) {
        const localProducts = JSON.parse(storedProducts)
        // Merge localStorage products with static products
        const merged = [...staticProducts, ...localProducts]
        setAllProducts(merged)
      }
    } catch (error) {
      console.error('Error loading products from localStorage:', error)
    }
  }, [])

  // Filter sections state
  const [expandedSections, setExpandedSections] = useState({
    tshirts: false,
    shorts: false,
    shirts: false,
    hoodie: false,
    jeans: false,
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const colors = [
    { name: 'Green', hex: '#10b981' },
    { name: 'Red', hex: '#ef4444' },
    { name: 'Yellow', hex: '#fbbf24' },
    { name: 'Orange', hex: '#f97316' },
    { name: 'Cyan', hex: '#06b6d4' },
    { name: 'Blue', hex: '#3b82f6' },
    { name: 'Purple', hex: '#a855f7' },
    { name: 'Pink', hex: '#ec4899' },
    { name: 'White', hex: '#ffffff' },
    { name: 'Black', hex: '#000000' },
  ]

  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large']

  const dressStyles = [
    { name: 'Casual', value: 'casual' },
    { name: 'Formal', value: 'formal' },
    { name: 'Party', value: 'party' },
    { name: 'Gym', value: 'gym' },
  ]

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    )
  }

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    )
  }

  const toggleStyle = (style: string) => {
    setSelectedStyles(prev =>
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    )
  }

  const applyFilters = () => {
    // Filters are applied automatically, this button just provides feedback
    console.log('Filters applied:', { selectedColors, selectedSizes, selectedStyles, priceRange })
  }

  const clearFilters = () => {
    setSelectedColors([])
    setSelectedSizes([])
    setSelectedStyles([category])
    setPriceRange([0, 500])
  }

  const filteredProducts = allProducts.filter(product => {
    // Search filter
    if (searchQuery.trim() && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }
    
    // For specific categories, show appropriate products
    if (category === 'on-sale') {
      // Show products with discounts
      if (!product.discount || product.discount <= 0) return false
    } else if (category === 'new-arrivals') {
      // Show first 6 products as new arrivals
      if (product.id > 6) return false
    } else if (category === 'brands') {
      // Show all products for brands page
      // No additional filtering
    } else {
      // For style categories (casual, formal, party, gym)
      if (selectedStyles.length > 0 && !selectedStyles.includes(product.style)) return false
    }
    
    return true
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center text-sm text-gray-500 space-x-2">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span>›</span>
          <span className="text-gray-900">{categoryTitles[category] || 'Casual'}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`w-80 flex-shrink-0 ${showFilters ? '' : 'hidden'}`}>
            <div className="border border-gray-200 rounded-2xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* T-shirts */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <button
                  onClick={() => toggleSection('tshirts')}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900"
                >
                  <span>T-shirts</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Shorts */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <button
                  onClick={() => toggleSection('shorts')}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900"
                >
                  <span>Shorts</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Shirts */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <button
                  onClick={() => toggleSection('shirts')}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900"
                >
                  <span>Shirts</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Hoodie */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <button
                  onClick={() => toggleSection('hoodie')}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900"
                >
                  <span>Hoodie</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Jeans */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <button
                  onClick={() => toggleSection('jeans')}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900"
                >
                  <span>Jeans</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Price */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <button
                  onClick={() => toggleSection('price')}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <span className="font-semibold">Price</span>
                  {expandedSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedSections.price && (
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Colors */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <button
                  onClick={() => toggleSection('colors')}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <span className="font-semibold">Colors</span>
                  {expandedSections.colors ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedSections.colors && (
                  <div className="grid grid-cols-5 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => toggleColor(color.name)}
                        className={`w-10 h-10 rounded-full border-2 transition ${
                          selectedColors.includes(color.name) ? 'border-black' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        aria-label={color.name}
                      >
                        {selectedColors.includes(color.name) && (
                          <span className={`text-${color.hex === '#ffffff' ? 'black' : 'white'} text-xl`}>✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Size */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <button
                  onClick={() => toggleSection('size')}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <span className="font-semibold">Size</span>
                  {expandedSections.size ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedSections.size && (
                  <div className="grid grid-cols-2 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-4 py-2 rounded-full text-sm transition ${
                          selectedSizes.includes(size)
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dress Style */}
              <div className="pb-6 mb-6">
                <button
                  onClick={() => toggleSection('dressStyle')}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <span className="font-semibold">Dress Style</span>
                  {expandedSections.dressStyle ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedSections.dressStyle && (
                  <div className="space-y-2">
                    {dressStyles.map((style) => (
                      <button
                        key={style.value}
                        onClick={() => toggleStyle(style.value)}
                        className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 py-2"
                      >
                        <span>{style.name}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Apply Filter Button */}
              <div className="space-y-2">
                <button 
                  onClick={applyFilters}
                  className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition font-medium"
                >
                  Apply Filter
                </button>
                {(selectedColors.length > 0 || selectedSizes.length > 0 || selectedStyles.length > 1 || priceRange[1] < 500) && (
                  <button 
                    onClick={clearFilters}
                    className="w-full bg-white text-black border border-gray-300 py-3 rounded-full hover:bg-gray-50 transition font-medium"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{categoryTitles[category] || 'Casual'}</h1>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  <span>Filters</span>
                </button>
              </div>
              
              {/* Search Bar */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Active Filters Display */}
              {(selectedColors.length > 0 || selectedSizes.length > 0 || selectedStyles.length > 1 || priceRange[1] < 500) && (
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-700">Active Filters:</span>
                  {selectedColors.map(color => (
                    <span key={color} className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
                      {color}
                      <button onClick={() => toggleColor(color)} className="text-gray-500 hover:text-black">×</button>
                    </span>
                  ))}
                  {selectedSizes.map(size => (
                    <span key={size} className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
                      {size}
                      <button onClick={() => toggleSize(size)} className="text-gray-500 hover:text-black">×</button>
                    </span>
                  ))}
                  {selectedStyles.filter(s => s !== category).map(style => (
                    <span key={style} className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
                      {style}
                      <button onClick={() => toggleStyle(style)} className="text-gray-500 hover:text-black">×</button>
                    </span>
                  ))}
                  {priceRange[1] < 500 && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2">
                      ${priceRange[0]} - ${priceRange[1]}
                      <button onClick={() => setPriceRange([0, 500])} className="text-gray-500 hover:text-black">×</button>
                    </span>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-gray-500">
                  Showing {filteredProducts.length} of {allProducts.length} Products
                </span>
                <div className="flex items-center gap-2">
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
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">No products found matching your filters.</p>
                <button 
                  onClick={clearFilters}
                  className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                  Previous
                </button>
                <button className="px-4 py-2 bg-black text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
