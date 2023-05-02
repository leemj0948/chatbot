import styled, { keyframes } from "styled-components";
import LeftCat from "../atom/LeftCat";
import RightCat from "../atom/RightCat";
import ChatMain from "./ChatMain";
import { useEffect, useState } from "react";
interface styleProps {
    isAnimationComplete: boolean;
}
const ChatBg = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    useEffect(() => {
        onAnimationEnd();
    }, []);
    const onAnimationEnd = () => {
        if (!isMobile) {
            return;
        }
        setTimeout(() => {
            setIsAnimationComplete(true);
        }, 2000);
    };

    return (
        <Body>
            {!isAnimationComplete && (
                <Left isAnimationComplete={isAnimationComplete}>
                    <LeftCat />
                </Left>
            )}
            <ChatMain />
            {!isAnimationComplete && (
                <Right isAnimationComplete={isAnimationComplete}>
                    <RightCat />
                </Right>
            )}
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
    width: 100%;
    height: 100%;
`;

const Left = styled.div<styleProps>`
    position: absolute;
    height: 100%;
    width: 50%;
    background: var(--peach);
    animation: ${slideLeft} 5s ease-in-out;
    animation-fill-mode: forwards;
    z-index: 2;
    transition: opacity 0.5s ease-in-out;
    opacity: ${({ isAnimationComplete }) => (isAnimationComplete ? 0 : 1)};
`;
const Right = styled.div<styleProps>`
    position: absolute;
    left: 50%;
    height: 100%;
    width: 50%;
    background: var(--navy);
    animation: ${slideRight} 5s ease-in-out;
    animation-fill-mode: forwards;
    z-index: 2;
    transition: opacity 0.5s ease-in-out;
    opacity: ${({ isAnimationComplete }) => (isAnimationComplete ? 0 : 1)};
`;
export default ChatBg;
