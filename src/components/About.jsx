import { useState } from 'react';
import banner from "../../public/banner.png";
import { ChevronCompactDown } from "react-bootstrap-icons";
import {
  AboutContainer,
  ImageContainer,
  TextContainer,
  AboutImage,
  AboutMeTitle,
  AboutText,
  Title,
  List,
  ListItem
} from '../styles/AboutStyles';

const About = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <AboutContainer>
      <ImageContainer>
        <AboutImage src={banner} alt="About me" />
        <AboutMeTitle>About me</AboutMeTitle>
      </ImageContainer>
      <TextContainer>
        <Title>Academic History</Title>
        <AboutText>
          Graduada em Tecnologia Análise e Desenvolvimento de Sistemas pela Universidade da Amazônia - UNAMA, 2022
          <AboutText>
            Cursando pós graduação em Engenharia de software pela PUC Minas - 2024-2025
          </AboutText>
        </AboutText>

        <Title>My Mission</Title>
        <AboutText>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </AboutText>

        <div>
          <Title onClick={toggleListVisibility}>
            Programming Languages <ChevronCompactDown style={{ transform: isListVisible ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
          </Title>
          <List isVisible={isListVisible}>
            <ListItem>JavaScript</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>PHP</ListItem>
            <ListItem>C#</ListItem>
          </List>
          <AboutText>
          </AboutText>

          <Title>Skills</Title>
        <AboutText>
          .full-stack Developer
          .Mobile Developer
          .Data analysis
        </AboutText>
        </div>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
