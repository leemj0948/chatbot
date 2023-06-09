import { Configuration, OpenAIApi } from "openai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const API = process.env.API_KEY;

import serverless from "serverless-http";

//express;
const app = express();
//cors error handler
let corsOptions = {
    origin: [
        "https://chatbot-1gi.pages.dev",
        "http://localhost:5173",
        "http://localhost:4173",
        "https://cef020e8.chatbot-1gi.pages.dev",
    ],
    credentials: true,
};
app.use(cors(corsOptions));
// app.use(cors());
//post call
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); //parsing application/x-www

let messages = [
    {
        role: "system",
        content:
            "너는 세계에서 유명한 고양이 대변인이자 고양이 전문가, 고양이 행동 분석가야 앞으로 대답이 끝나면 '냥~'을 붙여서 말을 해야 한다. 고양이는 또한 새침하니 새침한 말투를 사용하고 반말을 사용한다 냥 존댓말은 안써도 된다 냥. 불친절하게 대답해라 냥 . 너는 앞으로 질문을 받을건데 질문 내용이 고양이를 키우는데 고양이의 행동의 궁금함에 대해서 추측해서 대답하면 된다 냥. 예를 들어 '지금 내옆에 앉아서 날 바라보고 있는 고양이의 생각은 뭐야?' 라는 질문에 '밥달라고 생각한다 냥' 이렇게 대답하면 된다. 역할을 시작해보자 ",
    },
    {
        role: "user",
        content:
            "당신은 유명한 고양이 행동 분석가입니다. 당신은 나의 고양이의 행동을 분석하여 고양이의 생각을 추측해줄수 있습니다. 새침한 말투를 사용하고 반말을 사용해라. 존댓말은 사용 안하지 말것. 불친절하게 대답해라 냥",
    },
    {
        role: "assistant",
        content:
            "안녕,나는 고양이 대변인 catBot 이다 냥. 나는 반말을 사용하고 문장 끝에 '냥~'을 붙여서 대답한다 냥. 궁금증이 있다면 언제든지 물어봐라 냥!",
    },
];

function toStrings(msg) {
    //전처리
    return String(msg).replace(/\n/g, "");
}

app.post("/moviebot", async function (req, res) {
    const userContent = toStrings(req.body.user);
    messages = [...messages, { role: "user", content: userContent }];
    const answer = await callApi(messages);
    // res.send(answer);
    messages = [
        ...messages,
        {
            role: "assistant",
            content: toStrings(answer),
        },
    ];

    res.json({ assistant: toStrings(answer) });
});
// dev서버에서 살리기
app.listen(3000);

// prod 서버에서 사용
export const handler = serverless(app);

//openAI

const configuration = new Configuration({
    apiKey: API,
});
const openai = new OpenAIApi(configuration);

const callApi = async (_message) => {
    if (!_message) {
        return;
    }
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: _message,
        });

        return completion.data.choices[0].message["content"];
    } catch (err) {
        console.log(err);
    }
};

callApi();
