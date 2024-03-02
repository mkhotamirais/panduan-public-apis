import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, Title } from "../../../../components/Components";
import OmdbMovieCard from "./OmdbMovieCard";
import { getMovies } from "../../../../app/features/omdbapi/omdbapiSlice";
import { FaSearch } from "react-icons/fa";

const OmdbMovies = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.omdbapi);
  const [params, setParams] = useState({ s: "spongebob", h: "halo" });

  let keys = Object.keys(params);
  let values = Object.values(params);
  let result = [];
  for (let i = 0; i < keys.length; i++) {
    if (i % 2 !== 0 || i == 2) result.push("&");
    result.push(keys[i], "=");
    result.push(values[i]);
  }
  const joinedParams = result.join("");

  useEffect(() => {
    dispatch(getMovies(joinedParams));
  }, [dispatch, joinedParams]);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "succeeded") {
    const movies = data?.Search;
    if (movies && movies.length > 0) {
      const renderedMovies = data?.Response && movies.map((dt) => <OmdbMovieCard key={dt.imdbID} dt={dt} />);
      content = <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">{renderedMovies}</div>;
    } else content = <div className="italic flex justify-center mt-5">no movies found</div>;
  }

  const onSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    let s;
    if (!search || search === "") {
      s = "spongebob";
    } else s = search;
    setParams({ ...params, s });
    e.target.search.value = "";
  };

  const yearList = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012"];

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title className={"w-full text-center"}>OmdbMovies</Title>
      </div>
      <div className="flex items-center justify-between gap-1 py-2">
        <div className="flex gap-1">
          <select
            name="type"
            id="type"
            onChange={(e) => setParams({ ...params, type: e.target.value })}
            className="border rounded p-2 focus:outline-none"
          >
            <option value="">Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
          <select
            name="type"
            id="type"
            onChange={(e) => setParams({ ...params, y: e.target.value })}
            className="border rounded p-2 focus:outline-none"
          >
            <option value="">Years</option>
            {yearList.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <form onSubmit={onSearch} className="flex items-center border rounded overflow-hidden">
          <input type="search" id="search" name="search" className="rounded p-2 w-full leading-none focus:outline-none" />
          <button type="submit" className="bg-indigo-500 hover:opacity-50 text-white p-3">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="my-2">{content}</div>
    </div>
  );
};

export default OmdbMovies;
