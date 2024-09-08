import { 
  ProjectContainer, 
  Title, 
  ImagesContainer, 
  ImageCard, 
  Image, 
  ImageTitle, 
  Description 
} from '../styles/ProjectsStyles';

const Project = () => {
  return (
    <ProjectContainer>
      <Title>Projects</Title>
      <ImagesContainer>
        <ImageCard>
          <Image src="https://i.pinimg.com/564x/8e/49/9e/8e499e636c15cd83a5ef8ea91d4bc605.jpg" alt="Imagem 1" />
          <ImageTitle>Imagem 1</ImageTitle>
          <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Description>
        </ImageCard>
        <ImageCard>
          <Image src="https://i.pinimg.com/564x/46/7a/ca/467acae6944588b20f759422034f4a09.jpg" alt="Imagem 2" />
          <ImageTitle>Imagem 2</ImageTitle>
          <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Description>
        </ImageCard>
        <ImageCard>
          <Image src="https://i.pinimg.com/736x/b1/20/88/b12088f8871b7be863befd6ac7a22e4d.jpg" alt="Imagem 3" />
          <ImageTitle>Imagem 3</ImageTitle>
          <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Description>
        </ImageCard>
        <ImageCard>
          <Image src="https://i.pinimg.com/736x/7c/e1/7f/7ce17ffb645153cdcf7adc3c1e4efa28.jpg" alt="Imagem 4" />
          <ImageTitle>Imagem 4</ImageTitle>
          <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Description>
        </ImageCard>
      </ImagesContainer>
    </ProjectContainer>
  );
};

export default Project;
