import React from 'react';
import { IColor } from '../interfaces/colors';
import { ColorBlock } from './Color.styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface IProps {
    color: IColor
    pickColor: (currentColor: IColor) => void;
};

const Color: React.FC<IProps> = ({ color, pickColor }) => {
    console.log(color)
    return (
        <ColorBlock bg={color}>
            <CopyToClipboard text={`${color}`}> 
                <span onClick={() => pickColor(color)}>{color}</span>
            </CopyToClipboard>
        </ColorBlock>
    )
}

export default Color
