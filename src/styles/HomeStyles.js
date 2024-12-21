import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

export const ContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
 background:  rgba(96, 78, 199, 0.3);
 color: white;

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    padding: 1rem;

  }
`;
export const ContainerRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img {
    width: 80%;
    max-width: 400px;
    box-shadow: 0px 0px 50px 50px #4851B3; 
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      order: 1;
      width: 100%;
      max-width: 300px;
    }
  }
`;


export const NameContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  p {
    font-size: 2rem;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const Resume = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TextContainer = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Icon = styled.div`
  font-size: 2rem;
  color: #ffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
