import { useSelector } from "react-redux";
import JpUserCard from "./JpUserCard";
import { CardGrid } from "../../../../components/Components";

const JpUsers = () => {
  const { users, isLoading, isSuccess, isError, error } = useSelector((state) => state.jp);

  let content;
  if (isLoading) content = <div>loading...</div>;
  else if (isError) content = <div>{error}</div>;
  else if (isSuccess) {
    const renderedUsers = users && users.map((u) => <JpUserCard key={u.id} u={u} />);
    content = <CardGrid>{renderedUsers}</CardGrid>;
  }

  return <div>{content}</div>;
};

export default JpUsers;
