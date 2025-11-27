import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <Link 
              href="/new-arrivals"
              className="inline-block bg-black text-white px-12 py-4 rounded-full hover:bg-gray-800 transition font-medium"
            >
              Shop Now
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-bold">200+</h3>
                <p className="text-gray-600 text-sm">International Brands</p>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <h3 className="text-3xl font-bold">2,000+</h3>
                <p className="text-gray-600 text-sm">High-Quality Products</p>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <h3 className="text-3xl font-bold">30,000+</h3>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative bg-white rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=700&fit=crop" 
                alt="Fashion Models"
                className="w-full h-auto"
              />
              <Sparkles className="absolute top-20 right-10 w-12 h-12 text-black" />
              <Sparkles className="absolute top-40 left-10 w-8 h-8 text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-around items-center gap-8">
            <div className="text-white text-3xl font-serif italic">VERSACE</div>
            <div className="text-white text-3xl font-bold">ZARA</div>
            <div className="text-white text-3xl font-serif">GUCCI</div>
            <div className="text-white text-3xl font-bold">PRADA</div>
            <div className="text-white text-3xl font-light">Calvin Klein</div>
          </div>
        </div>
      </div>
    </section>
  )
}
