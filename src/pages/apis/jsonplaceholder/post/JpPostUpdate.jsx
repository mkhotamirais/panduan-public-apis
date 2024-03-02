import { useEffect, useState } from "react";
import { Title } from "../../../../components/Components";
import { Btn, Input, Label, Textarea } from "../../../../components/Tags";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPosts, updatePost } from "../../../../app/features/jsonplaceholder/jpSlice";

const JpPostUpdate = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.jp.posts?.find((p) => p.id.toString() === id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post?.title);
      setContent(post?.body);
    }
  }, [post]);

  const canSave = [title, content].every(Boolean);

  const onPost = (e) => {
    e.preventDefault();
    if (canSave) {
      const data = { id, title, content };
      dispatch(updatePost(data))
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
          <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <Btn type="submit" disabled={!canSave} className={"w-full sm:w-auto sm:px-8 py-3 mt-2"}>
          Update
        </Btn>
      </form>
    </section>
  );
};

export default JpPostUpdate;
