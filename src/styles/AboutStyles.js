import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #4851B3 ,#fff);



  @media (max-width: 912px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

export const ContainerLeft = styled.div`
  flex: 1;
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: #4851b3;
  color: white;
  box-shadow: 0px 0px 50px 20px #4851b3;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 912px) {
    width: 100%;
    margin-top: 10rem;
  }  

  @media (max-width: 768px) {
    width: 100%;
    
   
  } 
`;

export const ContainerRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  @media (max-width: 912px) {
    width: 100%;
  }
`;

export const IconButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const IconButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.active ? '#4851b3' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#4851b3')};
  border: 2px solid #4851b3;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  span {
    font-size: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const ContentDisplay = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  width: 100%;
  max-width: 400px;
  min-height: 200px;

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #4851b3;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 1rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
  }
`;

export const Icon = styled.div`
  font-size: 40px;
  color: #4851b3;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const AboutMeTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  margin: 10px 0;
  color: white;
  text-align: justify;
`;
