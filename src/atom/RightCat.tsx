import styled, { keyframes } from "styled-components";
import { namedColor } from "../components/ChatBg";

interface Props {
    namedColors: namedColor;
}

const RightCat = ({ namedColors }: Props) => {
    return (
        <Cat>
            <Ears darkorange={namedColors.darkorange} />
            <Head
                darkorange={namedColors.darkorange}
                orange={namedColors.orange}>
                <Eyes />
                <Nose cream={namedColors.cream} />
            </Head>
            <Body orange={namedColors.orange}>
                <Paw1 cream={namedColors.cream} />
                <Paw2 cream={namedColors.cream} />
            </Body>
            <Tail darkorange={namedColors.darkorange} />
            <Laptop>
                <Screen
                    darkorange={namedColors.darkorange}
                    peach={namedColors.peach}
                />
                <Keyboard
                    darkorange={namedColors.darkorange}
                    peach={namedColors.peach}
                />
            </Laptop>
        </Cat>
    );
};
const LeftType = keyframes`
    50% {transform: none}
    52% {transform: translateY(-8px)}
    56% {transform: none}
    58% {transform: translateY(-8px)}
    60% {transform: none}
    64% {transform: translateY(-8px)}
    66% {transform: none}
    68% {transform: translateY(-8px)}
    70% {transform: none}
    72% {transform: translateY(-8px)}
    76% {transform: none}  
`;
const RightType = keyframes`
    54% {transform: none}
    56% {transform: translateY(-8px)}
    58% {transform: none}
    60% {transform: translateY(-8px)}
    62% {transform: none}
    66% {transform: translateY(-8px)}
    68% {transform: none}
    70% {transform: translateY(-8px)}
    72% {transform: none}
    74% {transform: translateY(-8px)}
    78% {transform: none} 
`;
const eyesMove = keyframes`
    5%  {transform: none}
    17% {
    transition-timing-function: ease-out;
    transform: translateX(-5px)}
    25% {transform: none}
    37% {
    transition-timing-function: ease-out;
    transform: translateX(-5px)}
    45% {transform: none}

`;
const Cat = styled.section`
    height: 182px;
    position: absolute;
    top: 50%;
    left: 145px;
    transform: translate(0, -50%);
`;
const Ears = styled.div<namedColor>`
    height: 0;
    width: 0;
    position: relative;
    left: 30px;
    border-bottom: 27px solid ${(props) => props.darkorange};
    border-left: 23px solid transparent;
    border-right: 10px solid transparent;
    &::before {
        display: block;
        content: "";
        height: 0;
        width: 0;
        position: relative;
        left: 33px;
        border-bottom: 27px solid ${(props) => props.darkorange};
        border-left: 10px solid transparent;
        border-right: 23px solid transparent;
    }
`;
const Head = styled.div<{ darkorange: string; orange: string }>`
    height: 74px;
    width: 140px;
    position: relative;
    z-index: 2;
    box-shadow: 8px 0 0 ${(props) => props.darkorange};
    border-radius: 35px;
    background: ${(props) => props.orange};
`;
const Eyes = styled.div`
    height: 12px;
    width: 12px;
    position: relative;
    top: 37px;
    left: 50px;
    border-radius: 100%;
    animation: 9s ${eyesMove} infinite;
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
const Nose = styled.div<namedColor>`
    height: 30px;
    width: 48px;
    position: relative;
    top: 40px;
    left: 37px;
    border-radius: 20px;
    background: ${(props) => props.cream};
    &::before {
        display: block;
        content: "";
        height: 0;
        width: 0;
        position: relative;
        top: 3px;
        left: 9px;
        border-radius: 15px;
        border-top: 12px solid black;
        border-left: 12px solid transparent;
        border-right: 10px solid transparent;
    }
`;
const Body = styled.div<{ orange: string }>`
    height: 110px;
    width: 200px;
    position: relative;
    top: -30px;
    z-index: 1;
    border-radius: 55px;
    background: ${(props) => props.orange};
`;
const Paw1 = styled.div<namedColor>`
    height: 25px;
    width: 37px;
    position: relative;
    top: 70px;
    left: 15px;
    border-radius: 12px;
    animation: 9s ${LeftType} infinite;
    background: ${(props) => props.cream};
`;
const Paw2 = styled(Paw1)`
    top: 45px;
    left: 60px;
    animation: 9s ${RightType} infinite;
`;
const Tail = styled.div<namedColor>`
    height: 34px;
    width: 70px;
    position: relative;
    top: -64px;
    left: 150px;
    z-index: 0;
    border-radius: 0 17px 17px 0;
    background: ${(props) => props.darkorange};
`;
const Laptop = styled.div`
    position: relative;
    top: -161px;
    left: -103px;
    z-index: 2;
`;
const Screen = styled.div<{ peach: string; darkorange: string }>`
    height: 85px;
    width: 130px;
    border-radius: 8px;
    transform: skew(18deg);
    background: ${(props) => props.peach};
    &::before {
        display: block;
        content: "";
        height: 17px;
        width: 10px;
        position: relative;
        top: 38px;
        left: 50px;
        border-radius: 6px;
        background: ${(props) => props.darkorange};
    }
    &::after {
        display: block;
        content: "";
        height: 17px;
        width: 10px;
        position: relative;
        top: 21px;
        left: 64px;
        border-radius: 6px;
        background: ${(props) => props.darkorange};
    }
`;
const Keyboard = styled.div<{ peach: string; darkorange: string }>`
    height: 12px;
    width: 132px;
    position: relative;
    left: 14px;
    border-radius: 6px 0 0 6px;
    background: ${(props) => props.darkorange};
    &::before {
        display: block;
        content: "";
        height: 12px;
        width: 72px;
        position: relative;
        left: 128px;
        border-radius: 6px;
        background: ${(props) => props.peach};
    }
`;
export default RightCat;
