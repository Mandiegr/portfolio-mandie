import mandie from "../../public/mandie.jpg";
import {
  AboutContainer,
  ContainerRight,
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
      <ContainerRight>
        <AboutImage src={mandie} alt="About me" />
        <Title>Amanda Gomes Rebolsas, Engenheira de Software jr</Title>
        <AboutText>
        Desenvolvedora Fullstack JavaScript com experiência sólida em desenvolvimento web e mobile,
         utilizando tecnologias como React, Nextjs, Node.js e bancos de dados como PostgreSQL,MongoDB e Firebase.
         Sou altamente motivada e comprometida com o aprendizado contínuo, sempre buscando aprimorar minhas
          habilidades em Engenharia de Software e design de interface.
          Minhas experiências incluem a criação de componentes reutilizáveis, integração com APIs e colaboração em equipes ágeis,
           onde aprendi a importância da comunicação e da adaptabilidade. Estou ansiosa para aplicar meu conhecimento e habilidades
            em novos desafios, contribuindo para o sucesso de projetos inovadores.
       </AboutText>
       <AboutMeTitle>About me</AboutMeTitle>
      </ContainerRight>

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
        </AboutText>
        </div>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
