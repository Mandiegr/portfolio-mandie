import styled from 'styled-components';

export const AboutContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  box-sizing: border-box;

  @media (max-width: 884px) {
    flex-direction: column;
    justify-content: center; 
     padding: 2rem;
  }
  @media (max-width: 490px) {
     padding: 2rem;
  }

 
`;

export const ImageContainer = styled.div`
  text-align: center;
  width: 50%;
  height: auto;
  padding-top: 40px;

  @media (max-width: 884px) {
    width: 100%;
    text-align: center;
    top: -90px;
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;


export const TextContainer = styled.div`
  width: 50%;
  color: white;
 
  @media (max-width: 884px) {
    width: 100%;
  }
  @media (max-width: 375px) {
      padding-top: 50px;
    
  }
`;

export const AboutImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;

  @media (max-width: 884px) {
    width: 50%;
  }
  @media (max-width: 540px) {
    width: 50%;
  }
  @media (max-width: 375px) {
    width: 50%;
  }
`;

export const AboutMeTitle = styled.h2`
  margin-top: 2rem;
  font-size: 4rem;
  color: white;
  @media (max-width: 884px) {
    font-size: 2.5rem;
  }
  @media (max-width: 540px) {
   font-size: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  letter-spacing: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    text-align: justify;
  }
`;
