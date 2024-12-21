import { 
  ContainerLeft, 
  ContainerRight, 
  ContainerHome, 
  NameContainer, 
  TextContainer, 
  Resume, 
  IconContainer, 
  Icon 
} from '../styles/HomeStyles';

import { 
  SiNextdotjs, 
  SiJavascript, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiFirebase, 
  SiMongodb, 
  SiMysql, 
  SiSqlite, 
  SiPython, 
  SiPostgresql, 
  SiCsharp,
  SiPhp,
  SiCss3,
  SiHtml5,
  SiFigma
} from 'react-icons/si';

export const Home = () => {
  return (
    <ContainerHome>
      <ContainerLeft>
        <NameContainer>
          <p>Software Engineer</p>
        </NameContainer>
        <Resume>
          Desenvolvedora Fullstack JavaScript com experiência sólida em desenvolvimento web e mobile, 
          utilizando tecnologias como JavaScript, React, React Native, Nextjs, Node.js e bancos de dados 
          como PostgreSQL, MongoDB e Firebase.
        </Resume>
        <TextContainer>
          <h2>Main Skills:</h2>
          <IconContainer>
              <Icon as={SiFigma} />
              <Icon as={SiHtml5} />
              <Icon as={SiCss3} />
              <Icon as={SiJavascript} />
              <Icon as={SiReact} />
              <Icon as={SiTypescript} />
              <Icon as={SiNextdotjs} />
              <Icon as={SiNodedotjs} />
              <Icon as={SiFirebase} />
              <Icon as={SiMongodb} />
              <Icon as={SiSqlite} />
              <Icon as={SiMysql} />
              <Icon as={SiPostgresql} />
              <Icon as={SiPython} />
              <Icon as={SiCsharp} />
              <Icon as={SiPhp} />
          </IconContainer>
        </TextContainer>
      </ContainerLeft>
      
      <ContainerRight>
        <img src="./mandii.png" alt="Profile" />
      </ContainerRight>
    </ContainerHome>
  );
};
