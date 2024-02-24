import { useLoaderData } from "react-router-dom";
import PostItems from "../components/PostItems";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <PostItems post={post} key={post.id} />)}
    </>
  );
};

export default Posts;

export const loader = async () => {
  const response = await fetch(`${process.env.REACT_APP_DOMAIN}/posts`);

  if (!response.ok) {
  } else {
    const data = await response.json();
    return data.posts;
  }
};
