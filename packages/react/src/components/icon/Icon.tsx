import React from "react";
import styled from "styled-components";
import { IconSizeType } from "./types";
import { Color, Shapes } from "@cromaui/foundations";

export type IconColorType = string;
export type IconPropTypes = {
  size?: IconSizeType;
  color?: IconColorType;
  style?: object;
  theme?: object;
  children?: any;
};

const getSize = (size?: IconSizeType) => {
  switch (size) {
    case "small":
      return "24px";
    case "medium":
      return "32px";
    case "large":
      return "64px";
    default:
      return "24px";
  }
};

const StyledIcon = styled.span<IconPropTypes>`
  width: ${(props) => getSize(props.size)};
  height: ${(props) => getSize(props.size)};
  font-size: ${(props) => getSize(props.size)};
  font-family: "MaterialIcons";
  color: ${props => props.color || Color.Navy.main};
  user-select: none;
  background-color: transparent;
  border-radius: ${Shapes.full};
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
`;

const Icon: React.FC<IconPropTypes> = ({ children, size,color }) => {
  return (
    <StyledIcon color={color} className="material-icons" size={size}>
      {children}
    </StyledIcon>
  );
};

export default Icon;
