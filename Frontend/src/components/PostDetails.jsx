import { ArrowLeftIcon, ClockIcon } from "@heroicons/react/24/solid";
import { Link, useSubmit } from "react-router-dom";

const PostDetails = ({ post }) => {
  const { image, date, title, description } = post;
  const submit = useSubmit();

  const postDeleteHandler = () => {
    const confirmStatus = window.confirm(
      "Are you sure want to delete this post ?"
    );

    if (confirmStatus) {
      submit(null, { method: "DELETE" });
    }
  };

  return (
    <section className="detail">
      <div className="detail-header">
        <div>
          <h1>{title}</h1>
          <p className="date">
            <ClockIcon className="clock" />
            {date}
          </p>
        </div>

        <Link to={"/"}>
          <ArrowLeftIcon className="arrow" />
        </Link>
      </div>

      <img src={image} alt={title} />
      <p className="description">{description}</p>
      <div className="detail-footer">
        <Link to={`edit-post`}>
          <p className="btn sm">Edit</p>
        </Link>
        <p className="btn sm" onClick={postDeleteHandler}>
          Delete
        </p>
      </div>
      <hr />
    </section>
  );
};

export default PostDetails;
