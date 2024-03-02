import { Link } from "react-router-dom";
import { Err, Id, Modal, Title } from "../../../../components/Components";
import { useDispatch, useSelector } from "react-redux";
import { deletePosts } from "../../../../app/features/jsonplaceholder/jpSlice";
import { Btn } from "../../../../components/Tags";

export const JpModalView = ({ onClose, p }) => {
  const { isSuccess, isError, error } = useSelector((state) => state.jp);
  const user = useSelector((state) => state.jp.users?.find((u) => u.id.toString() === p.userId.toString()));

  if (isSuccess) {
    return (
      <Modal onClick={onClose}>
        <Id>ID: {p.id}</Id>
        <Title>{p.title}</Title>
        <p>
          By:{" "}
          <Link to="/">
            <i className="underline">{user.name}</i>
          </Link>
        </p>
        <p className="flex-grow">{p.body}</p>
      </Modal>
    );
  } else if (isError) {
    return <Err>{error}</Err>;
  }
};
JpModalView.propTypes;

export const JpModalDelete = ({ onClose, p }) => {
  const { isSuccess, isError, error } = useSelector((state) => state.jp);
  const dispatch = useDispatch();

  const onDelete = (p) => {
    dispatch(deletePosts(p)).then((res) => console.log(res));
  };

  if (isSuccess) {
    return (
      <Modal onClick={onClose} className={"gap-3"}>
        <Id>Delete data {p.id}</Id>
        <p>Are you sure?</p>
        <div>
          <Btn onClick={() => onDelete(p)} className="bg-red-600 hover:bg-red-500 text-white mr-1">
            Delete
          </Btn>
          <Btn onClick={onClose}>Cancel</Btn>
        </div>
      </Modal>
    );
  } else if (isError) {
    return <Err>{error}</Err>;
  }
};
JpModalDelete.propTypes;
