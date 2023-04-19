import { Configuration, OpenAIApi } from "openai";

const API = "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";
const configuration = new Configuration({
    apiKey: API,
});
const openai = new OpenAIApi(configuration);
const callApi = async () => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
    });
    console.log(completion.data.choices[0].message);
};

callApi();
