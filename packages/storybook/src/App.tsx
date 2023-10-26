
import { Text } from '@cromaui/react'
import GlobalStyle from './utils/globalStyles.js'

function App() {
  return (
    <>
      <GlobalStyle />
        <Text $component='h3' $variant='regular'>Soy un h3 qe no puede ser regular</Text>
        <Text $component='h3' $variant='semibold'>Soy un h3 semibold</Text>
        <Text $component='h1' $variant='regular'> Soy un h1 que si puede</Text>
        <Text>soy un simple parrafo</Text>
    </>
  )
}

export default App
