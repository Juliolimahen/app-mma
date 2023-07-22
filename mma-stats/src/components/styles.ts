import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
  width: 100%;
`;

export const NavbarContainerText = styled.h2`
margin-left: 17%;
`

export const FooterContainer = styled.footer`
  background-color: #333;
  text-align: center;
  color: #fff;
  padding: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const FighterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FighterCardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 250px;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  .image-container {
    width: 100%;
    height: 350px; /* Altura fixa para manter a proporção */
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    max-height: 350px;
    object-fit: cover;
    object-position: center top;
  }

  svg {
    font-size: 48px;
    margin-bottom: 10px;
  }
}`;

export const PlusButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 20px;

  svg {
    font-size: 20px;
    margin-right: 5px;
  }
`;
