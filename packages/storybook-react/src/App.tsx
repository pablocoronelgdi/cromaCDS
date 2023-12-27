import { ThemeWrapper, Button, Text, Icon, Switch } from "@cromaui/react";
import { useState } from "react";

function App() {
  const [valu, setValue] = useState(false);
  const handleSwitch = (isChecked: any) => {
    console.log("cambiamos:", isChecked);
  };

  return (
    <>
      <br />
      <br />
      <ThemeWrapper $theme="macro">
        <Icon size="large">check</Icon>
        <Icon size="small">check</Icon>
        <Switch value={valu} onChange={() => setValue(!valu)} />
        <Switch onChange={handleSwitch} />
        <Switch disabled />
        <Switch disabled value={true} />
      </ThemeWrapper>
    </>
  );
}

export default App;
