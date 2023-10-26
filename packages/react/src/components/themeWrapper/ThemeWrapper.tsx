import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

type ThemeWrapperProps = {
    $theme: object
    children: PropsWithChildren
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ $theme, children }) => {
    return (
        <ThemeProvider theme={$theme}><>{children}</></ThemeProvider>
    )
}

export default ThemeWrapper