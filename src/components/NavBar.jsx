import { HeaderContainer, Logo, ContainerRight, Nav, NavLink, MenuButton } from '../styles/NavBarStyles';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <Logo>Amanda Gomes Rebolsas</Logo>
      <ContainerRight>
        <Nav>
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
          <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </Nav>
        <MenuButton>
          <span></span>
          <span></span>
        </MenuButton>
      </ContainerRight>
    </HeaderContainer>
  );
};

export default Navbar;
