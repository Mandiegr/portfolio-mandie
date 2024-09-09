import { useState } from 'react';
import { HeaderContainer, Logo, ContainerRight, Nav, NavLink } from '../styles/NavBarStyles';
import { MenuButton, MenuItemsContainer } from "../styles/MenuButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <MenuButton onClick={toggleMenu}>
          <span></span>
          <span></span>
        </MenuButton>

        {menuOpen && (
          <MenuItemsContainer>
            <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </MenuItemsContainer>
        )}
      </ContainerRight>
    </HeaderContainer>
  );
};

export default Navbar;
