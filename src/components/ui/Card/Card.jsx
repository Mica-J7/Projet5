import { Link } from 'react-router-dom'
import './card.scss'

function Card({ id, cover, title }) {
  return (
    <div className="card">
      <Link to={`/logement/${id}`} className="card__link">
        <img src={cover} alt={title} />
        <h2 className="card__link--title">{title}</h2>
      </Link>
    </div>
  )
}

export default Card
