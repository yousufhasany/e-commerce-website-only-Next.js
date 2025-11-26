import Link from 'next/link'
import ProductCard from './ProductCard'

const topSelling = [
  {
    id: 9,
    name: 'Vertical Striped Shirt',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop',
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discount: 20,
  },
  {
    id: 10,
    name: 'Courage Graphic T-shirt',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300&h=400&fit=crop',
    rating: 4.0,
    price: 145,
  },
  {
    id: 11,
    name: 'Loose Fit Bermuda Shorts',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=400&fit=crop',
    rating: 3.0,
    price: 80,
  },
  {
    id: 12,
    name: 'Faded Skinny Jeans',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop',
    rating: 4.5,
    price: 210,
  },
]

export default function TopSelling() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <h2 className="text-4xl font-bold text-center mb-12">TOP SELLING</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topSelling.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link 
          href="/on-sale"
          className="inline-block border border-gray-300 px-12 py-3 rounded-full hover:bg-gray-100 transition"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
