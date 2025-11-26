'use client'

import { useState } from 'react'
import { Star, ThumbsUp, MoreVertical, SlidersHorizontal } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Samantha D.',
    rating: 5,
    verified: true,
    date: 'August 14, 2023',
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer and t-shirt enthusiast, I can confidently say this is one of my favorite purchases.",
    helpful: 0,
  },
  {
    id: 2,
    name: 'Alex M.',
    rating: 4,
    verified: true,
    date: 'August 15, 2023',
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    helpful: 0,
  },
  {
    id: 3,
    name: 'Ethan R.',
    rating: 4,
    verified: true,
    date: 'August 16, 2023',
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    helpful: 0,
  },
  {
    id: 4,
    name: 'Olivia P.',
    rating: 4,
    verified: true,
    date: 'August 17, 2023',
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    helpful: 0,
  },
  {
    id: 5,
    name: 'Liam K.',
    rating: 4,
    verified: true,
    date: 'August 18, 2023',
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    helpful: 0,
  },
  {
    id: 6,
    name: 'Ava H.',
    rating: 5,
    verified: true,
    date: 'August 19, 2023',
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    helpful: 0,
  },
]

interface ReviewsSectionProps {
  productId: string
  rating: number
  reviewCount: number
}

export default function ReviewsSection({ productId, rating, reviewCount }: ReviewsSectionProps) {
  const [visibleReviews, setVisibleReviews] = useState(6)
  const [sortBy, setSortBy] = useState('Latest')

  const loadMoreReviews = () => {
    setVisibleReviews(prev => Math.min(prev + 6, reviews.length))
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">All Reviews</h2>
          <span className="text-gray-500">({reviewCount})</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <option>Latest</option>
            <option>Highest Rating</option>
            <option>Lowest Rating</option>
          </select>
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="border border-gray-200 rounded-2xl p-6">
            {/* Rating */}
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-5 h-5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>

            {/* Name and Verified */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{review.name}</h4>
                {review.verified && (
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </span>
                )}
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {review.text}
            </p>

            {/* Date and Helpful */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Posted on {review.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleReviews < reviews.length && (
        <div className="text-center">
          <button
            onClick={loadMoreReviews}
            className="px-12 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition font-medium"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  )
}
