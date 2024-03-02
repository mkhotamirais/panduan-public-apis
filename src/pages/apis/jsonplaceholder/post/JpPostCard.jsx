import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Actions, Card, Err, Id, Title } from "../../../../components/Components";
import { JpModalDelete, JpModalView } from "./JpPostModal";

const JpPostCard = ({ p }) => {
  const { isSuccess, isError, error } = useSelector((state) => state.jp);
  const user = useSelector((state) => state.jp?.users?.find((u) => u.id === p.userId));
  const [showModaView, setShowModalView] = useState(null);
  const [showModalDelete, setShowModalDelete] = useState(null);

  if (isSuccess) {
    return (
      <Card>
        <Id>ID: {p?.id}</Id>
        <Title>{p?.title.substring(0, 20)}..</Title>
        <p>
          By:{" "}
          <Link to={`/jsonplaceholder/users/detail/${user?.id}`}>
            <i className="underline hover:no-underline">{user?.name}</i>
          </Link>
        </p>
        <p className="flex-grow">{p?.body.substring(0, 100)}..</p>
        <Actions
          onModalView={() => setShowModalView(p?.id)}
          onModalDelete={() => setShowModalDelete(p?.id)}
          detail={`detail/${p.id}`}
          update={`update/${p.id}`}
        />
        {showModaView === p?.id && <JpModalView onClose={() => setShowModalView(null)} p={p} />}
        {showModalDelete === p?.id && <JpModalDelete onClose={() => setShowModalDelete(null)} p={p} />}
      </Card>
    );
  } else if (isError) {
    return <Err>{error}</Err>;
  }
};
JpPostCard.propTypes;

export default JpPostCard;
