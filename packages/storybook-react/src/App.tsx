import { ThemeWrapper, Button, Text, Icon, Switch } from "@cromaui/react";
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
        <Switch value={valu} disabled />
        {/*Switch activo y true*/}
        <Switch onChange={handleSwitch} defaultValue={true} />
        {/*Switch inactivo y true*/}
        <Switch disabled defaultValue={false} />
      </ThemeWrapper>
    </>
  );
}

export default App;
