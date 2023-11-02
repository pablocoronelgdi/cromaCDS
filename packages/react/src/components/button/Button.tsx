import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { macro } from '../../theme/theme'
import { Elevation } from '../../foundations'

type StyledButtonProps = {
  children: ReactNode | string,
  $elevation?: keyof typeof Elevation
}

const StyledButton = styled.button<StyledButtonProps>`
background-color: transparent;
color: ${props => props.theme.color.primary?.main || macro.color.primary.main};
padding:12px;
border-radius:12px;
font-size:1.5rem;
border: solid 3px;
border-color: ${props => props.theme.color.primary?.main || macro.color.primary.main};
font-weight:600;
box-shadow: ${({ $elevation, theme }) => $elevation ? Elevation[$elevation] : theme.components.button.elevation}
`

const Button: React.FC<StyledButtonProps> = ({ children, $elevation }) => {
  return (
    <StyledButton $elevation={$elevation}>{children}</StyledButton>
  )
}

export default Button