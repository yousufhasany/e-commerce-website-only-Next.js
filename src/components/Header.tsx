'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { Search, ShoppingCart, User, ChevronDown, LogOut, Package, Settings } from 'lucide-react'

// Mock products for search suggestions
const allProducts = [
  { id: 1, name: 'Gradient Graphic T-shirt', price: 145, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=60&h=60&fit=crop' },
  { id: 2, name: 'Polo with Tipping Details', price: 180, image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=60&h=60&fit=crop' },
  { id: 3, name: 'Black Striped T-shirt', price: 120, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=60&h=60&fit=crop' },
  { id: 4, name: 'Skinny Fit Jeans', price: 240, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=60&h=60&fit=crop' },
  { id: 5, name: 'Checkered Shirt', price: 180, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=60&h=60&fit=crop' },
  { id: 6, name: 'Sleeve Striped T-shirt', price: 130, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=60&h=60&fit=crop' },
  { id: 7, name: 'Vertical Striped Shirt', price: 212, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=60&h=60&fit=crop' },
  { id: 8, name: 'Courage Graphic T-shirt', price: 145, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=60&h=60&fit=crop' },
  { id: 9, name: 'Loose Fit Bermuda Shorts', price: 80, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=60&h=60&fit=crop' },
  { id: 10, name: 'Classic Blazer', price: 320, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=60&h=60&fit=crop' },
  { id: 11, name: 'Formal Dress Shirt', price: 150, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=60&h=60&fit=crop' },
  { id: 12, name: 'Slim Fit Suit Pants', price: 180, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=60&h=60&fit=crop' },
  { id: 13, name: 'Sequin Party Dress', price: 280, image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=60&h=60&fit=crop' },
  { id: 14, name: 'Velvet Evening Top', price: 220, image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=60&h=60&fit=crop' },
  { id: 15, name: 'Cocktail Dress', price: 250, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=60&h=60&fit=crop' },
  { id: 16, name: 'Athletic Tank Top', price: 45, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=60&h=60&fit=crop' },
  { id: 17, name: 'Sport Leggings', price: 65, image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=60&h=60&fit=crop' },
  { id: 18, name: 'Performance Shorts', price: 55, image: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=60&h=60&fit=crop' },
  { id: 19, name: 'ONE LIFE GRAPHIC T-SHIRT', price: 260, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=60&h=60&fit=crop' },
  { id: 20, name: 'Faded Skinny Jeans', price: 210, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=60&h=60&fit=crop' },
]

function UserMenu() {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!session) {
    return (
      <div className="flex items-center gap-2">
        <Link 
          href="/login"
          className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg transition"
        >
          Login
        </Link>
        <Link 
          href="/register"
          className="px-4 py-2 text-sm font-medium bg-black text-white hover:bg-gray-800 rounded-lg transition hidden sm:block"
        >
          Register
        </Link>
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full transition"
      >
        <User className="w-5 h-5" />
        <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
      </button>

      {showDropdown && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-900">{session.user?.name || 'User'}</p>
            <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
          </div>
          <div className="py-2">
            <Link
              href="/add-product"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
              onClick={() => setShowDropdown(false)}
            >
              <Package className="w-4 h-4" />
              Add Product
            </Link>
            <Link
              href="/manage-products"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
              onClick={() => setShowDropdown(false)}
            >
              <Settings className="w-4 h-4" />
              Manage Products
            </Link>
          </div>
          <div className="border-t border-gray-200 py-2">
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition w-full"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<typeof allProducts>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5) // Show max 5 suggestions
      setSuggestions(filtered)
      setShowSuggestions(filtered.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setShowMobileSearch(false)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (productId: number) => {
    router.push(`/products/${productId}`)
    setSearchQuery('')
    setShowMobileSearch(false)
    setShowSuggestions(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            SHOP.SAKU
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-600 transition">
                <span>Shop</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/category/casual" className="block px-4 py-3 hover:bg-gray-50 transition">
                  Casual
                </Link>
                <Link href="/category/formal" className="block px-4 py-3 hover:bg-gray-50 transition">
                  Formal
                </Link>
                <Link href="/category/party" className="block px-4 py-3 hover:bg-gray-50 transition">
                  Party
                </Link>
                <Link href="/category/gym" className="block px-4 py-3 hover:bg-gray-50 transition">
                  Gym
                </Link>
              </div>
            </div>
            <Link href="/on-sale" className="hover:text-gray-600 transition">
              On Sale
            </Link>
            <Link href="/new-arrivals" className="hover:text-gray-600 transition">
              New Arrivals
            </Link>
            <Link href="/brands" className="hover:text-gray-600 transition">
              Brands
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim() && setShowSuggestions(suggestions.length > 0)}
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              
              {/* Search Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden z-50">
                  {suggestions.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSuggestionClick(product.id)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition text-left"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg bg-gray-100"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-sm text-gray-600">${product.price}</p>
                      </div>
                    </button>
                  ))}
                  <button
                    onClick={handleSearch}
                    className="w-full p-3 bg-gray-50 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                  >
                    View all results for "{searchQuery}"
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <UserMenu />
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showMobileSearch && (
          <div className="lg:hidden px-4 pb-4">
            <div className="relative w-full" ref={searchRef}>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
                  autoFocus
                />
              </form>
              
              {/* Mobile Search Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden z-50">
                  {suggestions.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSuggestionClick(product.id)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition text-left"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg bg-gray-100"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-sm text-gray-600">${product.price}</p>
                      </div>
                    </button>
                  ))}
                  <button
                    onClick={handleSearch}
                    className="w-full p-3 bg-gray-50 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                  >
                    View all results for "{searchQuery}"
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
