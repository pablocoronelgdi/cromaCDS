import React from 'react';
import styled from 'styled-components';
import { macro } from '../../theme/theme';
import { TextComponent, TextVariant, TextProps } from './types';

const getFontVariation = ($component: TextComponent, $variant?: TextVariant): string => {
  //Generamos un array con los Tags que no tienen una opcion regular.
  const HeadingsWithouthRegular = ['h3', 'h4', 'h5', 'h6'];
  if (HeadingsWithouthRegular.includes($component)) {
    //Si la prop $variant es bold o semibold devolvemos eso. Caso contrario siempre devolvemos semibold.
    return $variant === 'bold' || $variant === 'semibold' ? $variant : 'semibold';
  }
  //Si no se especifica una variante, devuelve semibold por default para StyledTexts y regular para body. 
  return $variant || ($component.includes('body') || $component.includes('caption') ? 'regular' : 'semibold');
}

const IsValidComponent = ($component: TextComponent) => {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'bodyLg', 'bodyMd', 'bodySm', 'caption'].includes($component)
}

const renderComponent = ($component: TextComponent) => {
  if (IsValidComponent($component)) {
    return $component.includes('body') || $component.includes('caption') ? 'p' : $component
  }
  return "p"
}

const StyledText = styled.p<TextProps>`
  font-family: ${({ $component, theme }) => ((IsValidComponent($component!) ? theme.typography[$component!].fontFamily : macro.typography.bodyLg))};
  font-weight: ${({ $component, $variant, theme }) => theme.typography.fontWeight[getFontVariation($component!, $variant)]};
  font-size: ${({ $component, theme }) => ((IsValidComponent($component!) ? theme.typography[$component!].fontSize : macro.typography.bodyLg))};
  line-height: ${({ $component, theme }) => IsValidComponent($component!) ? theme.typography[$component!].lineHeight : macro.typography.bodyLg};
  color: ${({ $color, theme }) => $color ? theme.color.text.light : macro.color.text.dark}
`;

const Text: React.FC<TextProps> = ({ $component = "bodyLg", children, $variant, $color }: TextProps) => {
  return <StyledText as={renderComponent($component)} $component={$component} $variant={$variant} $color={$color}>
    {children}
  </StyledText>


};

export default Text;