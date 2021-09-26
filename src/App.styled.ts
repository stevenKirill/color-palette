import styled from "styled-components";
import { IColor } from "./interfaces/colors";

interface IWrapper {
    bg: IColor;
    fontSize: string;
}

export const Wrapper = styled.div<IWrapper>`
    background-color: ${({ bg }) => bg};
    width: 100vw;
    height: 100vh;
    font-size: ${({ fontSize }) => fontSize};
    transition: background 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    h1 {
        color: white;
        margin-bottom: 10px;
        margin-top: 0;
    }
`;

export const ColorsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;