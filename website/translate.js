const axios = require('axios');

// Your GPT-3 API key
const apiKey = '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';

// Function to translate text
async function translateText(text, targetLanguage) {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Translate the following English text to ${targetLanguage}: "${text}"`,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0,
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    // Extract and return the translated text from the API response
    const translatedText = response.data.choices[0].text;
    return translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return null;
  }
}

// Example usage
const textToTranslate = 'Hello, how are you?';
const targetLanguage = 'French';

translateText(textToTranslate, targetLanguage)
  .then(translatedText => {
    console.log(`Translated text (${targetLanguage}): ${translatedText}`);
  })
  .catch(error => {
    console.error('Translation error:', error);
  });
