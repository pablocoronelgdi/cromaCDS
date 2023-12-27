import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon";
import * as SwitchStyles from "./styles";

type SwitchProps = {
  onChange?: (isChecked: boolean) => void;
  disabled?: boolean;
  value?: boolean;
};
type SwitchInnerProps = {
  isChecked: boolean;
  isPressed: boolean;
  disabled?: boolean;
};

const SwitchContainer = styled.div`
  ${() => SwitchStyles.SwitchContainer}
`;

const SwitchArea = styled.label<SwitchInnerProps>`
  ${() => SwitchStyles.SwitchArea}
`;

const SwitchInput = styled.input`
  ${() => SwitchStyles.SwitchInput}
`;

const SwitchThumb = styled.div<SwitchInnerProps>`
  ${() => SwitchStyles.SwitchThumb}
`;

const Switch: React.FC<SwitchProps> = ({ onChange, disabled, value }) => {
  const [isChecked, setChecked] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Modifica el estado del "checked" y si existe una funcion pasada como parametro
  // La ejecuta pasandole el estado del "checked" como parámetro
  const handleCheck = () => {
    if (!disabled) {
      setChecked(!isChecked);
      if (onChange) {
        onChange(!isChecked);
      }
    }
  };

  const handlePress = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsPressed(!isPressed);
  };
  const handleMouseLeave = () => {
    if (isPressed) {
      setIsPressed(!isPressed);
    }
  };

  return (
    <SwitchContainer>
      <SwitchArea
        isChecked={value || isChecked}
        isPressed={isPressed}
        onMouseDown={(e) => handlePress(e)}
        onMouseUp={(e) => handlePress(e)}
        onMouseLeave={handleMouseLeave}
        disabled={disabled}
      >
        <SwitchInput
          type="checkbox"
          checked={value || isChecked}
          onChange={handleCheck}
        />
        <SwitchThumb
          disabled={disabled}
          isChecked={value || isChecked}
          isPressed={isPressed}
        >
          {value || isChecked ? <Icon size="small">check</Icon> : null}
        </SwitchThumb>
      </SwitchArea>
    </SwitchContainer>
  );
};

export default Switch;
