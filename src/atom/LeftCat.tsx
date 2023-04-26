import styled, { keyframes } from "styled-components";
import { namedColor } from "../components/ChatBg";

interface Props {
    namedColors: namedColor;
}

const LeftCat = ({ namedColors }: Props) => {
    return (
        <CatL>
            <EarsL darkpurple={namedColors.darkpurple} />
            <HeadL
                darkpurple={namedColors.darkpurple}
                grape={namedColors.grape}>
                <EyesL />
                <NoseL cream={namedColors.cream} pink={namedColors.pink} />
            </HeadL>
            <BodyL grape={namedColors.grape}>
                <Paw1L cream={namedColors.cream} />
                <Paw2L cream={namedColors.cream} />
            </BodyL>
            <TailL darkpurple={namedColors.darkpurple} />
            <LaptopL>
                <ScreenL
                    navy={namedColors.navy}
                    darkpurple={namedColors.darkpurple}
                />
                <KeyboardL
                    navy={namedColors.navy}
                    darkpurple={namedColors.darkpurple}
                />
            </LaptopL>
        </CatL>
    );
};

const catLeftType = keyframes`
    2%  {transform: translateY(-3.875vw)}
    6%  {transform: none}
    8%  {transform: translateY(-3.875vw)}
    10% {transform: none}
    14% {transform: translateY(-3.875vw)}
    16% {transform: none}
    18% {transform: translateY(-3.875vw)}
    20% {transform: none}
    22% {transform: translateY(-3.875vw)}
    26% {transform: none} 
`;
const catRightType = keyframes`
    6%  {transform: translateY(-3.875vw)}
    8%  {transform: none}
    10% {transform: translateY(-3.875vw)}
    12% {transform: none}
    16% {transform: translateY(-3.875vw)}
    18% {transform: none}
    20% {transform: translateY(-3.875vw)}
    22% {transform: none}
    24% {transform: translateY(-3.875vw)}
    28% {transform: none}    
`;
const eyeControl = keyframes`
    55% {transform: none}
    62% {transform: translateX(-0.8vw)}
    70% {
        transition-timing-function: ease-out;
        transform: translateX(1.2vw)}
    82% {transform: translateX(-0.8vw)}
    90% {
        transition-timing-function: ease-out;
        transform: translateX(1.2vw)}
    100%{transform: none}  
`;
const CatL = styled.div`
    height: 182px;
    width: 200px;
    position: absolute;
    top: 50%;
    right: 145px;
    transform: translate(0, -50%);
`;
const EarsL = styled.div<namedColor>`
    height: 0;
    width: 0;
    position: relative;
    left: 90px;
    border-bottom: 27px solid ${(props) => props.darkpurple};
    border-left: 10px solid transparent;
    border-right: 23px solid transparent;
    &::before {
        display: block;
        content: "";
        height: 0;
        width: 0;
        position: relative;
        left: 24px;
        border-bottom: 27px solid ${(props) => props.darkpurple};
        border-left: 10px solid transparent;
        border-right: 23px solid transparent;
    }
`;
const HeadL = styled.div<{ darkpurple: string; grape: string }>`
    height: 74px;
    width: 135px;
    position: relative;
    left: 65px;
    z-index: 2;
    box-shadow: -8px 0 0 ${(props) => props.darkpurple};
    border-radius: 37px;
    background: ${(props) => props.grape};
`;
const EyesL = styled.div`
    height: 12px;
    width: 12px;
    position: relative;
    top: 37px;
    left: 64px;
    border-radius: 100%;
    animation: 9s ${eyeControl} infinite;
    background: black;
    &::before {
        display: block;
        content: "";
        height: 12px;
        width: 12px;
        position: relative;
        left: 18px;
        border-radius: 100%;
        background: black;
    }
`;
const NoseL = styled.div<{ cream: string; pink: string }>`
    height: 22px;
    width: 22px;
    position: relative;
    top: 40px;
    left: 60px;
    border-radius: 20px;
    background: ${(props) => props.cream};
    &::before {
        display: block;
        content: "";
        height: 22px;
        width: 22px;
        position: relative;
        left: 22px;
        border-radius: 20px;
        background: ${(props) => props.cream};
    }
    &::after {
        display: block;
        content: "";
        height: 0;
        width: 0;
        position: relative;
        top: -22px;
        left: 12px;
        border-radius: 10px;
        border-top: 10px solid ${(props) => props.pink};
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }
`;
const BodyL = styled.div<{ grape: string }>`
    height: 110px;
    width: 200px;
    position: relative;
    top: -30px;
    z-index: 1;
    border-radius: 55px;
    background: ${(props) => props.grape};
`;
const Paw1L = styled.div<namedColor>`
    height: 25px;
    width: 37px;
    position: relative;
    top: 70px;
    left: 95px;
    border-radius: 12px;
    animation: 9s ${catLeftType} infinite;
    background: ${(props) => props.cream};
`;
const Paw2L = styled(Paw1L)`
    top: 45px;
    left: 142px;
    animation: 9s ${catRightType} infinite;
`;
const TailL = styled.div<namedColor>`
    height: 24px;
    width: 80px;
    position: relative;
    top: -54px;
    left: -31px;
    z-index: 0;
    border-radius: 17px 0 0 17px;
    background: ${(props) => props.darkpurple};
`;
const LaptopL = styled.div`
    position: relative;
    top: -151px;
    left: 170px;
    z-index: 2;
`;
const ScreenL = styled.div<{ navy: string; darkpurple: string }>`
    height: 85px;
    width: 130px;
    border-radius: 8px;
    transform: skew(-18deg);
    background: ${(props) => props.navy};
    &::before {
        display: block;
        content: "";
        height: 17px;
        width: 10px;
        position: relative;
        top: 38px;
        left: 56px;
        border-radius: 6px;
        background: ${(props) => props.darkpurple};
    }
    &::after {
        display: block;
        content: "";
        height: 17px;
        width: 10px;
        position: relative;
        top: 21px;
        left: 70px;
        border-radius: 6px;
        background: ${(props) => props.darkpurple};
    }
`;
const KeyboardL = styled.div<{ navy: string; darkpurple: string }>`
    height: 12px;
    width: 132px;
    position: relative;
    left: -14px;
    border-radius: 0 6px 6px 0;
    background: ${(props) => props.darkpurple};
    &::before {
        display: block;
        content: "";
        height: 12px;
        width: 72px;
        position: relative;
        left: -68px;
        border-radius: 6px;
        background: ${(props) => props.navy};
    }
`;
export default LeftCat;
