

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const { API_KEY, MODEL_NAME, OMDB_KEY } = require("../constants");

const uesGemini = async (userInput) => {
  
  
  const GetMovieDeatils = async (movieName) => {
    try {
      const result = await fetch(
        "https://www.omdbapi.com/?t=" + movieName + "&apikey=" + OMDB_KEY
      );
      const json = await result.json();

      return json;
    } catch (error) {
      console.log(error);
    }
  };


  const genAI = new GoogleGenerativeAI(API_KEY);
  const generationConfig = {
    temperature: 1,
    topK: 64,
    topP: 0.95,
    maxOutputTokens: 8192,
  };
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
    generationConfig,
    safetySettings,
  });

  const PROMPT =
    "Act as a Movie Recommendation system and suggest some movies for the the query: " +
    userInput +
    ". Only give me names of 10 movies in comma seperated like the follwing example result given ahead. Example: Ready Player One, Tron: Legacy, Wreck-It Ralph, Jumanji, The Last Starfighter. No Extra Text Should not be present. Only the movie names should be present.";

  try {
    const result = await model.generateContent(PROMPT);
    const response = await result.response;

    // console.log(response.text());
    const movieNames = response.text();

    const data = movieNames.split(", ").map((movie) => GetMovieDeatils(movie));

    const suggestions = await Promise.all(data);
    return suggestions;
  } catch (error) {
 
    console.log(error);
  }
};

export default uesGemini;
