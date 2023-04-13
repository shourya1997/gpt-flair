import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);
// you are a copywriter, you are the best one in the world you have to review the text written below and rewrite it to make it more witty and conversational

const generateAction = async (req, res) => {
  const {input, tonalities} = req.body
  const basePromptPrefix =
  `You are a copywriter, you are the best one in the world you have to review the text written below and rewrite it to make it more ${tonalities.join(' and ')}\nText:${input}\nOutput:`;

  let baseCompletion;
  try {
    // Run first prompt
    baseCompletion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${basePromptPrefix}`,
      temperature: 0.7,
      max_tokens: 2048,
    });

    console.log({baseCompletion})
    if (!baseCompletion) {
      throw new Error('Didnt get proper response')
    }

    const baseChoice = baseCompletion && baseCompletion.data.choices.pop();

    res.status(200).json({ baseChoice });
  } catch (e) {
    res.status(500).json({ errorMessage: e.message });
    console.log(e);
  }
};

export default generateAction;
