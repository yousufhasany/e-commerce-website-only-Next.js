'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Trash2, Plus } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

// Mock products data
const initialProducts = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    shortDescription: 'Comfortable cotton t-shirt with unique tape details',
    price: 120,
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Polo with Tipping Details',
    shortDescription: 'Classic polo shirt with distinctive tipping',
    price: 180,
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Black Striped T-shirt',
    shortDescription: 'Stylish black striped t-shirt for any occasion',
    price: 120,
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'Skinny Fit Jeans',
    shortDescription: 'Modern skinny fit jeans with stretch fabric',
    price: 240,
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&h=100&fit=crop',
  },
  {
    id: 5,
    name: 'Checkered Shirt',
    shortDescription: 'Classic checkered pattern shirt',
    price: 180,
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&h=100&fit=crop',
  },
  {
    id: 6,
    name: 'Classic Blazer',
    shortDescription: 'Professional blazer for formal occasions',
    price: 320,
    category: 'formal',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&h=100&fit=crop',
  },
]

export default function ManageProductsTable() {
  const [products, setProducts] = useState(initialProducts)

  const handleDelete = (id: number, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      setProducts(products.filter(p => p.id !== id))
      toast.success('Product deleted successfully!')
    }
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">All Products ({products.length})</h2>
          <Link 
            href="/add-product"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </Link>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">ID: #{product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600 max-w-xs truncate">
                      {product.shortDescription}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition"
                        title="View"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(product.id, product.name)}
                        className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-gray-200">
          {products.map((product) => (
            <div key={product.id} className="p-4 space-y-3">
              <div className="flex items-start gap-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{product.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.shortDescription}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                      {product.category}
                    </span>
                    <span className="text-sm font-bold text-gray-900">${product.price}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/products/${product.id}`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                >
                  <Eye className="w-4 h-4" />
                  View
                </Link>
                <button
                  onClick={() => handleDelete(product.id, product.name)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition text-sm font-medium"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found. Add your first product!</p>
            <Link
              href="/add-product"
              className="inline-flex items-center gap-2 mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              <Plus className="w-4 h-4" />
              Add Product
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
