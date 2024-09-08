import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #19191b;
  width: 100vw;
`;

export const Title = styled.h1`
  align-items: center;
  font-size: 4rem;
  margin-bottom: 20px;
  color: white;
`;

export const ImagesContainer = styled.div`
  width: 100vw; 
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ImageTitle = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: white;
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 200px;
  color: white;
`;
