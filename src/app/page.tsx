import Hero from '@/components/Hero'
import NewArrivals from '@/components/NewArrivals'
import TopSelling from '@/components/TopSelling'
import BrowseByStyle from '@/components/BrowseByStyle'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <Testimonials />
      <Newsletter />
    </>
  )
}
