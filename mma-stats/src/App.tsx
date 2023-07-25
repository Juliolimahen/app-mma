import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExploreFighters from './pages';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Garante que a altura da página seja pelo menos 100% da altura da viewport */
  }

  #root {
    flex: 1; /* Faz com que o conteúdo preencha o espaço disponível entre o cabeçalho e o rodapé */
  }

  .App {
    background-color: #f7f7f7;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o contêiner principal ocupe pelo menos 100% da altura da viewport */
`;

const ContentWrapper = styled.div`
  flex: 1; /* Faz com que o conteúdo preencha o espaço disponível entre o cabeçalho e o rodapé */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Navbar />
        <ContentWrapper>
          <ExploreFighters />
        </ContentWrapper>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
