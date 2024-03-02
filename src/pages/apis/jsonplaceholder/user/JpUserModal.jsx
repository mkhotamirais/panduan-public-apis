import { Err, Id, Modal } from "../../../../components/Components";
import { useDispatch, useSelector } from "react-redux";
import { deletePosts } from "../../../../app/features/jsonplaceholder/jpSlice";
import { Btn } from "../../../../components/Tags";
import { FaAddressCard, FaBuilding, FaEnvelope, FaGlobe, FaPhone, FaUser } from "react-icons/fa";

export const JpModalView = ({ onClose, u }) => {
  const { isSuccess, isError, error } = useSelector((state) => state.jp);

  if (isSuccess) {
    return (
      <Modal onClick={onClose}>
        <Id>ID: {u.id}</Id>
        <p className="flex items-center gap-2 font-medium">
          <FaUser className="inline-block text-sm" />
          {u.name} <i>@{u.username}</i>
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope className="inline-block text-sm" />
          {u.email}
        </p>
        <p className="flex items-center gap-2">
          <FaPhone className="inline-block text-sm" />
          {u.phone}
        </p>
        <p className="flex items-center gap-2">
          <FaGlobe className="inline-block text-sm" />
          {u.website}
        </p>
        <p className="flex items-center gap-2">
          <FaAddressCard className="inline-block text-sm" />
          {u?.address?.street}, {u?.address?.suite}, {u?.address?.city} - {u?.address?.zipcode}
        </p>
        <p className="flex items-center gap-2">
          <FaBuilding className="inline-block text-xl" />
          {u?.company?.name} - {u?.company?.bs} - {u?.company?.catchPhrase}
        </p>
      </Modal>
    );
  } else if (isError) {
    return <Err>{error}</Err>;
  }
};
JpModalView.propTypes;

export const JpModalDelete = ({ onClose, u }) => {
  const { isSuccess, isError, error } = useSelector((state) => state.jp);
  const dispatch = useDispatch();

  const onDelete = (u) => {
    dispatch(deletePosts(u)).then((res) => console.log(res));
  };

  if (isSuccess) {
    return (
      <Modal onClick={onClose} className={"gap-3"}>
        <Id>Delete data {u.id}</Id>
        <p>Are you sure?</p>
        <div>
          <Btn onClick={() => onDelete(u)} className="bg-red-600 hover:bg-red-500 text-white mr-1">
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
