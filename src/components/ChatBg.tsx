import styled from "styled-components";
import LeftCat from "../atom/LeftCat";
import RightCat from "../atom/RightCat";
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
            <Right navy={namedColors.navy}>
                <RightCat namedColors={namedColors} />
            </Right>
        </Body>
    );
};
const Body = styled.section`
    margin: 0;
    padding: 0;
`;
const Left = styled.div<{ peach: string }>`
    position: absolute;
    height: 100%;
    width: 50%;
    background: ${(props) => props.peach};
`;
const Right = styled.div<{ navy: string }>`
    position: absolute;
    left: 50%;
    height: 100%;
    width: 50%;
    background: ${(props) => props.navy};
`;
export default ChatBg;
