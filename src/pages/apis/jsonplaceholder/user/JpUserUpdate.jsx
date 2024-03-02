import { useEffect, useState } from "react";
import { Title } from "../../../../components/Components";
import { Btn, Input, Label, Textarea } from "../../../../components/Tags";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const JpUserPost = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.jp.users.find((u) => u.id.toString() === id));
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
    }
  }, [user]);

  const canSave = [name, email].every(Boolean);

  const onPost = (e) => {
    e.preventDefault();
    if (canSave) {
      navigate(-1);
      //   const data = { id: uuidv4(), name, email };
      //   dispatch(postPost(data))
      //     .then(() => {
      //       navigate(-1);
      //       dispatch(getPosts());
      //     })
      //     .catch((err) => console.log(err));
    }
  };

  return (
    <section className="border rounded p-3">
      <Title>Post Form</Title>
      <form onSubmit={onPost}>
        <div className="mb-2">
          <Label id="name">name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-2">
          <Label id="email">email</Label>
          <Textarea id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Btn type="submit" disabled={!canSave} className={"w-full sm:w-auto sm:px-8 py-3 mt-2"}>
          Post
        </Btn>
      </form>
    </section>
  );
};

export default JpUserPost;
