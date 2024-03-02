import { useEffect, useState } from "react";
import axios from "axios";

// registrasi get api key
// let apiKey = 99773434; // https://www.omdbapi.com/
// apiKey = "9c6131f2202d4dafb822bc76564f80c4"; // https://newsapi.org/

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  let content;
  content = "halo";

  return content;
};

export default Api;
