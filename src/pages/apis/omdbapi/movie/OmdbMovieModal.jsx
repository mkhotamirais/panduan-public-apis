import { useDispatch, useSelector } from "react-redux";
import { Id, Modal } from "../../../../components/Components";
import { getMovieByImdb } from "../../../../app/features/omdbapi/omdbapiSlice";
import { useEffect } from "react";

const OmdbMovieModal = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const { dataImdb: data } = useSelector((state) => state.omdbapi);

  useEffect(() => {
    if (id) {
      dispatch(getMovieByImdb(id));
    }
  }, [dispatch, id]);

  if (data) {
    return (
      <Modal onClick={onClose} className={"text-sm"}>
        <Id>
          <span className="text-black">ImdbID</span>: {data.imdbID}
        </Id>
        <div>Title : {data.Title}</div>
        <div>Writer : {data.Writer}</div>
        <div>Director : {data.Director}</div>
        <div>Country: {data.Country}</div>
        <div>Lanuage: {data.Language}</div>
        <div>Type : {data.Type}</div>
        <div>Genre : {data.Genre}</div>
        <div>Runtime: {data.Runtime}</div>
        <div>Released : {data.Released}</div>
        <div>
          Imdb : {data.imdbRating} | {data.imdbVotes}
        </div>
        <div>Actors : {data.Actors}</div>
        <div>Awards : {data.Awards}</div>
        <div>Country : {data.Country}</div>
        <div>Plot : {data.Plot}</div>
      </Modal>
    );
  } else return <div>No data found</div>;
};
OmdbMovieModal.propTypes;

export default OmdbMovieModal;
