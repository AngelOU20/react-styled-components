import { Container, HeaderComponent } from "./components";
import { GlobalStyle } from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./components/UI/temas";
import { ThemeProvider } from "styled-components";
import { SwitcherTema } from "./components/SwitcherTema/SwitcherTema";
import { BtnTema } from "./components/UI";
import { useEffect, useState } from "react";

function App() {
  const storedItems = JSON.parse(localStorage.getItem("tema"));
  const [tema, setTema] = useState(storedItems);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  useEffect(() => {
    localStorage.setItem("tema", JSON.stringify(tema));
  }, [tema]);

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
