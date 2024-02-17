import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/solid";

const PostItems = ({ post }) => {
  const { id, image, title, date } = post;
  return (
    <section className="postItem">
      <img src={image} alt={title} />
      <Link to={`${id}`}>
        <p className="title">{title}</p>
      </Link>
      <Link to={`${id}`}>
        <p className="date">
          <ClockIcon className="clock" /> {date}
        </p>
      </Link>
      <hr />
    </section>
  );
};

export default PostItems;
