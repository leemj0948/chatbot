import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ChatMain = () => {
    const [chatbot, setChatbot] = useState<string>("");
    const [userinput, setUserinput] = useState<string>("");
    const callApi = async () => {
        try {
            const res = await axios.post("http://localhost:3000/moviebot", {
                user: userinput,
            });
            setChatbot(res.data.assistant);
        } catch (err) {
            console.log(err);
        }
    };

    const inputHandeler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUserinput(value);
    };

    return (
        <div>
            <div>
                <UserInput onChange={inputHandeler} value={userinput} />
                <span>
                    <SendBtn onClick={callApi}>보내기</SendBtn>
                </span>
            </div>
            <div> {chatbot}</div>
        </div>
    );
};

const UserInput = styled.input``;
const SendBtn = styled.button``;
export default ChatMain;
