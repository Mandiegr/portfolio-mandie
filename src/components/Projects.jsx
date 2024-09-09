import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ProjectContainer,
  CarouselContainer,
  Image,
  ImageCard,
  ImageTitle,
  Description,
  Title,
} from '../styles/ProjectsStyles';

const Projects = () => {
  const images = [
    {
      src: '/task-manager.png',
      alt: 'Task-manager',
      title: 'Task-manager',
      description: 'Task Manager: React and SqlLite in the backend',
      link: 'https://tasks-manager-frontend.vercel.app/'
    },
    {
      src: '/eco-buy.png',
      alt: 'Eco-Buy',
      title: 'Eco-Buy',
      description: 'E-commerce: Nextjs, nodejs and Firebase',
      link: 'https://eco-buy-phi.vercel.app/'
    },
    {
      src: '/plannerA.png',
      alt: 'PlannerA',
      title: 'PlannerA',
      description: 'This is simply dummy text of the printing and typesetting industry.',
      link: 'https://agenda-vercel-21mk.vercel.app/'
    },
    {
      src: '/task-manager.png',
      alt: 'Task-Manager',
      title: 'Task-Manager',
      description: 'This is simply dummy text of the printing and typesetting industry.',
      link: 'https://example.com/task-manager'
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <ProjectContainer>
      <Title>Projects</Title>
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
    </ProjectContainer>
  );
};

export default Projects;
