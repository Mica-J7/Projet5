import '@/styles/ui.scss'

function Card({ cover, title }) {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h3 className="card__title">{title}</h3>
    </div>
  )
}

export default Card
