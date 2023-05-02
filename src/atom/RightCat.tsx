import styled, { keyframes } from "styled-components";

interface Props {
    namedColors?: string;
}

const RightCat = ({ namedColors }: Props) => {
    return (
        <Cat>
            <Ears />
            <Head>
                <Eyes />
                <Nose />
            </Head>
            <Body>
                <Paw1 />
                <Paw2 />
            </Body>
            <Tail />
            <Laptop>
                <Screen />
                <Keyboard />
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
const Ears = styled.div`
    height: 0;
    width: 0;
    position: relative;
    left: 30px;
    border-bottom: 27px solid var(--darkorange);
    border-left: 23px solid transparent;
    border-right: 10px solid transparent;
    &::before {
        display: block;
        content: "";
        height: 0;
        width: 0;
        position: relative;
        left: 33px;
        border-bottom: 27px solid var(--darkorange);
        border-left: 10px solid transparent;
        border-right: 23px solid transparent;
    }
`;
const Head = styled.div`
    height: 74px;
    width: 140px;
    position: relative;
    z-index: 2;
    box-shadow: 8px 0 0 var(--darkorange);
    border-radius: 35px;
    background: var(--orange);
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
const Nose = styled.div`
    height: 30px;
    width: 48px;
    position: relative;
    top: 40px;
    left: 37px;
    border-radius: 20px;
    background: var(--cream);
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
const Body = styled.div`
    height: 110px;
    width: 200px;
    position: relative;
    top: -30px;
    z-index: 1;
    border-radius: 55px;
    background: var(--orange);
`;
const Paw1 = styled.div`
    height: 25px;
    width: 37px;
    position: relative;
    top: 70px;
    left: 15px;
    border-radius: 12px;
    animation: 9s ${LeftType} infinite;
    background: var(--cream);
`;
const Paw2 = styled(Paw1)`
    top: 45px;
    left: 60px;
    animation: 9s ${RightType} infinite;
`;
const Tail = styled.div`
    height: 34px;
    width: 70px;
    position: relative;
    top: -64px;
    left: 150px;
    z-index: 0;
    border-radius: 0 17px 17px 0;
    background: var(--darkorange);
`;
const Laptop = styled.div`
    position: relative;
    top: -161px;
    left: -103px;
    z-index: 2;
`;
const Screen = styled.div`
    height: 85px;
    width: 130px;
    border-radius: 8px;
    transform: skew(18deg);
    background: var(--peach);
    &::before {
        display: block;
        content: "";
        height: 17px;
        width: 10px;
        position: relative;
        top: 38px;
        left: 50px;
        border-radius: 6px;
        background: var(--darkorange);
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
        background: var(--darkorange);
    }
`;
const Keyboard = styled.div`
    height: 12px;
    width: 132px;
    position: relative;
    left: 14px;
    border-radius: 6px 0 0 6px;
    background: var(--darkorange);
    &::before {
        display: block;
        content: "";
        height: 12px;
        width: 72px;
        position: relative;
        left: 128px;
        border-radius: 6px;
        background: var(--peach);
    }
`;
export default RightCat;
