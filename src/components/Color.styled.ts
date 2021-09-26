import styled from "styled-components";

interface IClorBlock {
    bg: string;
};

export const ColorBlock = styled.div<IClorBlock>`
    background-color: ${({ bg }) => bg};
    padding: 10px;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    margin-top: 10px;
    border: 1px solid white;
    box-shadow: '0 0 5px #000';
    &:nth-child(1) {
        margin-left: 15px;
    }
    &:nth-child(5n) {
        margin-left: 15px;
    }
    span {
        text-align: center;
        font-size: 17px;
        cursor: pointer;
    }
`;