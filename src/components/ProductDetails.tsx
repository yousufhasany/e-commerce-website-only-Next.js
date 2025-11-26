'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, Minus, Plus, Check } from 'lucide-react'
import ReviewsSection from './ReviewsSection'
import RelatedProducts from './RelatedProducts'

// Mock product data
const products = [
  {
    id: '1',
    name: 'T-shirt with Tape Details',
    price: 120,
    rating: 4.5,
    reviewCount: 320,
    description: "This t-shirt features unique tape details that add a modern touch. Made from premium cotton for all-day comfort.",
    colors: ['white', 'gray', 'black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'T-shirts'],
  },
  {
    id: '2',
    name: 'Polo with Tipping Details',
    price: 180,
    rating: 4.5,
    reviewCount: 245,
    description: "Classic polo shirt with distinctive tipping details on collar and sleeves. Perfect for smart casual occasions.",
    colors: ['navy', 'white', 'burgundy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'Polo Shirts'],
  },
  {
    id: '3',
    name: 'Black Striped T-shirt',
    price: 120,
    originalPrice: 160,
    discount: 30,
    rating: 5.0,
    reviewCount: 412,
    description: "Stylish black striped t-shirt that pairs well with any outfit. Comfortable and breathable fabric.",
    colors: ['black', 'gray', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'T-shirts'],
  },
  {
    id: '4',
    name: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    reviewCount: 189,
    description: "Modern skinny fit jeans with stretch fabric for comfort. Classic blue wash suitable for any occasion.",
    colors: ['blue', 'black', 'gray'],
    sizes: ['28', '30', '32', '34', '36'],
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'Jeans'],
  },
  {
    id: '5',
    name: 'Checkered Shirt',
    price: 180,
    rating: 4.5,
    reviewCount: 298,
    description: "Classic checkered pattern shirt perfect for casual and semi-formal wear. Made from premium cotton blend.",
    colors: ['red', 'blue', 'green'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'Shirts'],
  },
  {
    id: '6',
    name: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    reviewCount: 189,
    description: "Modern skinny fit jeans with stretch fabric for comfort. Classic blue wash suitable for any occasion.",
    colors: ['blue', 'black', 'gray'],
    sizes: ['28', '30', '32', '34', '36'],
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'Jeans'],
  },
  {
    id: '7',
    name: 'Checkered Shirt',
    price: 180,
    rating: 4.5,
    reviewCount: 298,
    description: "Classic checkered pattern shirt perfect for casual and semi-formal wear. Made from premium cotton blend.",
    colors: ['red', 'blue', 'green'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'Shirts'],
  },
  {
    id: '8',
    name: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    reviewCount: 267,
    description: "Trendy sleeve striped t-shirt with a modern fit. Perfect for casual everyday wear.",
    colors: ['white', 'orange', 'red'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'T-shirts'],
  },
  {
    id: '9',
    name: 'Vertical Striped Shirt',
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 5.0,
    reviewCount: 334,
    description: "Elegant vertical striped shirt that adds sophistication to your wardrobe. Breathable and comfortable.",
    colors: ['green', 'blue', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'Shirts'],
  },
  {
    id: '10',
    name: 'Courage Graphic T-shirt',
    price: 145,
    rating: 4.0,
    reviewCount: 201,
    description: "Bold graphic t-shirt featuring an inspiring courage design. Made from soft, durable fabric.",
    colors: ['orange', 'black', 'white'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'T-shirts'],
  },
  {
    id: '11',
    name: 'Loose Fit Bermuda Shorts',
    price: 80,
    rating: 3.0,
    reviewCount: 156,
    description: "Comfortable loose fit bermuda shorts perfect for summer. Lightweight and breathable material.",
    colors: ['blue', 'khaki', 'black'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'Shorts'],
  },
  {
    id: '12',
    name: 'Faded Skinny Jeans',
    price: 210,
    rating: 4.5,
    reviewCount: 278,
    description: "Trendy faded skinny jeans with a vintage look. Comfortable stretch denim for all-day wear.",
    colors: ['blue', 'black', 'gray'],
    sizes: ['28', '30', '32', '34', '36'],
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'Jeans'],
  },
  {
    id: '19',
    name: 'ONE LIFE GRAPHIC T-SHIRT',
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.5,
    reviewCount: 432,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    colors: ['olive', 'green', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=700&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=700&fit=crop',
    ],
    breadcrumb: ['Home', 'Shop', 'Men', 'T-shirts'],
  },
]

interface ProductDetailsProps {
  productId: string
}

export default function ProductDetails({ productId }: ProductDetailsProps) {
  const product = products.find(p => p.id === productId) || products[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState('Large')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'details' | 'reviews' | 'faqs'>('reviews')

  const colorMap: { [key: string]: string } = {
    'olive': '#6b7c3a',
    'green': '#4a6741',
    'navy': '#2c3e50',
  }

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      product: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity,
    })
    alert('Product added to cart!')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center text-sm text-gray-500 space-x-2">
          {product.breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">›</span>}
              <Link 
                href={index === 0 ? '/' : '#'} 
                className={index === product.breadcrumb.length - 1 ? 'text-gray-900' : 'hover:text-gray-700'}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnail Column */}
            <div className="flex flex-col gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === index ? 'border-black' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-gray-100 rounded-2xl overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.rating}/5</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="border-t border-gray-200 pt-6 mb-6" />

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Select Colors</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition ${
                      selectedColor === color ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: colorMap[color] }}
                    aria-label={color}
                  >
                    {selectedColor === color && (
                      <Check className="w-5 h-5 text-white mx-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Choose Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full border transition ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-6" />

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center bg-gray-100 rounded-full px-6 py-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-600 hover:text-black transition"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="mx-6 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-600 hover:text-black transition"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition font-medium"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-4 font-medium transition relative ${
                  activeTab === 'details' ? 'text-black' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Product Details
                {activeTab === 'details' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-4 font-medium transition relative ${
                  activeTab === 'reviews' ? 'text-black' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Rating & Reviews
                {activeTab === 'reviews' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('faqs')}
                className={`pb-4 font-medium transition relative ${
                  activeTab === 'faqs' ? 'text-black' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                FAQs
                {activeTab === 'faqs' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'details' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                <p className="text-gray-600">
                  Detailed product information will be displayed here.
                </p>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <ReviewsSection productId={productId} rating={product.rating} reviewCount={product.reviewCount} />
            )}
            
            {activeTab === 'faqs' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <p className="text-gray-600">
                  FAQ content will be displayed here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts />
    </div>
  )
}
