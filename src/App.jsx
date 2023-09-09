import { Container, HeaderComponent } from "./components";
import { GlobalStyle } from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./components/UI/temas";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={temaOscuro}>
      <GlobalStyle />
      <HeaderComponent />
      <Container />
    </ThemeProvider>
  );
}

export default App;
