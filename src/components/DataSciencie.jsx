import { CarouselContainer, Image, ImageCard, ImageTitle, Description } from '../styles/ProjectsStyles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const DataScience = () => {

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
      }

  const images = [
    {
        src: '/Bakery.png',
        alt: 'Eco-Buy',
        title: 'Eco-Buy',
        description: 'E-commerce: Nextjs, nodejs and Firebase',
        link: 'https://eco-buy-phi.vercel.app/',
      },
      {
        src: '/Bakery.png',
        alt: 'Eco-Buy',
        title: 'Eco-Buy',
        description: 'E-commerce: Nextjs, nodejs and Firebase',
        link: 'https://eco-buy-phi.vercel.app/',
      },
      {
        src: '/Bakery.png',
        alt: 'Eco-Buy',
        title: 'Eco-Buy',
        description: 'E-commerce: Nextjs, nodejs and Firebase',
        link: 'https://eco-buy-phi.vercel.app/',
      },
      {
        src: '/Bakery.png',
        alt: 'Eco-Buy',
        title: 'Eco-Buy',
        description: 'E-commerce: Nextjs, nodejs and Firebase',
        link: 'https://eco-buy-phi.vercel.app/',
      },
    
  ];

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

export default DataScience;
