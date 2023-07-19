import './App.css';
import ExploreFighters from './components/ExploreFighters';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .App {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
  }
`;

const AppWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <ExploreFighters />
      </AppWrapper>
    </>
  );
}

export default App;
