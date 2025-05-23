import starFull from '@/assets/img/icons/star-full.png'
import starEmpty from '@/assets/img/icons/star-empty.png'
import '@/styles/ui.scss'

function Rating({ rating, total = 5 }) {
  const full = parseInt(rating)
  const empty = total - full

  return (
    <div className="rating">
      {Array(full)
        .fill()
        .map((_, i) => (
          <img
            key={`full-${i}`}
            src={starFull}
            alt="Étoile pleine"
            className="rating__star-icon"
          />
        ))}
      {Array(empty)
        .fill()
        .map((_, i) => (
          <img
            key={`empty-${i}`}
            src={starEmpty}
            alt="Étoile vide"
            className="rating__star-icon"
          />
        ))}
    </div>
  )
}

export default Rating
