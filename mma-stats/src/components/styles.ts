import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
  width: 100%;
`;

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  position: fixed;
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
  background-color: #f1f1f1;
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

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  svg {
    font-size: 48px;
    margin-bottom: 10px;
  }
`;
