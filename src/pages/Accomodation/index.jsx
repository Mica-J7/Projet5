import AccomodationList from '@/data/AccomodationList.js'
import Carousel from '../../components/ui/Carousel'
import '@/styles/pages.scss'

function Accomodation() {
  return (
    <div className="accomodation-page">
      <Carousel
        image={AccomodationList.id.pictures}
        altimg={AccomodationList.title}
      />
    </div>
  )
}

export default Accomodation
