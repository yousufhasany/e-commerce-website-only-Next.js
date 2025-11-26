import { Star } from 'lucide-react'
import Link from 'next/link'

interface ProductCardProps {
  id?: number
  name: string
  image: string
  rating: number
  price: number
  originalPrice?: number
  discount?: number
}

export default function ProductCard({ 
  id = 1,
  name, 
  image, 
  rating, 
  price, 
  originalPrice,
  discount 
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group cursor-pointer block">
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold mb-2">{name}</h3>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-2">{rating}/5</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">${price}</span>
        {originalPrice && (
          <>
            <span className="text-gray-400 line-through">${originalPrice}</span>
            {discount && (
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                -{discount}%
              </span>
            )}
          </>
        )}
      </div>
    </Link>
  )
}
