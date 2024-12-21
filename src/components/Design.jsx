import { CarouselContainer, Image, ImageCard, ImageTitle, Description } from '../styles/ProjectsStyles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Design = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      { breakpoint: 1281, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 720, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const images = [
    { src: '/Bakery.jpg', alt: 'Bakery', title: 'Bakery Layout', description: 'Elegant bakery layout.', link: 'https://bakery-three-sandy.vercel.app/' },
    { src: '/NaturalBeer.jpg', alt: 'Natural Beer', title: 'Natural Beer Home', description: 'Product homepage for natural beer.', link: 'https://www.figma.com/design/9wfxW4BhwAEY1jhRDJ4IJQ/Juice-Beer?t=wxbZwA6Kv8CVsCa5-1' },
    { src: '/Kassi.jpg', alt: 'Kassis', title: 'Kassis', description: 'Product landing page.', link: 'https://www.figma.com/board/163xU0sHLQ10BrWdKwdR82/kassis?node-id=0-1&t=xddyxYGbpDsNbne5-1' },
    { src: '/HomePageBeer.jpg', alt: 'HomePage Beer', title: 'Home Page Beer', description: 'Elegant and modern layout.', link: 'https://www.figma.com/design/JAdHMfDdKXDn7NXKnI7UYq/HomePage-Juice-Beer?t=wxbZwA6Kv8CVsCa5-1' },
  ];

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <ImageCard key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <Image src={image.src} alt={image.alt || `Image ${index + 1}`} />
            </a>
            <ImageTitle>{image.title}</ImageTitle>
            <Description>{image.description}</Description>
          </ImageCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Design;
