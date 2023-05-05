import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --darkpurple : #475881;
    --mint : rgb(103 159 145);
    --peach: #FFCA95;
    --grape: #7C85AB;
    --navy: #20314E;
    --pink: #FFA5C0;
    --cream: #FBF1D8;
    --orange: #FFA852;
    --darkorange: #F07E42;

}

*{
    margin:0;
    padding:0;
}



`;
const size = {
    mobileS: "375px",
    mobile: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};
export const device = {
    mobileS: `@media (max-width: ${size.mobileS})`,
    mobile: `@media (max-width: ${size.mobile})`,
    tablet: `@media (max-width: ${size.laptop})`,
    laptopL: `@media (max-width: ${size.laptopL})`,
    desktop: `@media (max-width: ${size.desktop})`,
    desktopL: `@media (max-width: ${size.desktop})`,
};

export default GlobalStyle;
