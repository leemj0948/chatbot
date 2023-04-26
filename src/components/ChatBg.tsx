import styled, { keyframes } from "styled-components";
import LeftCat from "../atom/LeftCat";
import RightCat from "../atom/RightCat";
import ChatMain from "./ChatMain";
export interface namedColor {
    peach: string;
    grape: string;
    darkpurple: string;
    navy: string;
    pink: string;
    cream: string;
    orange: string;
    darkorange: string;
    [color: string]: string;
}
const ChatBg = () => {
    const namedColors: namedColor = {
        peach: "#FFCA95",
        grape: "#7C85AB",
        darkpurple: " #475881",
        navy: "#20314E",
        pink: "#FFA5C0",
        cream: " #FBF1D8",
        orange: " #FFA852",
        darkorange: " #F07E42",
    };

    return (
        <Body>
            <Left peach={namedColors.peach}>
                <LeftCat namedColors={namedColors} />
            </Left>
            <ChatMain />
            <Right navy={namedColors.navy}>
                <RightCat namedColors={namedColors} />
            </Right>
        </Body>
    );
};
const slideLeft = keyframes`
from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-40%);
  }
`;
const slideRight = keyframes`
from {
    transform: translateX(0);
  }

  to {
    transform: translateX(40%);
  }
`;
const Body = styled.section`
    margin: 0;
    padding: 0;
`;
const Left = styled.div<{ peach: string }>`
    position: absolute;
    height: 100%;
    width: 50%;
    background: ${(props) => props.peach};
    animation: ${slideLeft} 5s ease-in-out;
    animation-fill-mode: forwards;
    z-index: 2;
`;
const Right = styled.div<{ navy: string }>`
    position: absolute;
    left: 50%;
    height: 100%;
    width: 50%;
    background: ${(props) => props.navy};
    animation: ${slideRight} 5s ease-in-out;
    animation-fill-mode: forwards;
    z-index: 2;
`;
export default ChatBg;
