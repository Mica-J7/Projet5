import '@/styles/Home.css'
import Banner from '@/components/ui/Banner'
import homeBanner from '@/assets/img/banners/home-banner.png'
import Gallery from '@/components/ui/Gallery'

function Home() {
  return (
    <div className="home-page">
      <Banner
        image={homeBanner}
        altimg="Photo de falaises en bord de mer"
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </div>
  )
}

export default Home
