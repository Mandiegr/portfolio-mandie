import mandie from "../../public/mandie.jpg";
import {
  AboutContainer,
  ImageContainer,
  TextContainer,
  AboutImage,
  AboutMeTitle,
  AboutText,
  Title,

} from '../styles/AboutStyles';
import { SiNextdotjs, SiJavascript, SiReact, SiTypescript, SiNodedotjs, SiFirebase, SiMongodb, SiMysql, SiSqlite, SiPython } from 'react-icons/si';
import {Icon, IconContainer} from '../styles/HomeStyles'
const About = () => {


 

  return (
    <AboutContainer>
      <ImageContainer>
        <AboutImage src={mandie} alt="About me" />
        <AboutMeTitle>About me</AboutMeTitle>
      </ImageContainer>
      <TextContainer>
        <Title>Academic History</Title>
        <AboutText>
          Tecnologa em Análise e Desenvolvimento de Sistemas- Universidade da Amazônia - UNAMA - 2022
          <AboutText>
            Graduando Pós Graduação em Engenharia de Software - PUC Minas - 2024-2025
          </AboutText>
        </AboutText>

        <div>
          <Title>
            Programming Languages:
          </Title>
        <IconContainer> 
          <Icon as={SiJavascript}/>
          <Icon as={SiReact}  />
          <Icon as={SiTypescript}/>
          <Icon as={SiNextdotjs} />
          <Icon as={SiNodedotjs}/>
          <Icon as={SiFirebase}/>
          <Icon as={SiMongodb}/>
          <Icon as={SiSqlite}/>
          <Icon as={SiMysql} />
          <Icon as={SiPython}/>
          </IconContainer>
        

          <AboutText>
          </AboutText>

          <Title>Skills</Title>
        <AboutText>
          .full-stack Developer
          .Mobile Developer
          .Data analysis
          .**** *******
          .**** *******
          .**** *******
        </AboutText>
        </div>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
