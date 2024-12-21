import { useState } from 'react';
import {
  FaGraduationCap,
  FaTools,
  FaHandsHelping,
  FaBriefcase,
} from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
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
  SiFigma,
  SiCsharp,
  SiPhp,
} from 'react-icons/si';
import {
  AboutContainer,
  ContainerRight,
  IconButtons,
  IconButton,
  ContentDisplay,
  IconContainer,
  Icon,

} from '../styles/AboutStyles';

const About = () => {
  const [activeContent, setActiveContent] = useState('education');

  const renderContent = () => {
    switch (activeContent) {
      case 'education':
        return (
          <ContentDisplay>
            <h3>Histórico Acadêmico</h3>
            <p>
              
            <FaGraduationCap color='#4851B3' />  Tecnóloga em Análise e Desenvolvimento de Sistemas - Universidade
              da Amazônia - UNAMA - 2022
            </p>
            <p>
            <FaGraduationCap color='#4851B3' /> Pós-Graduação em Engenharia de Software - PUC Minas -
              2024-2025
            </p>
            <p>
            <FaGraduationCap color='#4851B3' />  Pós-Graduação Lato Sensu em Docência na Educação Profissional e
              Tecnológica (DocenEPT) - IFPA - 2025-2026
            </p>
          </ContentDisplay>
        );
      case 'hard-skills':
        return (
          <ContentDisplay>
            <h3>Hard Skills</h3>
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
          </ContentDisplay>
        );
      case 'soft-skills':
        return (
          <ContentDisplay>

              <h3>Soft Skills</h3>
           
              <p>Comunicação eficaz</p>
              <p>Trabalho em equipe</p>
              <p>Resolução de problemas</p>
              <p>Adaptabipdade</p>
              <p>Gestão de tempo</p>
              <p>Pensamento crítico</p>
              <p>Atitude proativa</p>
            
          </ContentDisplay>
        );
        case 'work':
          return (
            <ContentDisplay>
  
                <h3>Desenvolvedora Reactjs/React Native Jr</h3>
                <h3>EG SOftwares</h3>
                <h3>13 maio de 2023 - atualmente</h3>
                <p>
                Desenvolvimento de Componentes de Interface do Usuário: Criação de componentes
                reutilizáveis e modulares em React e React Native, garantindo uma interface de
                usuário intuitiva e responsiva.
                Integração com APIs e Serviços Backend: Realização de chamadas API para
                integração com serviços backend, utilizando bibliotecas como Axios, e
                gerenciamento de estado com Redux ou Context API.
                Colaboração em processo de revisão de código, garantindo a qualidade e
                consistência do código produzido.

                </p>
             
              
              
            </ContentDisplay>
          );
      default:
        return (
          <ContentDisplay>
            <h3>Selecione uma categoria</h3>
            <p>
              Clique em um ícone acima para visualizar o conteúdo correspondente.
            </p>
          </ContentDisplay>
        );
    }
  };

  return (
    <AboutContainer>
      <ContainerRight>
        <IconButtons>
          <IconButton
            onClick={() => setActiveContent('education')}
            active={activeContent === 'education'}
          >
            <FaGraduationCap />
            <span>Formação</span>
          </IconButton>
          <IconButton
            onClick={() => setActiveContent('hard-skills')}
            active={activeContent === 'hard-skills'}
          >
            <FaTools />
            <span>Hard Skill</span>
          </IconButton>
          <IconButton
            onClick={() => setActiveContent('soft-skills')}
            active={activeContent === 'soft-skills'}
          >
             <FaHandsHelping />
            <span>Soft Skill</span>
          </IconButton>

          <IconButton
            onClick={() => setActiveContent('work')}
            active={activeContent === 'work'}
          >
             <FaBriefcase />
            <span>Work</span>
          </IconButton>

          
        </IconButtons>

        

        
        {renderContent()}
      </ContainerRight>
    </AboutContainer>
  );
};

export default About;
