import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 40px;
  background: linear-gradient(135deg, #4851B3 ,#fff);
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.div`
  width: 80%;
  background: #4851B3 ;
  
  max-width: 400px;
  height: 100vh;
  border-right: none;
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
  color: #fff ;
  margin-bottom: 10px;

  @media (max-width: 419px) {
   
    font-size: 2rem;
    }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #fff ;
`;

export const ContactDetails = styled.div`
  display: flex;
  gap: 10px;
`;

export const Detail = styled.div`
  font-size: 1rem;
  color: #fff ;
  line-height: 1.5;
  padding: 5px;
`;

