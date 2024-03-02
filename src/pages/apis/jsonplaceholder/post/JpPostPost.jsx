import { useState } from "react";
import { Title } from "../../../../components/Components";
import { Btn, Input, Label } from "../../../../components/Tags";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts, postPost } from "../../../../app/features/jsonplaceholder/jpSlice";
import { v4 as uuidv4 } from "uuid";

const JpPostPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const canSave = [title, content].every(Boolean);

  const onPost = (e) => {
    e.preventDefault();
    if (canSave) {
      const data = { id: uuidv4(), title, content };
      dispatch(postPost(data))
        .then(() => {
          navigate(-1);
          dispatch(getPosts());
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className="border rounded p-3">
      <Title>Post Form</Title>
      <form onSubmit={onPost}>
        <div className="mb-2">
          <Label id="title">title</Label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-2">
          <Label id="content">content</Label>
          <Input id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <Btn type="submit" disabled={!canSave} className={"w-full sm:w-auto sm:px-8 py-3 mt-2"}>
          Post
        </Btn>
      </form>
    </section>
  );
};

export default JpPostPost;
