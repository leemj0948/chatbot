import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled, { keyframes } from "styled-components";

type MessageType = {
    assistant: string;
    user: string;
};

const ChatMain = () => {
    const [chatbot, setChatbot] = useState<MessageType[]>([
        {
            assistant:
                "안녕하세요. 좋아하는 영화와 성향을 말해주시면 영화를 추천해드릴게요.",
            user: "",
        },
    ]);
    const [userinput, setUserinput] = useState<string>("");
    const [queryKey, setQueryKey] = useState([1]);

    const callApi = async (): Promise<string | undefined> => {
        try {
            const res = await axios.post("http://localhost:3000/moviebot", {
                user: userinput,
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
                    { assistant: data, user: userinput },
                ]);
                setQueryKey((prev) => [...prev, prev[prev.length] + 1]);
            },
            onError: () => {
                setChatbot((prev) => [
                    ...prev,
                    {
                        assistant:
                            "에러가 발생하였습니다. 다시한번 질문해주세요.",
                        user: userinput,
                    },
                ]);
            },
        }
    );
    const inputHandeler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setUserinput(value);
    };
    const onSend = async (
        e: React.MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        e.preventDefault();
        await refetch();

        setUserinput("");
    };

    return (
        <div>
            <div>
                {chatbot.map((message: MessageType, i: number) => {
                    return (
                        <div key={i}>
                            {message.user ? <p>{message.user}</p> : <p></p>}
                            <p>{message.assistant}</p>
                        </div>
                    );
                })}
            </div>
            <div>
                <UserInput onChange={inputHandeler} value={userinput} />
                <span>
                    {!isLoading ? (
                        <SendBtn onClick={onSend}>보내기</SendBtn>
                    ) : (
                        <>
                            <Dot />
                            <p>생각하는중 ...</p>
                        </>
                    )}
                </span>
            </div>
        </div>
    );
};
// const spin = keyframes`
//   to {
//     transform: rotate(360deg);
//   }
// `;

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
