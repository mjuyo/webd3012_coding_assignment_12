import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<Partial<LabelProps>>`
    background-color: ${(props) => (props.disabled ? '#ccc' : '#1ea7fd')};
    color: ${props => props.color || 'white'};
    font-size: ${props => props.fontSize || '18px'};
    padding: 10px 20px;
    border-radius: 5px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

const Label: React.FC<LabelProps> = ({ text, color, disabled, fontSize }) => (
    <StyledLabel color={color} disabled={disabled} fontSize={fontSize}>
        {text}
    </StyledLabel>
);

export default Label;