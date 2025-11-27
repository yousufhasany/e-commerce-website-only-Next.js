'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Minus, Plus, Trash2, Tag, ArrowRight } from 'lucide-react'

interface CartItem {
  id: number
  name: string
  image: string
  size: string
  color: string
  price: number
  quantity: number
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0.2) // 20% discount

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart')
      if (storedCart) {
        setCartItems(JSON.parse(storedCart))
      }
    } catch (error) {
      console.error('Error loading cart:', error)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  const saveCart = (items: CartItem[]) => {
    setCartItems(items)
    localStorage.setItem('cart', JSON.stringify(items))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
    saveCart(updatedItems)
  }

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id)
    saveCart(updatedItems)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discountAmount = Math.round(subtotal * discount)
  const deliveryFee = 15
  const total = subtotal - discountAmount + deliveryFee

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save20') {
      setDiscount(0.2)
      alert('Promo code applied!')
    } else {
      alert('Invalid promo code')
    }
    setPromoCode('')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center text-sm text-gray-500 space-x-2">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span>›</span>
          <span className="text-gray-900">Cart</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-4xl font-bold mb-8">YOUR CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                <Link
                  href="/"
                  className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 border border-gray-200 rounded-2xl"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="text-sm text-gray-600 mb-1">
                      Size: <span className="text-gray-900">{item.size}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Color: <span className="text-gray-900">{item.color}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">${item.price}</span>

                      {/* Quantity Controls */}
                      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-600 hover:text-black transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="mx-4 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-600 hover:text-black transition"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-2xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Discount (-{discount * 100}%)</span>
                  <span className="font-semibold text-red-500">-${discountAmount}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-gray-900">${deliveryFee}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Add promo code"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                  </div>
                  <button
                    onClick={applyPromoCode}
                    className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => alert('Proceeding to checkout...')}
                className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition font-medium flex items-center justify-center gap-2"
              >
                Go to Checkout
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
