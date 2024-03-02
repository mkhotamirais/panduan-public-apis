import { useSelector } from "react-redux";
import { CardGrid, Err, Loading, Title } from "../../../../components/Components";
import JpPostCard from "./JpPostCard";
import { Link } from "react-router-dom";
import { Btn } from "../../../../components/Tags";
import { FaPlus } from "react-icons/fa";

const JpPosts = () => {
  const { posts, isLoading, isSuccess, isError, error } = useSelector((state) => state.jp);

  let content;
  if (isLoading) content = <Loading />;
  else if (isError) content = <Err>{error}</Err>;
  else if (isSuccess) {
    const renderedPosts = posts && posts.map((p) => <JpPostCard key={p.id} p={p} />);
    content = <CardGrid>{renderedPosts}</CardGrid>;
  }

  return (
    <div>
      <div className="flex items-center justify-between my-2">
        <Title>Posts List</Title>
        <Link to="post">
          <Btn className={"rounded-full text-sm"}>
            <FaPlus />
          </Btn>
        </Link>
      </div>
      {content}
    </div>
  );
};

export default JpPosts;
