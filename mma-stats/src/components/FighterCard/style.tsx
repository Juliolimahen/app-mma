import styled from 'styled-components';

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
