import { useNavigate } from "react-router";
import { device } from "../GlobalStyle";
import styled from "styled-components";
import cat from "../assets/img/cat.jpeg";
import background from "../assets/img/background.jpeg";
import background2 from "../assets/img/background2.jpeg";
import KaKaoAd from "../atom/KakaoAd";
import { useRef, useState } from "react";
import React from "react";

const LandingPage = () => {
    const randomBackgroundImg = Math.random() < 0.5 ? background : background2;
    const navigate = useNavigate();
    const goMain = () => {
        navigate("/catbot", { state: { hasCat: catValue.current } });
    };
    let catValue = useRef("yes");
    const getValue = (value: string): void => {
        catValue.current = value;
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
            <RadioCat getValue={getValue} />
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

const RadioCat: React.FC<{ getValue: (value: string) => void }> = React.memo(
    ({ getValue }) => {
        const [hasCat, setHasCat] = useState({ trigger: true, value: "yes" });
        const catValue = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            setHasCat({ value: value, trigger: value == "yes" });
            getValue(value);
        };
        return (
            <CatRadio>
                <h2>잠깐 냥, 너는 반려묘가 있냥? 😼</h2>

                <input
                    type="radio"
                    name="hasCat"
                    value="yes"
                    checked={hasCat.trigger}
                    onChange={catValue}
                    id="select"
                />
                <label htmlFor="select">물론, 고양이를 키우고있지!!</label>

                <input
                    type="radio"
                    name="hasCat"
                    value="no"
                    checked={!hasCat.trigger}
                    onChange={catValue}
                    id="select2"
                />
                <label htmlFor="select2">
                    아니, 고양이는 없지만 궁금한게 있어.
                </label>
            </CatRadio>
        );
    }
);

const CatRadio = styled.div`
    ${device.laptopL} {
        margin-top: 1.5rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    font-family: "Noto Sans KR", sans-serif;
    background-color: rgb(235 201 134);
    color: #333333;
    font-weight: bold;
    padding: 2.5rem;
    border-radius: 10px;
    font-size: 1rem;
    z-index: 1;
    h2 {
        margin: 0;
    }
    label {
        margin: 1rem;
        border-radius: 25px;
        padding-top: 1rem;
    }
    input[type="radio"] {
        display: none;
    }
    input[type="radio"] + label {
        display: inline-block;
        cursor: pointer;
        height: 3rem;
        width: 100%;
        border: 1px solid #333;
        line-height: 24px;
        text-align: center;
        font-weight: bold;
        font-size: 13px;
    }
    input[type="radio"] + label {
        background-color: #fff;
        color: ;
        border: none;
    }
    input[type="radio"]:checked + label {
        background-color: #333;
        color: yellow;
        font-size: 15px;
        width: 110%;
        height: 3.5rem;
        &:before {
            content: "✔️ ";
            color: red;
            background: red;
            margin-right: 1vw;
        }
    }
`;
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
const CatImage = styled.img`
    ${device.tablet} {
        margin-top: 2rem;
        width: 15rem;
        height: 25rem;
    }

    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: rgb(20 4 5) 10px 9px 10px;
    z-index: 1;
`;
const TitleWrapper = styled.div`
    ${device.tablet} {
        margin-top: 1.5rem;
        padding: 1rem;
    }
    background-color: var(--mint);
    padding: 20px;
    border-radius: 10px;
    z-index: 1;
`;

const Title = styled.h1`
    ${device.tablet} {
        margin: 0;
        font-size: 1.5rem;
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
        font-size: 2rem;
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
