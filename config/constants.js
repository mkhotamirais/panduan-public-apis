const keys = {
  omdbapi: "99773434",
  newsapi: "9c6131f2202d4dafb822bc76564f80c4",
};

const url = {
  jsonplaceholderUrl: "https://jsonplaceholder.typicode.com",
  omdbapiUrl: `http://www.omdbapi.com/?apikey=${keys.omdbapi}&`,
};

export const { jsonplaceholderUrl: jpUrl, omdbapiUrl: omdbUrl } = url;
