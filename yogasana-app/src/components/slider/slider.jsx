import React, { useState, useEffect } from 'react';
import './slider.css'; // Fixed typo in CSS import

// Import images with meaningful names
import yoga1 from '../../assets/slider/yoga.jpg';
import yoga2 from '../../assets/slider/yoga_1.jpg';
import yoga3 from '../../assets/slider/yoga2.jpg';
import yoga4 from '../../assets/slider/yoga3.jpg';
import yoga5 from '../../assets/slider/yoga4.jpg';
import yoga6 from '../../assets/slider/yoga5.jpg';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) goToNext();
    if (touchEnd - touchStart > 50) goToPrev();
  };

  const goToNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const goToPrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div 
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            role="img"
            aria-label={slide.altText}
          >
            <img 
              src={slide.image} 
              alt={slide.altText}
              className="responsive-image"
              loading="lazy"
            />
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="nav-button prev-button" 
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button 
        className="nav-button next-button" 
        onClick={goToNext}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Usage component with proper image metadata
const Ab = () => {
  const slides = [
    {
      image: yoga1,
      title: 'Morning Flow',
      description: 'Start your day with energizing poses',
      altText: 'Yoga sunrise session'
    },
    {
      image: yoga2,
      title: 'Balance & Harmony',
      description: 'Find your center with balance poses',
      altText: 'Warrior pose demonstration'
    },
    {
      image: yoga3,
      title: 'Deep Stretching',
      description: 'Improve flexibility and mobility',
      altText: 'Forward bend pose'
    },
    {
      image: yoga4,
      title: 'Strength Building',
      description: 'Core-strengthening sequences',
      altText: 'Plank variation pose'
    },
    {
      image: yoga5,
      title: 'Mindful Breathing',
      description: 'Pranayama and meditation techniques',
      altText: 'Meditation posture'
    },
    {
      image: yoga6,
      title: 'Evening Relaxation',
      description: 'Wind down with restorative poses',
      altText: 'Childs pose demonstration'
    }
  ];

  return <Slider slides={slides} />;
};

export default Ab;