import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import AccomodationList from '@/data/AccomodationList.js'
import Carousel from '@/components/ui/Carousel'
import Rating from '../../components/ui/Rating'
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
      <section className="accomodation">
        <div className="accomodation__header">
          <div className="accomodation__header--titles">
            <h1>{accomodation.title}</h1>
            <h2>{accomodation.location}</h2>
          </div>
          <div className="accomodation__header--host">
            <p>{accomodation.host.name}</p>
            <img src={accomodation.host.picture} alt={accomodation.host.name} />
          </div>
        </div>
        <div className="accomodation__content">
          <div className="accomodation__content--tags">
            {accomodation.tags.map((tag, index) => (
              <h3 key={index}>{tag}</h3>
            ))}
          </div>
          <Rating
            rating={accomodation.rating}
            className="accomodation__content--rating"
          />
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
      </section>
    </div>
  )
}

export default Accomodation
