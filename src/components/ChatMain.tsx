import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import styled, { keyframes } from "styled-components";

type MessageType = {
    assistant: string;
    user: string;
};

const ChatMain = () => {
    const userInput = useRef("");
    const [chatbot, setChatbot] = useState<MessageType[]>([
        {
            assistant:
                "안녕하세요. 당신의 반려묘의 행동을 예측해서 답변해드립니다. 질문해보세요.",
            user: "",
        },
        {
            assistant: "두번째메시지",
            user: "ddddd",
        },
        {
            assistant: "세번째메시지",
            user: "좋아",
        },
        {
            assistant: "네번째메시지",
            user: "이정도로 길게 쓰면 어떻게 나올까 궁금하지 않아? 자 한번 봐라",
        },
        {
            assistant: "네번째메시지",
            user: "이정도로 길게 쓰면 어떻게 나올까 궁금하지 않아? 자 한번 봐라.이정도로 길게 쓰면 어떻게 나올까 궁금하지 않아? 자 한번 봐라이정도로 길게 쓰면 어떻게 나올까 궁금하지 않아? 자 한번 봐라이정도로 길게 쓰면 어떻게 나올까 궁금하지 않아? 자 한번 봐라이정도로 길게 쓰면 어떻게 나올까 궁금하지 않아? 자 한번 봐라이정도로 길게 쓰면 어떻게 나올까 궁금하지 않아? 자 한번 봐라",
        },
    ]);
    // const [userinput, setUserinput] = useState(userInput.current);
    const [queryKey, setQueryKey] = useState([1]);

    const callApi = async (): Promise<string | undefined> => {
        try {
            const res = await axios.post("http://localhost:3000/moviebot", {
                user: userInput.current,
            });
            return res.data.assistant;
        } catch (err) {
            console.log(err);
        }
    };
    const { isLoading, isError, data, error, refetch } = useQuery(
        queryKey,
        async () => await callApi(),
        {
            enabled: false,
            onSuccess: (data: string) => {
                setChatbot((prev) => [
                    ...prev,
                    { assistant: data, user: userInput.current },
                ]);
                setQueryKey((prev) => [...prev, prev[prev.length] + 1]);
            },
            onError: () => {
                setChatbot((prev) => [
                    ...prev,
                    {
                        assistant:
                            "에러가 발생하였습니다. 다시한번 질문해주세요.",
                        user: userInput.current,
                    },
                ]);
            },
        }
    );

    const inputHandeler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        userInput.current = value;
    };
    const onSend = async (
        e: React.MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        e.preventDefault();
        // if (userinput === "") {
        //     setUserinput(userInput.current);
        // }
        await refetch();
        userInput.current = "";
        // setUserinput("");
    };
    const isEnter = async (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            await refetch();
            userInput.current = "";
        }
    };
    console.log(chatbot);
    return (
        <MessageFrame>
            <ChatBox>
                <TopBar>
                    <Avatar>
                        <p>C</p>
                    </Avatar>
                    <Name>CatBot</Name>
                    <Icons></Icons>
                </TopBar>
            </ChatBox>
            <Middle>
                <VoldeMort>
                    {chatbot.map((message: MessageType, i: number) => {
                        return (
                            <div key={i}>
                                <Incoming>
                                    <Bubble isUser={false}>
                                        {message.assistant}
                                    </Bubble>
                                </Incoming>
                                {message.user && (
                                    <Outcoming>
                                        <Bubble isUser>{message.user}</Bubble>
                                    </Outcoming>
                                )}
                            </div>
                        );
                    })}

                    {isLoading && (
                        <Typing>
                            {/* 로딩 바 */}
                            <div className="bubble">
                                <One />
                                <Two />
                                <Three />
                            </div>
                        </Typing>
                    )}
                </VoldeMort>
            </Middle>
            <BottomBar>
                <Chat>
                    <input
                        onChange={inputHandeler}
                        onKeyUp={isEnter}
                        placeholder="여기에 입력해라 냥"
                    />
                    <button onClick={onSend}>전송</button>
                </Chat>
            </BottomBar>
        </MessageFrame>
    );
};
// const spin = keyframes`
//   to {
//     transform: rotate(360deg);
//   }
// `;
const bounce = keyframes`
30% { transform: translateY(-4px); }
60% { transform: translateY(0px); }
80% { transform: translateY(4px); }
100% { transform: translateY(0px); opacity: 0.5; 
`;

const MessageFrame = styled.section`
    position: absolute;
    width: 40%;
    height: 100%;
    left: 30%;
}
`;
const ChatBox = styled.div`
    position: absolute;
    border: 6px solid rgb(255, 165, 192);
    height: 99%;
    width: 100%;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(#777777, 0.5);
`;
const TopBar = styled.div`
    width: 100%;
    height: 60px;
    background: #f9fbff;
    border-radius: 10px 10px 0 0;
`;
const Avatar = styled.div`
    width: 35px;
    height: 35px;
    background: linear-gradient(to bottom left, #79c7c5 20%, #a1e2d9 100%);
    border-radius: 50%;
    position: absolute;
    top: 11px;
    left: 15px;
    p {
        color: #f9fbff;
        margin: 7px 12px;
    }
`;
const Name = styled.div`
    position: absolute;
    top: 22px;
    text-transform: uppercase;
    color: #777777;
    font-size: 0.8em;
    letter-spacing: 2px;
    font-weight: 500;
    left: 60px;
`;
const Icons = styled.div`
    position: absolute;
    color: #a1e2d9;
    padding: 10px;
    top: 5px;
    right: 21px;
    cursor: pointer;
`;
const Middle = styled.div`
    position: absolute;
    background: rgb(139 197 196);
    border: 2px solid rgb(255, 165, 192);
    width: 100%;
    opacity: 0.85;
    top: 60px;
    height: 89%;
`;
const VoldeMort = styled.div`
    width: 100%;
`;
const Incoming = styled.div`
    display: block;
    width: 50%;

    padding: 10px 25px 0 20px;
`;
const Bubble = styled.div<{ isUser: Boolean }>`
    position: relative;
    display: inline-block;
    margin-bottom: 5px;
    color: ${(props) => (props.isUser ? "rgb(32, 49, 78)" : "#f9fbff")};
    font-size: 0.7em;
    padding: 10px 10px 10px 12px;
    border-radius: 20px;
    background-color: ${(props) => (props.isUser ? "beige" : "gray")};
    opacity: 80%;
    text-align: ${(props) => (props.isUser ? "left" : "none")};
`;
const Outcoming = styled.div`
    display: block;
    text-align: right;
    padding: 10px 20px 0 15px;
`;
const Typing = styled.div`
    position: absolute;
    top: 85%;
    left: 20px;
    .bubble {
        background: #777777;
        opacity: 45%;
        padding: 8px 27px 13px;
        border-radius: 18px;
    }
`;
const Ellipsis = styled.div`
    width: 1vw;
    height: 1vw;
    display: inline-block;
    background: black;
    opacity: 25%;
    border-radius: 50%;
    animation: ${bounce} 1.3s linear infinite;
`;
const One = styled(Ellipsis)`
    margin-right: 1vw;
    animation-delay: 0.6s;
`;
const Two = styled(Ellipsis)`
    margin-right: 1vw;
    animation-delay: 0.5s;
`;
const Three = styled(Ellipsis)`
    animation-delay: 0.8s;
`;
const BottomBar = styled.div`
    position: absolute;
    width: 100%;
    height: 55px;
    bottom: 0;
    background: #f9fbff;
    border-radius: 0 0 10px 10px;
    border: 2px solid rgb(255, 165, 192);
`;
const Chat = styled.div`
    input {
        padding: 7px;
        width: 74%;
        left: 5%;
        position: absolute;
        border: 0;
        top: 13px;
        background: #f9fbff;
        color: #79c7c5;
    }
    input::placeholder {
        color: rgb(32, 49, 78);
    }

    input:focus {
        color: #777777;
        outline: 0;
    }
    button {
        position: absolute;
        border: 0;
        font-size: 1em;
        color: rgb(32, 49, 78);
        top: 19px;
        opacity: 0.8;
        right: 17px;
        cursor: pointer;
        outline: 0;
        whith: 60vw;
        height: 50%;
        &:hover {
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
            color: rgb(32, 49, 78);
        }
    }
`;

const UserInput = styled.input``;
const SendBtn = styled.button``;
// const Loading = styled.div`
//     display: inline-block;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     border: 2px solid #ccc;
//     border-top-color: #333;
//     animation: ${spin} 0.8s ease-in-out infinite;
// `;

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
interface DotProps {
    size?: string;
}

const Dot = styled.div<DotProps>`
    display: inline-block;
    position: relative;
    width: ${({ size }) => size ?? "1rem"};
    height: ${({ size }) => size ?? "1rem"};

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: ${({ size }) => (size ? `${parseInt(size) / 10}px` : "0.1rem")}
            solid #ccc;
        border-color: #ccc transparent transparent transparent;
        animation: ${loading} 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }
    &::after {
        content: "";
        display: block;
        position: absolute;
        top: ${({ size }) => (size ? `calc(${size} / 10 * -1)` : "-0.5rem")};
        left: ${({ size }) => (size ? `calc(${size} / 10 * -1)` : "-0.5rem")};
        width: ${({ size }) => size ?? "1rem"};
        height: ${({ size }) => size ?? "1rem"};
        border-radius: 50%;
        background-color: #fff;
        transform: rotate(45deg);
    }
`;

export default ChatMain;
