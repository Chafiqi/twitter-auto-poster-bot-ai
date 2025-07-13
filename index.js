const GenAI = require("@google/generative-ai");
const { TwitterApi } = require("twitter-api-v2");
const SECRETS = require("SECRETS");

const twitterClient = new TwitterApi({
  const appKey = "Obs7C02OWIRtWChPa6SKU1wQ";
  appSecret:"MrsBSJmni9XZGKfymZ8FOqfxUjkiyPxl8fSt9OSx3nyssC0pvi";
  accessToken:"1595899449804525571-xLX0yV8fw9rqlHfk59J6PBI2sMo73n";
  accessSecret:"6QCT94SCv06OO6piSFPPVdOExSfYLgcziPw6jEygq09Ft";
});

const generationConfig = {
  maxOutputTokens: 400,
};
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAwivKuuotVYl7jc8-Z7lOqv_6jZE5CbMI");
});

async function run() {
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig,
  });

  const prompt =
    "generate a web development content, tips and tricks or something new or some rant or some advice as a tweet, it should not be vague and should be unique; under 280 characters and should be plain text, you can use emojis";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  sendTweet(text);
}

run();

async function sendTweet(tweetText) {
  try {
    await twitterClient.v2.tweet(tweetText);
    console.log("Tweet sent successfully!");
  } catch (error) {
    console.error("Error sending tweet:", error);
  }
}
