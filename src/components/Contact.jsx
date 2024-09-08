import {
  ContactContainer,
  LeftSide,
  Image,
  RightSide,
  Title,
  Description,
  ContactDetails,
  Detail,
} from '../styles/ContactStyles';

const Contact = () => {
  return (
    <ContactContainer>
      <LeftSide>
        <Image src="https://i.pinimg.com/736x/7e/27/b8/7e27b83d20d3a2f620ead913b96d0121.jpg" alt="Contato" />
      </LeftSide>
      <RightSide>
        <Title>Contacts</Title>
        <Description>
          Entre em contato conosco através das seguintes informações:
        </Description>
        <ContactDetails>
          <Detail><strong>Telefone:</strong> +55 91 99184-3012</Detail>
          <Detail><strong>Email:</strong> amandagr.eng.software@gmail.com</Detail>
          <Detail><strong>LinkedIn:</strong> https://www.linkedin.com/in/amanda-gomes-rebolsas-5138a0222/</Detail>
          <Detail><strong>Endereço:</strong> ****, ***, Belém, PA</Detail>
        </ContactDetails>
      </RightSide>
    </ContactContainer>
  );
};

export default Contact;
