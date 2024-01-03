import React from "react";
import styled from "styled-components";
import { IconPropTypes, IconSizeType } from "./types";
import { Color, Shapes } from "@cromaui/foundations";

const getSize = (size?: IconSizeType) => {
  switch (size) {
    case "small":
      return "16px";
    case "medium":
      return "20px";
    case "large":
      return "24px";
    case "extra-large":
      return "32px";
    default:
      return "24px";
  }
};

const StyledIcon = styled.span<IconPropTypes>`
  display: flex;
  white-space: nowrap;
  word-wrap: normal;
  margin: 0;
  padding: 0;
  line-height: ${(props) => getSize(props.size)};
  width: ${(props) => getSize(props.size)};
  height: ${(props) => getSize(props.size)};
  color: ${(props) => props.color || Color.Navy.main};
  background-color: transparent;
  font-size: ${(props) => getSize(props.size)};
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  text-transform: none;
  user-select: none;
  border-radius: ${Shapes.full};
  justify-content: center;
  align-items: center;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
`;

const Icon: React.FC<IconPropTypes> = ({ name = "info", size, color }) => {
  return (
    <StyledIcon color={color} size={size}>
      {name}
    </StyledIcon>
  );
};

export default Icon;
