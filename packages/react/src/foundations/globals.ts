import { createGlobalStyle } from 'styled-components'
import {normalize} from 'polished'

export const GlobalStyle = createGlobalStyle`
${normalize()}
html{
    font-size:16px;
    box-sizing: border-box
}

*,*::before,*::after {
    box-sizing: inherit
}
body{
    border: solid 3px red
}

`