import { Configuration, OpenAIApi } from "openai";
// const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const apiCall = async () => {
    try {
        const res = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "hello world",
        });
        console.log(res.data.choices[0].text);
        return res;
    } catch (e) {
        console.error(e);
    }
};

apiCall();
