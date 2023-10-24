import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FontSize } from '../../foundations'
type TextVariant = 'bold' | 'semibold' | 'regular';
type TextComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'bodyLG' | 'bodyMd' | 'bodySm' | 'bodyXS'

type TextProps = {
    component?: TextComponent
    variant?: TextVariant,
    children: ReactNode,
}

const Heading = styled.div<{ component?: TextComponent, variant?: TextVariant }>`
  font-size: ${(props) => ((props.component ? FontSize[props.component as keyof typeof FontSize] : FontSize['bodyMd']))};


  @media (min-width: 768px) {
    font-size: ${(props) => props.component ? props.component : FontSize['$bodySm']};
  }`;

Heading.defaultProps = {
    component: 'bodyMd',
    variant: 'regular'
}

const Text: React.FC<TextProps> = ({ component = 'p', children }) => {
    return <Heading as={component.includes('body') ? "p" : component}>{children}</Heading>;
};

export default Text;