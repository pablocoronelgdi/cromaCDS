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
body {
    margin: 2rem;
    border: solid 1px red
}

`