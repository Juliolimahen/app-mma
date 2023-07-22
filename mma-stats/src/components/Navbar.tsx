import React from 'react';
import { NavbarContainer, NavbarContainerText } from './styles';

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <NavbarContainerText>MMA Stats</NavbarContainerText>
        </NavbarContainer>
    );
};

export default Navbar;
