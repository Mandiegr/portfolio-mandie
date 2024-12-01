import { SiWhatsapp, SiGmail, SiLinkedin } from "react-icons/si";
import {
  ContactContainer,
  LeftSide,
  Image,
  RightSide,
  Title,
  Description,
  ContactDetails,
  Detail,
} from "../styles/ContactStyles";

const Contact = () => {
  return (
    <ContactContainer>
      <LeftSide>
        <Image
          src="https://i.pinimg.com/736x/7e/27/b8/7e27b83d20d3a2f620ead913b96d0121.jpg"
          alt="Contato"
        />
      </LeftSide>
      <RightSide>
        <Title>Contacts</Title>
        <Description>Entre em contato comigo pelos meios abaixo:</Description>
        <ContactDetails>
          <Detail>
            <a
              href="https://wa.me/5591991843012"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <SiWhatsapp
                size={30}
                color="#ffffff"
                style={{ cursor: "pointer" }}
              />
            </a>
          </Detail>
          <Detail>
            <a
              href="mailto:amandagr.eng.software@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <SiGmail
                size={30}
                color="#ffffff"
                style={{ cursor: "pointer" }}
              />
            </a>
          </Detail>
          <Detail>
            <a
              href="https://www.linkedin.com/in/amanda-gomes-rebolsas-5138a0222/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <SiLinkedin
                size={30}
                color="#ffffff"
                style={{ cursor: "pointer" }}
              />
            </a>
          </Detail>
        </ContactDetails>
      </RightSide>
    </ContactContainer>
  );
};

export default Contact;
