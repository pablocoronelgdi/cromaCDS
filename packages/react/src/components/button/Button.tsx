import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { macro } from '../../theme/theme'

type StyledButtonProps =  {
    children: ReactNode | string
}

const StyledButton = styled.button`
background-color: transparent;
color: ${props => props.theme.primary?.main ||  macro.primary.main};
padding:12px;
border-radius:12px;
font-size:1.5rem;
border: solid 3px;
border-color: ${props => props.theme.primary?.main || macro.primary.main };
font-weight:600,

`

const Button:React.FC<StyledButtonProps> = ({children}) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default Button