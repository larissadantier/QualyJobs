import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from '../../Routes';
import defaultTheme from '../../styles/themes/default';
import GlobalStyle from '../../styles/global';
import { Container, Header } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Container>
          <Header>
            <h1>
              Qualy
              {' '}
              <span>Jobs</span>
            </h1>
          </Header>
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
