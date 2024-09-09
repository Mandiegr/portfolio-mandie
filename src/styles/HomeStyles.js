import styled from 'styled-components';
import banner from '../../public/banner.png';


export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 100vh;
  }

  @media (max-width: 491px) {
    height: 100vh;
  }
`;

export const NameContainer = styled.div`
  position: absolute;
  top: 30%;
  color: white;
  padding-left: 2rem;
  text-align: center;
  p {
    font-size: 116px;

    @media (max-width: 1024px) {
      font-size: 100px;
  }

    @media (max-width: 768px) {
      font-size: 80px;
    }

    @media (max-width: 491px) {
      font-size: 70px;
      padding-left: 0;
      text-align: center;
    }
  }
  

  @media (max-width: 491px) {
    position: static;
    transform: none;
    top: auto;
    left: auto;
    text-align: center;
    padding: 0;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  flex-direction: column;
  top: 60%;
  color: white;
  padding-left: 2rem;
  font-size: 20px;
  line-height: 1.5;
  margin-top: 3rem;


 @media (min-width: 1024px) {
  }

  @media (max-width: 768px) {
    top: 60%;
    font-size: 16px;
    padding: 1rem;
    margin-top: 2rem;
  }

  @media (max-width: 491px) {
    position: static;
    top: auto;
    left: auto;
    transform: none;
    text-align: center;
    padding: 0;
    margin-top: 1rem;
  }
`;

export const Button = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 491px) {
    font-size: 12px;
    padding: 6px 12px;
    margin-top: 30px;
  }
`;


export const IconContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
  white-space: nowrap;
  align-items: center;
  min-height: 60px;
  gap: 20px;


  @media (max-width: 491px) {
    gap: 10px;

  }

`;

export const Icon = styled.div`
  font-size: 40px;

  

@media (max-width: 540px) {
  font-size: ${props => props.size || '20px'};


  }
`;