import Link from 'next/link'

export default function BrowseByStyle() {
  const styles = [
    { name: 'Casual', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop', link: '/category/casual' },
    { name: 'Formal', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop', link: '/category/formal' },
    { name: 'Party', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop', link: '/category/party' },
    { name: 'Gym', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop', link: '/category/gym' },
  ]

  return (
    <section className="bg-gray-100 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-16">
      <h2 className="text-4xl font-bold text-center mb-12">BROWSE BY DRESS STYLE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Casual - Large */}
        <Link href={styles[0].link} className="md:col-span-1 relative overflow-hidden rounded-2xl bg-white h-64 group cursor-pointer block">
          <img 
            src={styles[0].image}
            alt={styles[0].name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <h3 className="absolute top-6 left-6 text-3xl font-bold">{styles[0].name}</h3>
        </Link>

        {/* Formal - Large */}
        <Link href={styles[1].link} className="md:col-span-1 relative overflow-hidden rounded-2xl bg-white h-64 group cursor-pointer block">
          <img 
            src={styles[1].image}
            alt={styles[1].name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <h3 className="absolute top-6 left-6 text-3xl font-bold text-white">{styles[1].name}</h3>
        </Link>

        {/* Party - Large */}
        <Link href={styles[2].link} className="md:col-span-1 relative overflow-hidden rounded-2xl bg-white h-64 group cursor-pointer block">
          <img 
            src={styles[2].image}
            alt={styles[2].name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <h3 className="absolute top-6 left-6 text-3xl font-bold">{styles[2].name}</h3>
        </Link>

        {/* Gym - Large */}
        <Link href={styles[3].link} className="md:col-span-1 relative overflow-hidden rounded-2xl bg-white h-64 group cursor-pointer block">
          <img 
            src={styles[3].image}
            alt={styles[3].name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <h3 className="absolute top-6 left-6 text-3xl font-bold text-white">{styles[3].name}</h3>
        </Link>
      </div>
    </section>
  )
}
