import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #19191b;
  width: 100%;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 430px) {
    padding: 20px;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: white;
  gap: 10px;
  padding-top: 6rem;

  @media (max-width: 430px) {
    font-size: 2rem;
  }

  span{
  

  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ImageCard = styled.div`
  padding: 10px;
  text-align: center;

  @media (max-width: 720px) {
    padding: 20px;
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
export const CategoryContainer = styled.div`
 // margin-bottom: 30px;
  display: flex;
 // flex-direction: c;
`;

export const CategoryButton = styled.div`
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: white;  //#ff66;
    color: black;
  }
`;
