import { ThemeWrapper, Switch, RoundedImage } from "@cromaui/react";
import { useState } from "react";
import { PHOTO_DATA_MOCK } from "./mocks/images";

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', placeItems: 'center', width: '100%', gap: 10, flexWrap: 'wrap' }}>
          <RoundedImage size="extra-small" monogram="áä" />
          <RoundedImage size="small" monogram="Abcs" />
          <RoundedImage size="medium" monogram="LR" />
          <RoundedImage size="large" monogram="LR" />
          <RoundedImage size="extra-large" monogram="LR" />
          <RoundedImage size="extra-small" photo={PHOTO_DATA_MOCK} />
          <RoundedImage size="small" photo={PHOTO_DATA_MOCK} />
          <RoundedImage size="medium" photo={PHOTO_DATA_MOCK} />
          <RoundedImage size="large" photo={PHOTO_DATA_MOCK} />
          <RoundedImage size="extra-large" photo={PHOTO_DATA_MOCK} />
          <RoundedImage size="extra-small" monogram="LR" disabled />
          <RoundedImage size="small" monogram="LR" disabled />
          <RoundedImage size="medium" monogram="LR" disabled />
          <RoundedImage size="large" monogram="LR" disabled />
          <RoundedImage size="extra-large" monogram="LR" disabled />
          <RoundedImage size="extra-small" photo={PHOTO_DATA_MOCK} disabled />
          <RoundedImage size="small" photo={PHOTO_DATA_MOCK} disabled />
          <RoundedImage size="medium" photo={PHOTO_DATA_MOCK} disabled />
          <RoundedImage size="large" photo={PHOTO_DATA_MOCK} disabled />
          <RoundedImage size="extra-large" photo={PHOTO_DATA_MOCK} disabled />
          {/* <RoundedImage icon={{ size: "small", name: "Check" }} /> */}
        </div>
      </ThemeWrapper>
    </>
  );
}

export default App;
