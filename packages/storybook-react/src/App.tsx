import {
  ThemeWrapper,
  Switch,
  Checkbox,
} from "@cromaui/react";
import { useState } from "react";

function App() {
  const [valu, setValue] = useState(false);
  const handleSwitch = (value: any) => {
    console.log("cambiamos:", value);
  };

  return (
    <>
      <br />
      <br />
      <ThemeWrapper $theme="macro">
        {/*Switch activo controlado y falso*/}
        <Switch value={valu} onChange={() => setValue(!valu)} />

        {/*Switch inactivo controlado y falso*/}
        <Switch value={valu} />
        {/*Switch activo y true*/}
        <Switch onChange={handleSwitch} defaultValue={true} />
        {/*Switch inactivo y true*/}
        <Switch disabled defaultValue={false} />
        <Checkbox />
        <Checkbox disabled />
        <Checkbox defaultValue={true} disabled />
        <Checkbox defaultValue={true} />
        <Checkbox value={valu} onChange={() => setValue(!valu)} />
      </ThemeWrapper>
    </>
  );
}

export default App;
