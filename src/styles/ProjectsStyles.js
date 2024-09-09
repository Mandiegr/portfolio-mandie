import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #19191b;
  width: 100vw;
`;

export const CarouselContainer = styled.div`
  width: 90%;
  box-sizing: border-box;

  @media (max-width: 430px) {
    width: 100%;
    padding: 40px;
  }
`;

export const ImagesContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  align-items: center;
  font-size: 4rem;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 430px) {
    font-size: 2rem;
  }
`;

export const Image = styled.img`
  width: 320px;
  height: 250px;
  object-fit: cover;
  margin-left: 2.5rem;

  @media (max-width: 853px) and (min-width: 344px) {
    margin-left: 0;
  }

  @media (max-width: 720px) and (min-width: 560px) {
   width: 500px;
  }
  
`;

export const ImageCard = styled.div`
  padding: 10px;
  text-align: center;

  @media (max-width: 720px) and (min-width: 540px) {
    padding: 75px;

  }
`;

export const ImageTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
  color: white;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: white;
`;
