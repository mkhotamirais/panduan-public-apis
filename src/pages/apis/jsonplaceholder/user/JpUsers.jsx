import { useSelector } from "react-redux";
import JpUserCard from "./JpUserCard";
import { CardGrid, Title } from "../../../../components/Components";
import { Link } from "react-router-dom";
import { Btn } from "../../../../components/Tags";
import { FaPlus } from "react-icons/fa";

const JpUsers = () => {
  const { users, isLoading, isSuccess, isError, error } = useSelector((state) => state.jp);

  let content;
  if (isLoading) content = <div>loading...</div>;
  else if (isError) content = <div>{error}</div>;
  else if (isSuccess) {
    const renderedUsers = users && users.map((u) => <JpUserCard key={u.id} u={u} />);
    content = <CardGrid>{renderedUsers}</CardGrid>;
  }

  return (
    <div>
      <div className="flex items-center justify-between my-2">
        <Title>Users List</Title>
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

export default JpUsers;
