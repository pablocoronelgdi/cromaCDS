import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontSize, FontWeight, LineHeight } from '../../foundations'
import { macro } from '../../theme/theme';

type Text$variant = 'bold' | 'semibold' | 'regular';
type TextComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'bodyLg' | 'bodyMd' | 'bodySm' | 'bodyXs'
type Color = 'dark' | 'light' | 'red'

type TextProps = {
  $component?: TextComponent
  $variant?: Text$variant,
  children: ReactNode,
  $color?: Color,
}

const getFontVariation = ($component: TextComponent, $variant: Text$variant) => {
  const headingsWithouthRegular = ['h3', 'h4', 'h5', 'h6'];
  if (headingsWithouthRegular.includes($component)) {
    if ($variant === 'bold' || $variant === 'semibold') {
      return FontWeight[$variant]
    }
    else {
      return FontWeight['semibold']
    }
  }
  else {
    return FontWeight[$variant]
  }
}

const Heading = styled.p<TextProps>`
  font-size: ${(props) => ((props.$component ? FontSize[props.$component as keyof typeof FontSize] : FontSize['bodyMd']))};
  font-weight: ${(props) => (props.$component && props.$variant ? getFontVariation(props.$component, props.$variant) : FontWeight['regular'])};
  line-height: ${(props) => props.$component ? LineHeight[props.$component] : LineHeight['bodyMd']};
  color: ${(props) => props.$color ? props.theme.text.light : props.theme.text.dark}
`;

const Text: React.FC<TextProps> = ({ $component = 'bodyMd', children, $variant, $color }) => {

  return <ThemeProvider theme={macro}>
    <Heading as={$component.includes('body') ? 'p' : $component} $component={$component} $variant={$variant} $color={$color}>
      {children}
    </Heading>
  </ThemeProvider>

};

export default Text;