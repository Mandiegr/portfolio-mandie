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

  @media (max-width: 912px) {
    flex-direction: column;
    justify-content: center; 
     padding: 2rem;
  }
  @media (max-width: 490px) {
     padding: 2rem;
  }

 
`;

export const ContainerRight = styled.div`
  width: 35%;
  color: white;
 
  @media (max-width: 912px) {
    width: 100%;
  }
  @media (max-width: 375px) {
      padding-top: 50px;
    
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
 
  @media (max-width: 912px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-top: 60px;
  }
  @media (max-width: 414px) {
      padding-top: 30px;
    
  }
`;

export const AboutImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`;

export const AboutMeTitle = styled.h2`
  font-size: 3rem;
  @media (max-width: 540px) {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  letter-spacing: 0;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 430px) {
    text-align: justify;
    font-size: 0.7rem; 
  }
`;
