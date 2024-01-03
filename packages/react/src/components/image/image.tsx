import React from 'react';
import styled from 'styled-components';
import { Shapes, Elevations, Borders, Color } from '@cromaui/foundations'

type StyledImageProps = {
    width: number, /* modifies element width */
    height: number, /* modifies element height */
    image: string, /* parameter to add the image to display */
    backgroundImage?: boolean, /* activate brackground image mode */
    children?: Object, 
    alt: string, /* SEO tool defines a parameter in relation to the element */
    title: string, /* usability tool defines a title to read or display */
    circle?: boolean, /* activate avatar or circular mode */
    hover?: boolean, /* activate hover mode for images */
    fullWidth?: boolean,
}

const StyledImage = styled.div<StyledImageProps>`
    width: ${(props) => props.fullWidth ? '100%' : (props) => props.width}px;
    height: ${(props) => props.height ? props.height : null}px;
    background-image: url(${(props) => props.image ? props.image : ''});
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
    width,
    height,
    image = "https://media.licdn.com/dms/image/C4E0BAQEdEHYXLJwxlQ/company-logo_200_200/0/1644521494829/garajedeideas_americas_logo?e=2147483647&v=beta&t=R4jQRSH2vlsHMNhBC_ZLwLgpmCvtHI9F4KBAOMhMNWE",
    backgroundImage = false,
    circle = false,
    alt = "",
    title = "",
    hover = false,
    fullWidth = false,
    children
}) => {
    
  return (
    backgroundImage ? 
        <StyledImage 
            circle={circle} 
            image={image}
            backgroundImage={backgroundImage} 
            width={width} 
            height={height} 
            hover={hover}
            alt={alt}
            title={title}
            fullWidth={fullWidth}
        >
            {children}
        </StyledImage>
    :
    <img 
        src={image || 'https://media.licdn.com/dms/image/C4E0BAQEdEHYXLJwxlQ/company-logo_200_200/0/1644521494829/garajedeideas_americas_logo?e=2147483647&v=beta&t=R4jQRSH2vlsHMNhBC_ZLwLgpmCvtHI9F4KBAOMhMNWE'} 
        height={height} 
        alt={alt}
        title={title}
        width={fullWidth ? '100%' : width} 
    />
  )
};

export default Image;
