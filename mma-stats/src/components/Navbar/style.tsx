// src/components/Navbar/styles.ts
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
`;

export const NavbarContainerText = styled.h2`
  margin-left: 17%;
`;

export const NavbarLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #666;
  }
`;
