import mandie from "../../public/mandie.png";
import {
  AboutContainer,
  ContainerRight,
  TextContainer,
  AboutImage,
  AboutMeTitle,
  AboutText,
  Title,

} from '../styles/AboutStyles';
const About = () => {


 

  return (
    <AboutContainer>
      <ContainerRight>
        <AboutImage src={mandie} alt="About me" />
        <Title>Amanda Gomes Rebolsas, Engenheira de Software jr</Title>
        <AboutText>
        Desenvolvedora Fullstack JavaScript com experiência sólida em desenvolvimento web e mobile,
         utilizando tecnologias como JavaScript, React, Nextjs, Node.js e bancos de dados como PostgreSQL,MongoDB e Firebase.
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
        <AboutText>
        Tecnologa em Análise e Desenvolvimento de Sistemas - Universidade da Amazônia - UNAMA - 2022
          </AboutText>
          <AboutText>
            Graduando Pós Graduação em Engenharia de Software - PUC Minas - 2024-2025
          </AboutText>
          <AboutText>
          Pós-Graduação Lato Sensu em Docência na Educação Profissional e Tecnológica (DocenEPT) - IFPA - 2025-2026
          </AboutText>
        </AboutText>

        <div>

          <Title>Skills</Title>
        <AboutText>
          .full-stack Developer
          .WebDesigner
          .Mobile Developer
          .Data analysis
        </AboutText>
        </div>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
