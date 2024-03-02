const { VITE_OMDBAPI_KEY: omdbapiKey } = import.meta.env;

const url = {
  jsonplaceholderUrl: "https://jsonplaceholder.typicode.com",
  omdbapiUrl: `http://www.omdbapi.com/?apikey=${omdbapiKey}&`,
};

export const { jsonplaceholderUrl: jpUrl, omdbapiUrl: omdbUrl } = url;
