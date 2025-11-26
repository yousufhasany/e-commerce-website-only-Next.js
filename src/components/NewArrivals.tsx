import Link from 'next/link'
import ProductCard from './ProductCard'

const newArrivals = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
    rating: 4.5,
    price: 120,
  },
  {
    id: 6,
    name: 'Skinny Fit Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop',
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 7,
    name: 'Checkered Shirt',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop',
    rating: 4.5,
    price: 180,
  },
  {
    id: 8,
    name: 'Sleeve Striped T-shirt',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop',
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30,
  },
]

export default function NewArrivals() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link 
          href="/new-arrivals"
          className="inline-block border border-gray-300 px-12 py-3 rounded-full hover:bg-gray-100 transition"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
