import React, { useState } from 'react';
import styled from 'styled-components';
import { Elevations, Color, Spacings, Typography, Shapes, Borders } from '@cromaui/foundations'

type StyledTextAreaProps = {
    text?: string,
    title?: string,
    label?: string,
    error?: boolean,
    disabled?: boolean,
    errorMessage?: string,
    maxLength?: number
}

const StyledContent = styled.div<StyledTextAreaProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: ${Typography.body.sm.regular.fontFamily};
    font-weight: ${Typography.body.sm.semibold.fontWeight};

    & p {
        margin-bottom: ${Spacings.space8};
        font-size:${Typography.body.sm.semibold.fontSize};
    }

    & label{
        display: flex;
        justify-content: space-between;
        color: ${(props) => props.error ? Color.Error.main : Color.Neutral[800] && props.disabled ? Color.Neutral[400] : Color.Neutral[800]};
        margin-top: ${Spacings.space8};
        font-size:${Typography.caption.regular.fontSize};
        font-weight: ${Typography.caption.regular.fontWeight};
        line-height: ${Typography.caption.regular.lineHeight};

        & i {
            margin-right: ${Spacings.space8}
        }
    }
`
const StyledTextArea = styled.textarea<StyledTextAreaProps>`
    width: 100%;
    min-height: 120px;
    background-color: ${Color.Neutral[50]};
    color: ${(props) => (props.text ? Color.Neutral[800] : Color.Neutral[500])};
    padding: ${Spacings.space12};
    border-radius:${Shapes.sm};
    border: ${(props) => (props.error ? Borders.br2 + Color.Error.main : Borders.br1 + Color.Neutral[400])};
    font-weight: ${Typography.body.sm.regular.fontWeight};
    font-size:${Typography.body.sm.regular.fontSize};
    box-sizing: border-box;

    &:hover {
        border: ${Borders.br1} ${Color.Neutral[800]};
        box-shadow: ${Elevations.level2}
    }

    &:focus {
        border: ${Borders.br1} solid ${Color.Blue.main};
        color: ${Color.Neutral[700]};
        box-shadow: ${Elevations.level2}
    }

    &:disabled {
        border: ${Borders.br1} solid ${Color.Neutral[400]};
        background-color: ${Color.Neutral[200]};
        cursor: no-drop;

        &:hover {
            box-shadow: none;
            border: ${Borders.br1} ${Color.Neutral[400]};
        }
    }
`

const TextArea: React.FC<StyledTextAreaProps> = ({
    text = 'Hola',
    title = null,
    errorMessage = "error de ejemplo" ,
    label = "Texto de ayuda.",
    error = false,
    disabled = false,
    maxLength = 100
}) => {

    const [textValue, setTextValue] = useState<string>(text);
    const [caracters, setText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(event.target.value);
        const newText = event.target.value;
    
        if (newText.length <= maxLength) {
          setText(newText);
        }
    };
    
  return (
    <StyledContent error={error} disabled={disabled}>
        {title && <p>{title}</p>}
        <StyledTextArea 
            maxLength={100}
            value={textValue}
            onChange={handleInputChange}
            placeholder={text}
            disabled={disabled}
            error={error}
        >
            {text}
        </StyledTextArea>
        {label && 
            <label>
                <div>
                    {error && <i>!</i>}
                    <span>{errorMessage}</span>
                </div>
                {`${maxLength - caracters.length}/${maxLength}`}
            </label>
        }
    </StyledContent>
  )
};

export default TextArea;