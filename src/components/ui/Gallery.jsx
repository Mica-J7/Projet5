import AccomodationList from '@/data/AccomodationList.js'
import Card from './Card'
import '@/styles/ui.css'

function Gallery() {
  return (
    <div className="gallery">
      {AccomodationList.map((item) => (
        <Card key={item.id} cover={item.cover} title={item.title} />
      ))}
    </div>
  )
}

export default Gallery
