import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExploreFighters from './pages/ExploreFighters';
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
  padding: 0px;
  border-radius: 5px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Navbar />
        <ExploreFighters />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
