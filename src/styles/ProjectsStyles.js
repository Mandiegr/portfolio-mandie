import styled from 'styled-components';


export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem;

  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-out;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out;
`;

export const CategoryButton = styled.div`
  color: white;
  padding: 12px 30px;
  background: #4851B3;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
  
  &:hover {
    background: #42203F;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const IconWrapper = styled.div`
  transition: transform 0.3s ease;
  display: inline-block;
  color: white;
  
  ${CategoryButton}:hover & {
    transform: rotate(15deg);
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  padding-top: 4rem;
  animation: slideIn 1s ease-out;

  @media (max-width: 430px) {
    font-size: 2.5rem;
  }


`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 20px;
 
  margin-bottom: 40px;
  animation: slideIn 1s ease-out;

  @media (max-width: 430px) {
    padding: 10px;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageCard = styled.div`
  padding: 15px;
  text-align: center;
  padding: 40px;
  @media (max-width: 720px) {
    padding: 20px;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageTitle = styled.h3`
  font-size: 1.3rem;
  margin: 10px 0;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: white;
  opacity: 0.85;
  margin: 10px 0;
`;

export const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid transparent;
  border-top: 6px solid #ff5722;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

