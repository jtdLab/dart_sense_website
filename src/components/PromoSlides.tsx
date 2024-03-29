import createGameDartbot from '../assets/images/create_game_dartbot.png';
import completeGameWon from '../assets/images/complete_game_won.png';
import gameDetails2Player from '../assets/images/game_details_2_player.png';
import gameDetailsCompareFirstNine2Players from '../assets/images/game_details_compare_first_nine_2_player.png';
import inGameDartbot from '../assets/images/in_game_dartbot.png';
import practiceOverview from '../assets/images/practice_overview.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  createGameDartbot.src,
  inGameDartbot.src,
  completeGameWon.src,
  gameDetails2Player.src,
  gameDetailsCompareFirstNine2Players.src,
  practiceOverview.src,
];

interface Props {
  title: string;
}

export const PromoSlides = (props: Props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="py-16">
      <div className="dartsense-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
        {props.title}
      </div>
      <Slider {...settings}>
        {images.map((imageSrc, index) => (
          <div key={index} className="xxx">
            <img
              src={imageSrc}
              alt={`Image ${index}`}
              className="rounded-l h-[500px] xs:h-[600px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
