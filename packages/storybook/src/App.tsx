import { Button, ThemeWrapper } from "@cromaui/react";
import GlobalStyle from "./utils/globalStyles.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Button>Hola</Button>
      <ThemeWrapper $theme="selecta">
        <Button>Hola</Button>
      </ThemeWrapper>
    </>
  );
}

export default App;
