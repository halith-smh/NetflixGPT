export const IMAGE_URI = "https://image.tmdb.org/t/p/w500/";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const FIREBASE_API = process.env.REACT_APP_FIREBASE_API;
export const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
export const GUEST_ID = {email: "guest@netflix.com", password: "Password@1234"};


export  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY
export const MODEL_NAME = "gemini-1.5-flash";

export const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;