import { css } from "styled-components";
import { Color, Typography } from "../../foundations";

const outlinedTextButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      color: ${props.theme?.components?.button?.variant?.outlined.disabled
        ?.backgroundColor || Color.Neutral[400]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      color: ${props.theme?.components?.button?.variant?.outlined?.color ||
      Color.Navy[800]};
    `;
  }
  return css`
    color: ${props.theme?.components?.button?.variant?.outlined?.color ||
    Color.Navy[800]};
  `;
};
const filledTextButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      color: ${props.theme?.components?.button?.variant?.filled?.color ||
      Color.Neutral[500]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      color: ${props.theme?.components?.button?.variant?.filled?.color ||
      Color.Neutral[100]};
    `;
  }
  // DISABLED
  return css`
    color: ${props.theme?.components?.button?.variant?.filled?.color ||
    Color.Neutral[100]};
  `;
};

const linkTextButton = (props) => {
  // DISABLED
  if (props.disabled) {
    return css`
      color: ${props.theme?.components?.button?.variant?.filled?.color ||
      Color.Neutral[400]};
    `;
  }
  // PRESSED
  if (props.isPressed) {
    return css`
      color: ${props.theme?.components?.button?.variant?.filled?.color ||
      Color.Navy[800]};
    `;
  }
  // DEFAULT
  return css`
    color: ${props.theme?.components?.button?.variant?.link?.color ||
    Color.Navy[800]};
  `;
};

export const getBaseButtonTextStyles = () => {
  return css`
    font-size: ${Typography.FontSize.bodyMd};
    line-height: ${Typography.LineHeight.bodyMd};
    font-weight: 600;
    text-align: center;
  `;
};

// TEXT VARIANT
export const getButtonTextVariant = (props) => {
  switch (props.variant) {
    case "link":
      return linkTextButton(props);
    case "outlined":
      return outlinedTextButton(props);
    default:
      return filledTextButton(props);
  }
};

// TEXT SIZE
export const getButtonTextSize = (props) => {
  switch (props.size) {
    case "small":
      return css`
        font-size: ${Typography.FontSize.bodySm};
        line-height: ${Typography.LineHeight.bodySm};
      `;
    case "large":
      return css`
        font-size: ${Typography.FontSize.bodyMd};
        line-height: ${Typography.LineHeight.bodyMd};
      `;
    default:
      return css`
        font-size: ${Typography.FontSize.bodyMd};
        line-height: ${Typography.LineHeight.bodyMd};
      `;
  }
};
