import ProductCard from './ProductCard'

const relatedProducts = [
  {
    id: 2,
    name: 'Polo with Contrast Trims',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop',
    rating: 4.0,
    price: 212,
    originalPrice: 242,
    discount: 20,
  },
  {
    id: 3,
    name: 'Gradient Graphic T-shirt',
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=300&h=400&fit=crop',
    rating: 3.5,
    price: 145,
  },
  {
    id: 4,
    name: 'Polo with Tipping Details',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=300&h=400&fit=crop',
    rating: 4.5,
    price: 180,
  },
  {
    id: 5,
    name: 'Black Striped T-shirt',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop',
    rating: 5.0,
    price: 120,
    originalPrice: 150,
    discount: 30,
  },
]

export default function RelatedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">YOU MIGHT ALSO LIKE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
