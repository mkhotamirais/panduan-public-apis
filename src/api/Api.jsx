import { useEffect, useState } from "react";
import axios from "axios";

// registrasi get api key
let apiKey = 99773434; // https://www.omdbapi.com/
apiKey = "9c6131f2202d4dafb822bc76564f80c4"; // https://newsapi.org/

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=tesla&from=2024-01-09&sortBy=publishedAt&apiKey=${apiKey}`)
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
  content = data.map((d, i) => (
    <div key={i}>
      <h2>{d.title}</h2>
      <img src={d.urlToImage} alt={d?.title} />
    </div>
  ));
  return content;
};

export default Api;
