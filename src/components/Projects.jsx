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
      src: 'https://i.pinimg.com/564x/46/7a/ca/467acae6944588b20f759422034f4a09.jpg',
      alt: 'Eco-buy',
      title: 'Eco-buy',
      description: 's simply dummy text of the printing and typesetting industry.'
    },
    {
      src: 'https://i.pinimg.com/564x/46/7a/ca/467acae6944588b20f759422034f4a09.jpg',
      alt: 'PlannerA',
      title: 'PlannerA',
      description: 's simply dummy text of the printing and typesetting industry.'
    },
    {
      src: 'https://i.pinimg.com/564x/46/7a/ca/467acae6944588b20f759422034f4a09.jpg',
      alt: 'SocialM',
      title: 'SocialM',
      description: 's simply dummy text of the printing and typesetting industry.'
    },
    {
      src: 'https://i.pinimg.com/564x/46/7a/ca/467acae6944588b20f759422034f4a09.jpg',
      alt: 'Task-Manager',
      title: 'Task-Manager',
      description: 's simply dummy text of the printing and typesetting industry.'
    },
    {
      src: 'https://i.pinimg.com/564x/46/7a/ca/467acae6944588b20f759422034f4a09.jpg',
      alt: 'Study',
      title: 'Study',
      description: 's simply dummy text of the printing and typesetting industry.'
    },
    {
      src: 'https://i.pinimg.com/564x/46/7a/ca/467acae6944588b20f759422034f4a09.jpg',
      alt: 'Projeto Proximo',
      title: 'Projeto Proximo',
      description: 's simply dummy text of the printing and typesetting industry.'
    },
    {
      src: 'https://i.pinimg.com/564x/46/7a/ca/467acae6944588b20f759422034f4a09.jpg',
      alt: 'Projeto Proximo',
      title: 'Projeto Proximo',
      description: 's simply dummy text of the printing and typesetting industry.'
    },
    {
      src: 'https://i.pinimg.com/564x/46/7a/ca/467acae6944588b20f759422034f4a09.jpg',
      alt: 'Projeto Proximo',
      title: 'Projeto Proximo',
      description: 's simply dummy text of the printing and typesetting industry.'
    },
    {
      src: 'https://i.pinimg.com/564x/46/7a/ca/467acae6944588b20f759422034f4a09.jpg',
      alt: 'Projeto Proximo',
      title: 'Projeto Proximo',
      description: 's simply dummy text of the printing and typesetting industry.'
    }
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
              <Image src={image.src} alt={image.alt || `Imagem ${index + 1}`} />
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
