import { ThemeWrapper, Button ,Text} from "@cromaui/react";
import GlobalStyle from "./utils/globalStyles.js";

function App() {
  return (
    <>
      <br />
      <br />

      {/*   Este boton se renderizara con el color azul
      ya que el tema "macro" tiene como colo principal el azul */}
      <ThemeWrapper $theme="macro">
        <Button $elevation="md">Boton Macro</Button>
      </ThemeWrapper>
      <Text $variant="bold" $component="h1" >Text h1 bold</Text>

    </>
  );
}

export default App;
