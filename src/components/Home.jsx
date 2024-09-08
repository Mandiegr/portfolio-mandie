import { Banner, NameContainer, TextContainer, Button } from '../styles/HomeStyles';

export const Home = () => {
  return (
    <Banner>
      <NameContainer>
        <p>Software</p>
        <p>Engineer</p>
      </NameContainer>

      <TextContainer>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Button>Explore</Button>
      </TextContainer>
    </Banner>
  );
};
