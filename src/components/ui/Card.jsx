import { Link } from 'react-router-dom'
import '@/styles/ui.scss'

function Card({ id, cover, title }) {
  return (
    <div className="card">
      <Link to={`/logement/${id}`} className="card__link">
        <img src={cover} alt={title} />
        <h3 className="card__link--title">{title}</h3>
      </Link>
    </div>
  )
}

export default Card
