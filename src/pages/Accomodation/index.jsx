import { useParams } from 'react-router-dom'
import AccomodationList from '@/data/AccomodationList.js'
import Carousel from '../../components/ui/Carousel'
import '@/styles/pages.scss'

function Accomodation() {
  const { id } = useParams()
  const logement = AccomodationList.find((item) => item.id === id)

  if (!logement) {
    return <div>Logement non trouvé</div>
  }

  return (
    <div className="accomodation-page">
      <Carousel images={logement.pictures} altimg={logement.title} />
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      <ul>
        {logement.equipments.map((equipement, index) => (
          <li key={index}>{equipement}</li>
        ))}
      </ul>
      <p>Hôte : {logement.host.name}</p>
      <img src={logement.host.picture} alt={logement.host.name} />
    </div>
  )
}

export default Accomodation
