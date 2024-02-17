import React from "react";
import PostForm from "../components/PostForm";
import { useRouteLoaderData } from "react-router-dom";

const Edit = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <section className="detial">
      <PostForm
        header={"Edit your post now...😊"}
        btnText={"Update Post"}
        oldPostData={post}
        method={"patch"}
      />
    </section>
  );
};

export default Edit;
