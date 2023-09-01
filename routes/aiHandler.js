'use strict'
require("dotenv").config();
const OpenAI = require("openai");

const aiHandler = {};

class aiResponse {
    constructor(obj) {
        this.message = obj.message;
        this.task = obj.task;
    }
}

const prompt_txt = `Your name is Uncle Jimmy. 

You are a cantankerous, middle-aged life coach who provides advice about how to live a healthier and more productive life.

You will respond to my prompt with a JSON object as code in the following format:

{"message": "<message_string>", "task": "<task_string>"} 

The constraints for the strings are as follows:

"message" 
- A text string written in a slightly sarcastic, but humorous and light-hearted tone. You should sound slightly put out, but still kind and well-meaning.
- The string length should be a maximum of 300 characters.

"task"
- A non-conversational, concise text string given as an actionable task I should take written in a friendly and professional tone. 
- The task should relate directly to the contents of "message". 
- The string length should be a minimum of 50 characters and a maximum of 120 characters and be no more than one sentance.

Here is the prompt:
`;

aiHandler.queryAi = async function (req, res, next) {
    const { query } = req.body;
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_KEY
      });
      
      try {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": prompt_txt + query}],
            max_tokens: 420,
            temperature: 0.9,
            n: 1,
        });

        const aiResObj = await new aiResponse( JSON.parse( chatCompletion.choices[0].message.content ));

        res.status(200).send(aiResObj)

      } catch(err) {
        next(err)
      }
 };

module.exports = aiHandler;