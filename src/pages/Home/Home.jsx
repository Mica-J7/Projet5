import '@/pages/Home/home.scss'
import Banner from '@/components/ui/Banner/Banner.jsx'
import homeBanner from '@/assets/img/banners/home-banner.webp'
import Gallery from '@/components/ui/Gallery/Gallery.jsx'

function Home() {
  return (
    <div className="home-page">
      <Banner
        image={homeBanner}
        altimg="Photo de falaises en bord de mer"
        title={
          <>
            Chez vous, <br className="banner__mobile-break" />
            partout et ailleurs
          </>
        }
      />
      <Gallery />
    </div>
  )
}

export default Home
