import { useSelector } from "react-redux";
import { useState } from "react";
import { Actions, Card, Err, Id } from "../../../../components/Components";
import { JpModalDelete, JpModalView } from "./JpUserModal";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

const JpUserCard = ({ u }) => {
  const { isSuccess, isError, error } = useSelector((state) => state.jp);
  const [showModaView, setShowModalView] = useState(null);
  const [showModalDelete, setShowModalDelete] = useState(null);

  if (isSuccess) {
    return (
      <Card>
        <Id>ID: {u.id}</Id>
        <p className="flex items-center gap-2 font-medium">
          <FaUser className="inline-block text-sm" />
          {u.name}
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope className="inline-block text-sm" />
          {u.email}
        </p>
        <p className="flex items-center gap-2">
          <FaPhone className="inline-block text-sm" />
          {u.phone}
        </p>
        <Actions
          onModalView={() => setShowModalView(u?.id)}
          onModalDelete={() => setShowModalDelete(u?.id)}
          detail={`detail/${u?.id}`}
          update={`update/${u?.id}`}
        />
        {showModaView === u?.id && <JpModalView onClose={() => setShowModalView(null)} u={u} />}
        {showModalDelete === u?.id && <JpModalDelete onClose={() => setShowModalDelete(null)} u={u} />}
      </Card>
    );
  } else if (isError) {
    return <Err>{error}</Err>;
  }
};
JpUserCard.propTypes;

export default JpUserCard;
