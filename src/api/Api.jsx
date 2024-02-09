import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = 99773434;

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=avatar`).then((res) => {
      console.log(res.data.Search);
      setData(res.data.Search);
    });
  }, []);

  let content;
  content = "halo";
  // content = data.map((fact) => <div key={fact._id}>{fact.text}</div>);
  content = data.map((d) => (
    <div key={d.imdbID}>
      <h2>{d.Title}</h2>
      <img src={d.Poster} alt="" />
    </div>
  ));
  return content;
};

export default Api;
