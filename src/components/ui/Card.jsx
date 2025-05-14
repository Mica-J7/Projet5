import '@/styles/ui.css'

function Card({ cover, title }) {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h3 className="card-title">{title}</h3>
    </div>
  )
}

export default Card
