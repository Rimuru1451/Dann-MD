let { Configuration, OpenAIApi } = require("openai")
let fetch = require("node-fetch")
let { generateWAMessageFromContent } = require("@adiwajshing/baileys")

let fs = require('fs')
let handler = async (m, { conn, text }) => {
if (!text) throw "Hai ada yang bisa saya bantu?"
const configuration = new Configuration({
    apiKey: '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'
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
m.reply(response.data.choices[0].text)
    }
handler.help = ['openai']
handler.tags = ['fun']
handler.command = /^(yus|ai|openai)$/i
module.exports = handler