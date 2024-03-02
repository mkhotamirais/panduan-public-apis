import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Id, Title } from "../../../../components/Components";

const JpPostDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.jp.posts?.find((p) => p.id.toString() === id));
  const user = useSelector((state) => state.jp.users?.find((u) => u.id.toString() === post.userId.toString()));

  if (post) {
    return (
      <div className="border rounded p-3">
        <Id>ID: {post.id}</Id>
        <Title>{post.title}</Title>
        <p>{user?.name}</p>
        <p>{post.body}</p>
      </div>
    );
  } else return <div className="italic">no data</div>;
};

export default JpPostDetail;
