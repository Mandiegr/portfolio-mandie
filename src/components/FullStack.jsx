import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  CarouselContainer,
  Image,
  ImageCard,
  ImageTitle,
  Description,
} from '../styles/ProjectsStyles';

const Fullstack = () => {
  const images = [
    {
      src: '/task-manager.png',
      alt: 'Task-manager',
      title: 'Task-manager',
      description: 'Task Manager: React and SqlLite in the backend',
      link: 'https://github.com/Mandiegr/tasks-manager-frontend',
    },
    {
      src: '/eco-buy.png',
      alt: 'Eco-Buy',
      title: 'Eco-Buy',
      description: 'E-commerce: Nextjs, nodejs and Firebase',
      link: 'https://eco-buy-phi.vercel.app/',
    },
    {
      src: '/plannerA.png',
      alt: 'PlannerA',
      title: 'PlannerA',
      description: 'Calendar with fullcalenadar, nextjs and firebase',
      link: 'https://agenda-vercel-21mk.vercel.app/',
    },
    {
        src: '/anon.png',
        alt: 'anon',
        title: 'Anon',
        description: 'e-commerce with javascript, html and css',
        link: 'https://e-commerce-anon.vercel.app/',
      },
  ];

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 721,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <ImageCard key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <Image src={image.src} alt={image.alt || `Imagem ${index + 1}`} />
            </a>
            <ImageTitle>{image.title}</ImageTitle>
            <Description>{image.description}</Description>
          </ImageCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Fullstack;
