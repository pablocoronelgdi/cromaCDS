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
        <Text $variant="bold" $component="h1" >Whereas greiod</Text>
        <Text $variant="semibold" $component="h1" >Whereas greiod</Text>
        <Text $variant="regular" $component="h1" >Whereas greiod</Text>
        <Text $variant="bold" $component="bodyLg" >Whereas greiod</Text>
        <Text $variant="semibold" $component="bodyLg" >Whereas greiod</Text>
        <Text $variant="regular" $component="bodyLg" >Whereas greiod</Text>
      </ThemeWrapper>
     
   

    </>
  );
}

export default App;
