import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #161616;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

export const Logo = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: #ffff;
`;

export const ContainerRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #ffff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

