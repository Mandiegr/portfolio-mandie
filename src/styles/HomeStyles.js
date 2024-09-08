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
    height: 80vh;
  }

  @media (max-width: 491px) {
    height: 50vh;
  }
`;

export const NameContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translateY(-50%);
  color: white;
  padding-left: 2rem;

  p {
    font-size: 109px;

    @media (max-width: 768px) {
      font-size: 70px;
    }

    @media (max-width: 491px) {
      font-size: 40px;
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
  top: 70%;
  left: 65%;
  transform: translateY(-50%);
  color: white;
  padding-left: 2rem;
  font-size: 20px;
  line-height: 1.5;
  margin-top: 3rem;

  @media (max-width: 768px) {
    top: 80%;
    font-size: 16px;
    padding-left: 1rem;
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
    margin-top: 20px;
  }
`;
