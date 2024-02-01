import { color } from '@cromaui/foundations'
import { Checkbox, Logo, ThemeWrapper } from '@cromaui/react'
import Cashin from './pictogram-cash.svg'

function App(): JSX.Element {
  return (
    <>
      <ThemeWrapper $theme="macro">
        <Checkbox />
        <Logo
          name="MacroHorizontal"
          colorPrimary={color.navy.main}
          height={24}
        />
        <Logo>
          {
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.76 52.0195H30.23C30.1 52.0195 30 51.8895 30 51.7195V48.3195C30 48.1495 30.11 48.0195 30.23 48.0195H33.76C33.89 48.0195 33.99 48.1495 33.99 48.3195V51.7195C33.99 51.8895 33.88 52.0195 33.76 52.0195Z"
                fill="red"
              />
              <path
                d="M33.76 16.0303H30.23C30.1 16.0303 30 15.9003 30 15.7303V12.3303C30 12.1603 30.11 12.0303 30.23 12.0303H33.76C33.89 12.0303 33.99 12.1603 33.99 12.3303V15.7303C33.99 15.9003 33.88 16.0303 33.76 16.0303Z"
                fill="red"
              />
              <path
                d="M37.2203 27.0301C37.1003 24.0701 34.4603 21.6901 31.2803 21.9501C28.8703 22.1501 26.8303 23.9401 26.4003 26.2501C26.4003 26.2801 26.4003 26.3001 26.3903 26.3301C26.0203 28.5001 27.4503 30.6001 29.6103 31.2601L34.3903 32.7301C36.5503 33.4001 37.9803 35.4901 37.6103 37.6601C37.6103 37.6901 37.6103 37.7101 37.6003 37.7401C37.1703 40.0501 35.1303 41.8501 32.7203 42.0401C29.5503 42.3001 26.9303 39.9501 26.7803 37.0101"
                stroke="red"
                strokeWidth="4"
                strokeMiterlimit="10"
              />
              <path
                d="M58 32C58 46.36 46.36 58 32 58C17.64 58 6 46.36 6 32"
                stroke="blue"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M6 32C6 17.64 17.64 6 32 6C46.36 6 58 17.64 58 32"
                stroke="red"
                strokeWidth="4"
                strokeMiterlimit="10"
              />
            </svg>
          }
        </Logo>
        <Logo>{Cashin}</Logo>
      </ThemeWrapper>
    </>
  )
}

export default App
