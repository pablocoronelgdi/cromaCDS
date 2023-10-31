import { Text, ThemeWrapper } from "@cromaui/react";
import GlobalStyle from "./utils/globalStyles.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Text $component="bodyLg" >Hola soy un bodyLG</Text>
      <Text $component="h1" >Hola soy un h1</Text>
      <Text $component="h2" $variant="semibold" >Hola soy un h2</Text>
      <Text $component="h3" $variant="bold" >Hola soy un h3</Text>
      <Text $component="h3" $variant="regular" >Hola soy un h3 que no puede ser regular</Text>
      <Text>Hola no se que soy</Text>
    </>
  );
}

export default App;
