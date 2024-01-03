import React from 'react';
import styled from 'styled-components';
import { Shapes, Elevations, Borders, Color } from '@cromaui/foundations'

type StyledImageProps = {
    width?: number, /* modifies element width */
    height?: number, /* modifies element height */
    image?: string, /* parameter to add the image to display */
    imgBg?: boolean, /* activate brackground image mode */
    children: Object, 
    alt?: string, /* SEO tool defines a parameter in relation to the element */
    title?: string, /* usability tool defines a title to read or display */
    circle?: boolean, /* activate avatar or circular mode */
    hover?: boolean, /* activate hover mode for images */
}


const StyledImage = styled.div<StyledImageProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-image: url(${(props) => props.image ? props.image : 'data:image/png;base64,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'});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: ${(props) => props.circle ? Shapes.full : 0};
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transition: 0.5s;
        box-shadow: ${(props) => props.hover ? Elevations.level3 : 'none'}
    }

    &:focus {
        transition: 0.5s;
        border: ${Borders.br3} ${Color.Blue.main};
        box-shadow: ${Elevations.level3};
    }
`

const Image: React.FC<StyledImageProps> = ({
    width = 100,
    height = 100,
    image = "",
    imgBg = false,
    circle = false,
    alt = "",
    title = "",
    hover = false,
    children
}) => {
    
  return (
    imgBg ? 
        <StyledImage 
            circle={circle} 
            imgBg={imgBg} 
            width={width} 
            height={height} 
            hover={hover}
        >
            {children}
        </StyledImage>
    :
    <img 
        src={image || 'https://media.licdn.com/dms/image/C4E0BAQEdEHYXLJwxlQ/company-logo_200_200/0/1644521494829/garajedeideas_americas_logo?e=2147483647&v=beta&t=R4jQRSH2vlsHMNhBC_ZLwLgpmCvtHI9F4KBAOMhMNWE'} 
        height={height} 
        alt={alt}
        title={title}
        width={width} 
    />
  )
};

export default Image;