import React, { useState } from "react";
import styled from "styled-components";
import * as checkboxStyles from "./styles";
import { Icon } from "../icon";
import { Color } from "@cromaui/foundations";

type RadioProps = {
  onChange?: (isChecked: boolean) => void;
  disabled?: boolean;
  value?: boolean;
  defaultValue?: boolean;
  name: string;
};
type RadioInnerProps = {
  isChecked: boolean;
  isPressed: boolean;
  disabled?: boolean;
};

const RadioContainer = styled.div<RadioInnerProps>`
  ${() => checkboxStyles.radioContainer}
`;
const RadioInput = styled.input`
  ${() => checkboxStyles.radioInput}
`;
const RadioArea = styled.label<RadioInnerProps>`
  ${() => checkboxStyles.radioArea}
`;

const Radio: React.FC<RadioProps> = ({
  onChange,
  disabled,
  value,
  defaultValue,
  name,
}) => {
  const [isChecked, setIsChecked] = useState(defaultValue || false);
  const [isPressed, setIsPressed] = useState(false);

  const handleCheck = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    console.log("ahre");
    console.log(!isChecked);

    if (!disabled) {
      if (value === undefined) {
        setIsChecked(!isChecked);
      }
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
    <RadioContainer
      isChecked={isChecked}
      isPressed={isPressed}
      disabled={disabled}
    >
      <RadioArea
        onMouseDown={(e) => handlePress(e)}
        onMouseUp={(e) => handlePress(e)}
        onMouseLeave={handleMouseLeave}
        isPressed={isPressed}
        isChecked={value !== undefined ? value : isChecked}
        disabled={disabled}
        onClick={(e) => handleCheck(e)}
      >
        <RadioInput
          disabled={disabled}
          type="radio"
          checked={value !== undefined ? value : isChecked}
          name={name}
        />
        <Icon color={disabled ? Color.Neutral[400] : Color.Navy.main}>
          {value || isChecked
            ? "radio_button_checked"
            : "radio_button_unchecked"}
        </Icon>
      </RadioArea>
    </RadioContainer>
  );
};

export default Radio;
