import { useState } from 'react'
import './carousel.scss'
import leftArrow from '@/assets/img/icons/left-arrow.png'
import rightArrow from '@/assets/img/icons/right-arrow.png'

function Carousel({ images, altimg }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt={altimg}
        className="carousel__image"
      />
      {images.length > 1 && (
        <>
          <button onClick={prevSlide} className="carousel__arrow left">
            <img src={leftArrow} />
          </button>
          <button onClick={nextSlide} className="carousel__arrow right">
            <img src={rightArrow} />
          </button>
          <p className="carousel__index">
            {currentIndex + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Carousel
