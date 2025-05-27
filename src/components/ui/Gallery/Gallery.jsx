import AccomodationList from '@/data/accomodationList.js'
import Card from '@/components/ui/Card/Card.jsx'
import '@/components/ui/Gallery/gallery.scss'

function Gallery() {
  return (
    <div className="gallery">
      {AccomodationList.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          cover={item.cover}
          title={item.title}
        />
      ))}
    </div>
  )
}

export default Gallery
