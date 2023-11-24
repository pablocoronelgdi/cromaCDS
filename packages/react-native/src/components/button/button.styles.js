import { css } from "styled-components";
import { Color } from "../../foundations";

// OUTLINE BUTTON
const outlinedButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.outlined
        .disabled?.backgroundColor || Color.Neutral[0]};
      border: solid 2px
        ${props.theme?.components?.button?.variant?.outlined.disabled.color ||
        Color.Neutral[400]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.outlined
        .pressed?.backgroundColor || Color.Navy[50]};
      border: solid 2px
        ${props.theme?.components?.button?.variant?.outlined.pressed.color ||
        Color.Navy[800]};
    `;
  }
  // DEFAULT
  return css`
    background-color: ${props.theme?.components?.button?.variant.outlined
      ?.backgroundColor || Color.Neutral[0]};
    border: solid 2px
      ${props.theme?.components?.button?.variant.outlined.color ||
      Color.Navy[800]};
  `;
};

// FILLED BUTTON
const filledButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.filled
        .disabled?.backgroundColor || Color.Neutral[300]};
      border: solid 2px
        ${props.theme?.components?.button?.variant.filled.disabled.color ||
        Color.Neutral[300]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.filled
        .pressed.backgroundColor || Color.Navy[900]};
      border: solid 2px
        ${props.theme?.components?.button?.variant.filled.pressed
          ?.backgroundColor || Color.Navy[900]};
    `;
  }
  // DEFAULT
  return css`
    background-color: ${props.theme?.components?.button?.variant.filled
      ?.backgroundColor || Color.Navy[800]};
    border: solid 2px
      ${props.theme?.components?.button?.variant?.filled.color ||
      Color.Navy[800]};
  `;
};

// LINK BUTTON
const linkButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.link.disabled
        .backgroundColor || Color.Neutral[0]};
      border: solid 2px
        ${props.theme?.components?.button?.variant.filled.disabled.color ||
        Color.Neutral[0]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      background-color: ${props.theme?.components?.button?.variant.link.pressed
        .backgroundColor || Color.Neutral[200]};
      border: solid 2px
        ${props.theme?.components?.button?.variant?.link.pressed.color ||
        Color.Neutral[0]};
    `;
  }
  // DEFAULT
  return css`
    background-color: ${props.theme?.components?.button?.variant.outlined
      ?.backgroundColor || Color.Neutral[0]};
    border: solid 2px
      ${props.theme?.components?.button?.variant?.outlined?.backgroundColor ||
      Color.Neutral[100]};
  `;
};

// BASE BUTTON STYLES
export const getBaseButtonStyles = () => {
  return css`
    padding: 8px 12px 8px 12px;
    border-radius: 8px;
    display: inline-flex;
  `;
};

// Function to get styles according to SIZE prop
export const getButtonSize = (props) => {
  switch (props.size) {
    case "small":
      return css`
        padding: 8px 12px;
      `;
    case "medium":
      return css`
        padding: 8px 12px;
      `;
    case "large":
      return css`
        padding: 12px 16px;
      `;
    default:
      return css`
        padding: 8px 12px;
      `;
  }
};

// Function to get styles according to VARIANT prop
export const getButtonVariant = (props) => {
  switch (props.variant) {
    case "link":
      return linkButton(props);
    case "outlined":
      return outlinedButton(props);
    default:
      return filledButton(props);
  }
};
