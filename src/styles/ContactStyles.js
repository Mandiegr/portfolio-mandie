import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 40px;
  background-color: #1f2020;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 80%;
  max-width: 400px;
  height: 100vh;
  object-fit: cover;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Detail = styled.div`
  font-size: 1rem;
  color: #ffffff;
  line-height: 1.5;
`;

