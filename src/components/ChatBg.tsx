import styled, { keyframes } from "styled-components";
import LeftCat from "../atom/LeftCat";
import RightCat from "../atom/RightCat";
import ChatMain from "./ChatMain";

const ChatBg = () => {
    return (
        <Body>
            <Left>
                <LeftCat />
            </Left>
            <ChatMain />
            <Right>
                <RightCat />
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
const Left = styled.div`
    position: absolute;
    height: 100%;
    width: 50%;
    background: var(--peach);
    animation: ${slideLeft} 5s ease-in-out;
    animation-fill-mode: forwards;
    z-index: 2;
`;
const Right = styled.div`
    position: absolute;
    left: 50%;
    height: 100%;
    width: 50%;
    background: var(--navy);
    animation: ${slideRight} 5s ease-in-out;
    animation-fill-mode: forwards;
    z-index: 2;
`;
export default ChatBg;
