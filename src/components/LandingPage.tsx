import { useNavigate } from "react-router";
import { device } from "../GlobalStyle";
import styled from "styled-components";
import cat from "../assets/img/cat.jpeg";
import background from "../assets/img/background.jpeg";
import background2 from "../assets/img/background2.jpeg";
import KaKaoAd from "../atom/KakaoAd";

const LandingPage = () => {
    const randomBackgroundImg = Math.random() < 0.5 ? background : background2;
    const navigate = useNavigate();
    const goMain = () => {
        navigate("/catbot");
    };

    return (
        <Container catBg={randomBackgroundImg}>
            <BackgroundOverlay />
            <CatImage src={cat} alt="catBot" />
            <TitleWrapper>
                <Title>
                    나는 고양이 대변가 catBot이다 냥.🐱
                    <br /> 너의 고양이의 생각과 행동을 분석해준다 냥~
                </Title>
            </TitleWrapper>
            <Button onClick={goMain}>시작하기</Button>
            <div className="kakaoAds"></div>
            <Ads>
                <KaKaoAd
                    width="320"
                    height="100"
                    unit="DAN-2hoLXp9IAnJEIG5B"
                    disabled={false}
                />
            </Ads>
        </Container>
    );
};
const Container = styled.div<{ catBg: string }>`
    ${device.laptopL} {
        justify-content: space-evenly;
    }
    background-image: ${({ catBg }) => `url(${catBg})`};
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
const BackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
`;
const TitleWrapper = styled.div`
    background-color: var(--mint);
    padding: 20px;
    border-radius: 10px;
    z-index: 1;
`;
const CatImage = styled.img`
    ${device.tablet} {
        width: 50vw;
        height: 50vw;
    }

    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: rgb(20 4 5) 10px 9px 10px;
    z-index: 1;
`;

const Title = styled.h1`
    ${device.tablet} {
        margin: 0;
        font-size: 4.5vw;
    }

    font-size: 24px;
    color: var(--pink);
    text-align: center;
    margin-top: 20px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

const Button = styled.button`
    ${device.tablet} {
        font-size: 5.5vw;
    }

    background-color: #ffc107;
    color: deeppink;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    margin-bottom: 60px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 1;
    &:hover {
        background-color: #ffa000;
    }
`;
const Ads = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 100px;
    max-width: 320px;
`;
export default LandingPage;
