import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import AccomodationList from '@/data/accomodationList.js'
import Carousel from '@/components/ui/Carousel'
import Rating from '@/components/ui/Rating'
import Collapse from '@/components/ui/Collapse'
import '@/styles/pages.scss'

function Accomodation() {
  const { id } = useParams()
  const accomodation = AccomodationList.find((item) => item.id === id)

  if (!accomodation) {
    return <Navigate to="/error" />
  }

  return (
    <div className="accomodation-page">
      <Carousel images={accomodation.pictures} altimg={accomodation.title} />
      <div className="accomodation">
        <div className="accomodation__header">
          <h1>{accomodation.title}</h1>
          <h2>{accomodation.location}</h2>
          <div className="accomodation__header--tags">
            {accomodation.tags.map((tag, index) => (
              <h3 key={index}>{tag}</h3>
            ))}
          </div>
        </div>
        <div className="accomodation__content">
          <div className="accomodation__content--host">
            <p>{accomodation.host.name}</p>
            <img src={accomodation.host.picture} alt={accomodation.host.name} />
          </div>
          <Rating
            rating={accomodation.rating}
            className="accomodation__content--rating"
          />
        </div>
      </div>
      <div className="accomodation__collapses">
        <div className="accomodation__collapses--desc">
          <Collapse title="Description">
            <p>{accomodation.description}</p>
          </Collapse>
        </div>
        <div className="accomodation__collapses--equip">
          <Collapse title="Équipements">
            <ul>
              {accomodation.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default Accomodation
