import { Banner, NameContainer, TextContainer, IconContainer, Icon } from '../styles/HomeStyles';
import { SiNextdotjs, SiJavascript, SiReact, SiTypescript, SiNodedotjs, SiFirebase, SiMongodb, SiMysql, SiSqlite, SiPython } from 'react-icons/si';

export const Home = () => {
  return (
    <Banner>
      <NameContainer>
        <p>Software</p>
        <p>Engineer</p>
      </NameContainer>

      <TextContainer>
        <h2>Main languages:</h2>
        <IconContainer>
        <Icon as={SiJavascript}  />
          <Icon as={SiReact}  />
          <Icon as={SiTypescript}  />
          <Icon as={SiNextdotjs}  />
          <Icon as={SiNodedotjs}  />
          <Icon as={SiFirebase}  />
          <Icon as={SiMongodb}  />
          <Icon as={SiSqlite}  />
          <Icon as={SiMysql}  />
          <Icon as={SiPython}  />
        </IconContainer>
       {/** <Button>Explore</Button> */}
      </TextContainer>
    </Banner>
  );
};
