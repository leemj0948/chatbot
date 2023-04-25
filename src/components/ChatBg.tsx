import styled, { StyledComponent } from "styled-components";
interface namedColor {
    peach: "#FFCA95";
    grape: "#7C85AB";
    darkpurple: " #475881";
    navy: "#20314E";
    pink: "#FFA5C0";
    cream: " #FBF1D8";
    orange: " #FFA852";
    darkorange: " #F07E42";
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
            <Left peach={namedColors.peach} />
            <Right navy={namedColors.navy} />
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
            </CatL>
        </Body>
    );
};
const Body = styled.section`
    margin: 0;
    padding: 0;
`;
const Left = styled.div<namedColor>`
    position: absolute;
    height: 100%;
    width: 50%;
    background: ${(props) => props.peach};
`;
const Right = styled.div<namedColor>`
    position: absolute;
    left: 50%;
    height: 100%;
    width: 50%;
    background: ${(props) => props.navy};
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
    animation: 9s catRead infinite;
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
    animation: 9s catLeftType infinite;
    background: ${(props) => props.cream};
`;
const Paw2L = styled(Paw1L)`
    top: 45px;
    left: 142px;
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
const LaptopL = styled.div``;
const ScreenL = styled.div``;
const KeyboardL = styled.div``;

export default ChatBg;
