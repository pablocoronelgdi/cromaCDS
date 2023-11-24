import styled from "styled-components/native"
import { ReactNode, useState } from "react"
import * as ButtonStyle from "./button.styles"
import * as ButtonTextStyle from "./buttonText.styles"
import { PressableProps } from "react-native"

type ButtonSize = "small" | "medium" | "large"
type ButtonVariant = "filled" | "outlined" | "link"
type ButtonProps = {
  size?: ButtonSize,
  variant?: ButtonVariant,
  theme?: object,
  children: ReactNode,
  disabled?: boolean
} & PressableProps

type StyledButtonProps = {
  isPressed: boolean
} & ButtonProps

type TextProps = {
  size?: ButtonSize,
  variant?: ButtonVariant,
  isPressed?: boolean,
  disabled?: boolean
}

const StyledPressable = styled.Pressable<StyledButtonProps>`
padding: 2px;
border-style:solid;
border-width: 2px;
border-color: transparent;
border-radius: 12px;
`
const TextButton = styled.Text<TextProps>`
${() => ButtonTextStyle.getBaseButtonTextStyles()}
${(props: TextProps) => ButtonTextStyle.getButtonTextSize(props)}
${(props: TextProps) => ButtonTextStyle.getButtonTextVariant(props)};

`
const ViewButton = styled.View<StyledButtonProps>`
${() => ButtonStyle.getBaseButtonStyles()}
${(props: ButtonProps) => ButtonStyle.getButtonSize(props)}
${(props: ButtonProps) => ButtonStyle.getButtonVariant(props)}
`

const Button = ({ size, variant, children, disabled, style }: ButtonProps) => {

  const [isPressed, setIsPressed] = useState(false);


  return <StyledPressable onPressIn={() => setIsPressed(true)} onPressOut={() => setIsPressed(false)} isPressed={isPressed}>
    <ViewButton style={style} variant={variant} disabled={disabled} size={size} isPressed={isPressed}><TextButton variant={variant} disabled={disabled} size={size} isPressed={isPressed}>{children}</TextButton></ViewButton>
  </StyledPressable>
}


export default Button