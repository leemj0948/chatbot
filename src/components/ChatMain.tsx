import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
    //보내기 클릭하는 순간 채팅창 내용 비우고 채팅 리스트 모으고, call api 호출 하는 함수

    const inputHandeler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setUserinput(value);
    };
    const onSend = async (
        e: React.MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        e.preventDefault();

        const res = await callApi();
        if (res) {
            setChatbot((prev) => [
                ...prev,
                { assistant: res, user: userinput },
            ]);
        } else {
            setChatbot((prev) => [
                ...prev,
                {
                    assistant: "에러가 발생하였습니다. 다시한번 질문해주세요.",
                    user: userinput,
                },
            ]);
        }
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
                    <SendBtn onClick={onSend}>보내기</SendBtn>
                </span>
            </div>
        </div>
    );
};

const UserInput = styled.input``;
const SendBtn = styled.button``;
export default ChatMain;
