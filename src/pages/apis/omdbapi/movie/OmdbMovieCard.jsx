import { useState } from "react";
import { Title } from "../../../../components/Components";
import OmdbMovieModal from "./OmdbMovieModal";

const OmdbMovieCard = ({ dt }) => {
  const [openModalDetail, setOpenModalDetail] = useState(null);

  return (
    <div className={"rounded overflow-hidden flex flex-col border border-indigo-400"}>
      <button onClick={() => setOpenModalDetail(dt?.imdbID)} className="w-full h-64 sm:h-72 relative">
        <div className="absolute right-2 p-1 leading-none top-2 rounded text-sm bg-black bg-opacity-70 text-indigo-400">
          {dt.Type}
        </div>
        <img src={dt?.Poster} alt={dt?.title} className="w-full h-full object-center object-cover" />
      </button>
      <div className="p-2">
        <button onClick={() => setOpenModalDetail(dt?.imdbID)} className="text-left">
          <Title className={"text-base leading-tight hover:underline"}>{dt?.Title}</Title>
        </button>
        <p>{dt?.Year}</p>
      </div>
      {openModalDetail === dt?.imdbID && <OmdbMovieModal onClose={() => setOpenModalDetail(null)} id={dt?.imdbID} />}
    </div>
  );
};
OmdbMovieCard.propTypes;

export default OmdbMovieCard;
