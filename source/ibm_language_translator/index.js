const fetch = require('node-fetch');
require('dotenv').config({ path: '../../.env' })
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const LANGUAGE_TRANSLATOR_APIKEY = process.env.LANGUAGE_TRANSLATOR_APIKEY
const LANGUAGE_TRANSLATOR_URL= process.env.LANGUAGE_TRANSLATOR_URL


const languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  authenticator: new IamAuthenticator({
    apikey: LANGUAGE_TRANSLATOR_APIKEY,
  }),
  serviceUrl: LANGUAGE_TRANSLATOR_URL,
});

const translateParams = {
  text: 'Hello, how are you today?',
  modelId:'en-es',//"en-bn" 
};

languageTranslator.translate(translateParams)
  .then(translationResult => {
    console.log(JSON.stringify(translationResult, null, 2));
    console.log("Result: ",translationResult.result.translations)
  })
  .catch(err => {
    console.log('error:', err);
  });