import './banner.scss'

function Banner({ image, altimg, title }) {
  return (
    <div className="banner">
      <img src={image} alt={altimg} />
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
