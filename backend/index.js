import { Configuration, OpenAIApi } from "openai";
import express from "express";
import cors from "cors";
const API = "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";

const serverless = require("serverless-http");

//express;
const app = express();
//cors error handler
let corsOptions = {
    origin: "https://chatbot-1gi.pages.dev/",
    Credentials: true,
};
app.use(cors(corsOptions));
// app.use(cors());
//post call
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); //parsing application/x-www

app.get("/moviebot", async function (req, res) {
    const answer = await callApi();
    res.send(answer);
});
// app.listen(3000);

module.exports.handler = serverless(app);

//openAI

const configuration = new Configuration({
    apiKey: API,
});
const openai = new OpenAIApi(configuration);
const callApi = async () => {
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content:
                        "당신은 10000편 이상의 영화를 시청하였으며 영화평론가 이자 추천가입니다. 당신은 user의 성향에 따라 알맞은 영화의 장르 및 영화를 추천해줄수 있습니다.",
                },
                {
                    role: "user",
                    content:
                        "당신은 천만편 이상의 영화를 시청하였으며 영화평론가입니다. 당신은 나의 성향에 따라 알맞은 영화 장르 및 영화를 추천해줄수 있습니다.",
                },
                {
                    role: "assistant",
                    content:
                        "네 저는 세계에서 알아주는 영화 평론가이며 천만편 이상의 영화를 시청하였습니다. 당신에게 영화를 추천해드리겠습니다. 당신의 취향을 알려주시겠어요? 가능하다면 마지막에 본 영화와 그 영화에 대한 짧은 생각도 함께 부탁드립니다.",
                },
                {
                    role: "user",
                    content:
                        "저는 '탑건'을 가장 재미있게 봤으며 영화의 웅장함과 영상미가 아주 좋았습니다. 액션 쪽 장르를 선호합니다. ",
                },
            ],
        });
        return completion.data.choices[0].message["content"];
    } catch (err) {
        console.log(err);
    }
};

callApi();
