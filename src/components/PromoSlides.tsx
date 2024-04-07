import { useState, useEffect } from 'react';
import {
  CarouselProvider,
  DotGroup,
  Dot,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

interface Props {
  title: string;
  images: string[];
}

export const PromoSlides = (props: Props) => {
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth <= 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth <= 1200) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    updateVisibleSlides();

    window.addEventListener('resize', updateVisibleSlides);

    return () => {
      window.removeEventListener('resize', updateVisibleSlides);
    };
  }, []);

  return (
    <div className="py-16">
      <div className="dartsense-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
        {props.title}
      </div>
      <CarouselProvider
        naturalSlideWidth={944}
        naturalSlideHeight={1616}
        totalSlides={props.images.length}
        isIntrinsicHeight={true}
        isPlaying={true}
        interval={4000}
        visibleSlides={visibleSlides}
        step={visibleSlides}
        dragStep={visibleSlides}
      >
        <Slider>
          {props.images.map((imageSrc, index) => (
            <Slide index={index} key={index}>
              <div className="promo-slides-item">
                <img
                  src={imageSrc}
                  alt={`Image ${index}`}
                  className="rounded-l h-[500px] xs:h-[600px]"
                />
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="prc-dotGroup">
          {[...Array(Math.ceil(props.images.length / visibleSlides))].map(
            (_, index) => (
              <Dot
                key={index}
                slide={index * visibleSlides}
                className={`prc-dot ${true ? 'prc-dot--selected' : ''}`}
              />
            ),
          )}
        </div>
      </CarouselProvider>
    </div>
  );
};
