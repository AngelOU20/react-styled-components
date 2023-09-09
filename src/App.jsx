import { Container, HeaderComponent } from "./components";
import { GlobalStyle } from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./components/UI/temas";
import { ThemeProvider } from "styled-components";
import { SwitcherTema } from "./components/SwitcherTema/SwitcherTema";
import { BtnTema } from "./components/UI";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <HeaderComponent />
      <Container />
    </ThemeProvider>
  );
}

export default App;
