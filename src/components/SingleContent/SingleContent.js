import { img_300, unavailable } from "../../config/config";
import "./../SingleContent/SingleContent.css";

const SingleContent = ({ id, title, poster, media_type, date }) => {
  return (
    <div className="media-item">
      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className="movieTitle">{title}</b>
      <span className="subTitle">
        <span>{media_type === "tv" ? "TV" : "Movie"}</span>
        <span>{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
